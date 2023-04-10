import React from 'react';
import { ApolloClient, 
  InMemoryCache, 
  ApolloProvider,
  createHttpLink } from '@apollo/client';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context'

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Header from './components/Header/';
import Footer from './components/Footer';
import Content from './pages/Content';
import Profile from './pages/Profile';

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {

  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="">
          <Header/>
          <div className="container">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/content' element={<Content/>}/>
              {/* <Route path='' element={</>}/> */}
              <Route path='/me' element={<Profile/>}/>
              {/* <Route path='/profiles/:username' element={<Profile/>}/> */}
              {/* <Route 
                path="/contents/:contentId" 
                element={<SingleContent/>}
              /> */}
            </Routes>
          </div>
          <Footer/>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

/*
  Notes:
  Might remove the Header and Footer from App and import it inside Home. At the same time Might not even need the Footer for this project. However, trying to adopt Joshua idea of just having a modal or card pop in front of the page to do login/signup without directing to new page. Need to trial/error.
*/