import React, { Component } from 'react'
import Nav from "../components/navBar"
import { Link } from 'react-router-dom'
export class userReg extends Component {
      constructor(props) {
          super(props)
      
          this.state = {
               firstName : '',
               lastName : '',
               email : '',
               password : '',
               organization : ''
          }
      }
      handleFname = (event)=>{
          this.setState({
              firstName : event.target.value
          })
      }
      handleLname = (event)=>{
          this.setState({
              lastName : event.target.value
          })
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
      handleOrg = (event)=>{
          this.setState({
              organization : event.target.value
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
      
    render() {
        return (
            <div className="container-fluid" id='main'>
            <Nav/>
            <div className="container-fluid">
            <p id="head1">
                        User Registration
                    </p>
                <form className="container" id = "frm1" action={this.props.action} method={this.props.method} onSubmit={this.handleSubmit}>
                    <div className="input-container" id="inc1">
                        <label htmlFor="firstName" className="required"> First Name  </label>
                        <input className="input-field" id="in1" type="text" required placeholder=" Enter First Name" name="firstName" value={this.state.firstName}
                        onChange = {this.handleFname}/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="lastName"> Last Name  </label>
                        <input className="input-field" id="in2" type="text" placeholder="Last Name" name="lastName" value={this.state.lastName}
                        onChange = {this.handleLname} />
                    </div>
                    <div className="input-container">
                        <label htmlFor="email" className="required"> E-Mail  </label>
                        <input className="input-field" id="in3" type="text" required placeholder="E-mail" name="email" value={this.state.email}
                        onChange = {this.handleEmail} />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password" className="required"> Password  </label>
                        <input className="input-field" id="in4" type="password" required placeholder="Password" name="password" value={this.state.password} 
                        onChange = {this.handlePassword}/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="organization" className="required"> Organization  </label>
                        <input className="input-field" id="in5" type="text" required placeholder="Organization" name="organization" value={this.state.organization} 
                        onChange = {this.handleOrg}/> 
                    </div> 
                    <button className="btn">SignUp</button>
                    <div style={{marginBottom : "25px"}}>
                    <p style={{marginLeft:"175px", fontSize:"16px"}}> <span style={{color:"red",marginRight:"2px"}}>*</span>Required field</p>
                    <p className="lastComp">Do your Organization Registered?</p>
                    <p style={{marginLeft:"126px", fontSize:"16px"}}>First Register Your Organization</p>
                    <Link className="lastlink" to="/orgReg">Organization Registration</Link>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}
userReg.defaultProps = {
    action: 'http://localhost:3001/app-admin/signup',
    method: 'post'
};

export default userReg
