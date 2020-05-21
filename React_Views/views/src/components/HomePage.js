import React, {  Component } from 'react'
import Nav from '../components/navBar'
export class HomePage extends  Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="container-fluid" id="main"> 
                <Nav/>
                <div className="container-fluid">
                    <p>Welcome To Invoice and Purchse Order System</p>
                </div>
            </div>
        );
    };
}

export default HomePage 