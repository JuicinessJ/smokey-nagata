import React from 'react';
import { ApolloClient, 
  InMemoryCache, 
  ApolloProvider } from '@apollo/client';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Header from './components/Header/';
import Footer from './components/Footer';


const client = new ApolloClient({
  uri: '/graphql',
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
