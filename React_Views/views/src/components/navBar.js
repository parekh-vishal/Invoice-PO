import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export class navBar extends Component {
    render(){
        return(
            <div className="container-fluid" id="main">
                <nav className="navbar navbar-default" style={{height:"80px"}}>
                <div className="container-fluid">
                    <div className="navbar-header" style={{marginTop:"10px"}}>
                        <a className="navbar-brand" href="#">Invoice And P.O System</a>
                    </div>
                    <ul className="nav navbar-nav" style={{marginTop:"10px"}}>
                    </ul>
                    <ul className="nav navbar-nav navbar-right" style={{marginTop:"10px"}}>
                        <li><Link to="/userReg"><span className="glyphicon glyphicon-user"></span>Sign Up</Link></li>
                        <li><Link to="/userLogin"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                    </ul>
                </div>
            </nav>
            </div>
        )
    }
}

export default navBar