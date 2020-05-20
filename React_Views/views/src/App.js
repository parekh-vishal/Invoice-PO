import React from 'react';
import './App.css';
import User from '../../views/src/components/userReg';
//import {Router, Route} from 'react-router';
import { BrowserRouter  as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
//import { createBrowserHistory } from 'history'
import UsrLgn from './components/userLogin';
function App() {
  return (    
    <div className="App">
      <Router>
        <Route path={"/userReg"} component={User}/>
        <Route path={"/userLogin"} component={UsrLgn}/>
      </Router>
    </div>
  );
}

export default App;
