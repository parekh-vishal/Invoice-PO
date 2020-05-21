import React from 'react';
import './App.css';
import { BrowserRouter  as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import User from '../../views/src/components/userReg';
import Home from './components/HomePage';
import UsrLgn from './components/userLogin';
import OrgReg from './components/orgReg'
function App() {
  return (    
    <div className="App">
      <Router>
        <Route path={"/"} exact component={Home}/>
        <Route path={"/userReg"} exact strict component={User}/>
        <Route path={"/userLogin"} exact strict component={UsrLgn}/>
        <Route path={"/orgReg"} exact strict component={OrgReg}/>
      </Router>
    </div>
  );
}

export default App;
