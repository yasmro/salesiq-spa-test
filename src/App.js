import React from 'react';
import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css'
import './App.css';

import {BrowserRouter, useLocation, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home'
import Service from './pages/Service'

function App() {
  const NoMatch = () => (<div className="container mt-5 "><h1 className="display-3 position-absolute text-center ml-auto" style={{"top": 50 + "vh"}}>Not found!! </h1></div>);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={ process.env.PUBLIC_URL + '/home'} component={Home} />
          <Route exact path={ process.env.PUBLIC_URL + '/about'}  component={Home} />
          <Route exact path={ process.env.PUBLIC_URL + '/services/:dir'}  component={Service} />
          <Route component={NoMatch}/>
        </Switch> 
      </BrowserRouter>
    </>
  );
}

export default App;
