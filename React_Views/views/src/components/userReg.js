import React, { Component } from 'react'

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
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Invoice And P.O System</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><a href="#">Page 1</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#"><span className="glyphicon glyphicon-user"></span>Sign Up</a></li>
                    </ul>
                </div>
            </nav>
            <div className="container-fluid">
                <form className="container" id = "frm1" action={this.props.action} method={this.props.method} onSubmit={this.handleSubmit}>
                    <h1 id="head1">
                        User Registration Form
                    </h1>
                    <div className="input-container">
                        <label htmlFor="firstName"> First Name : </label>
                        <input className="input-field" id="in1" type="text" placeholder=" Enter First Name" name="firstName" value={this.state.firstName}
                        onChange = {this.handleFname}/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="lastName"> Last Name : </label>
                        <input className="input-field" id="in2" type="text" placeholder="Last Name" name="lastName" value={this.state.lastName}
                        onChange = {this.handleLname} />
                    </div>
                    <div className="input-container">
                        <label htmlFor="email"> E-Mail : </label>
                        <input className="input-field" id="in3" type="text" placeholder="E-mail" name="email" value={this.state.email}
                        onChange = {this.handleEmail} />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password"> Password : </label>
                        <input className="input-field" id="in4" type="password" placeholder="Password" name="password" value={this.state.password} 
                        onChange = {this.handlePassword}/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="organization"> Organization : </label>
                        <input className="input-field" id="in5" type="text" placeholder="Organization" name="organization" value={this.state.organization} 
                        onChange = {this.handleOrg}/> 
                    </div> 
                    <button>SignUp</button>
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
