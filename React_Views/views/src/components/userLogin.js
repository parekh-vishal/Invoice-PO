import React, { Component } from 'react'
import Nav from "./navBar"
export class userLogin extends Component {
    constructor(props){
        super(props)

        this.state = {
            email : '',
            password : ''
        }
    }
    handleEmail = (event)=>{
        this.setState({
            email : event.target.value
        })
    }
    handlePassword = (event)=>{
        this.setState({
            password : event.target.value
        })
    }
    handleSubmit = (event)=>{
        let frm = document.getElementById('frm1')
        let frmData = new FormData(frm);
        var object = {};
        frmData.forEach((value, key) => {object[key] = value});
        var json = JSON.stringify(object);
        this.setState({xvalue: json});
        console.log('jsn',json)
        alert(`${json}`)
        fetch(this.props.formAction, {
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : json
          });
    }
    render(){
        return(
            <div className="container-fluid" id="main">
                <Nav/>
            <div className="container-fluid">
                <p id="head1" style={{marginLeft:"48%"}}>
                    Sign In
                </p>
                <form className="container" id = "frm1" action={this.props.action} method={this.props.method} onSubmit={this.handleSubmit}>
                <div className="input-container" id="inc1">
                        <label htmlFor="email"> E-mail Address or User Name  </label>
                        <input className="input-field" id="in6" type="text" placeholder=" Enter E-mail Address" name="email" value={this.state.email}
                        onChange = {this.handleEmail}/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="password"> Password  </label>
                        <input className="input-field" id="in4" type="password" placeholder="Password" name="password" value={this.state.password} 
                        onChange = {this.handlePassword}/>
                    </div>
                    <button className="btn">Sign In</button>
                </form>
            </div>
            </div>
        )
    }
};
userLogin.defaultProps = {
    action: 'http://localhost:3001/app-admin/login',
    method: 'post'
};
export default userLogin