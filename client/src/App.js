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
        <div className="App">
          <header>
            <Header />
          </header>
          <div>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<Signup/>}/>
              {/* <Route path='' element={</>}/> */}
            </Routes>
          </div>
          <footer>
            <Footer/>
          </footer>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
