import React , { Component } from 'react';
import Nav from '../components/navBar'
export class OrgReg extends Component{
    constructor(props){
        super(props)
        this.state = {
            orgName : '',
		    ceoName : '',
		    orgPAN : '',
		    orgGST : '',
		    orgTIN : '',
		    service_tax_no : '',
		    export_import_regd_no : '',
		    form_regd_no : '',		
		    orgAddr1 : '',
		    orgAddr2 : '',
		    orgCity : '',
		    orgDistrict : '',
		    orgState : '',
		    orgCountry : '',
		    orgStatus : ''
        }
    }
    handleOname = (event)=>{
        this.setState({
            orgName : event.target.value
        })
    }
    handleCname = (event)=>{
        this.setState({
            ceoName : event.target.value
        })
    }
    handleOrgPan = (event)=>{
        this.setState({
            orgPAN : event.target.value
        })
    }
    handleOrgGST = (event)=>{
        this.setState({
            orgGST : event.target.value
        })
    }
    handleOrgTIN = (event)=>{
        this.setState({
            orgTIN : event.target.value
        })
    }
    handleStax = (event)=>{
        this.setState({
            service_tax_no : event.target.value
        })
    }
    handleImexNo =(event)=>{
        this.setState({
            export_import_regd_no : event.target.value
        })
    }
    handleFromRegd = (event)=>{
        this.setState({
            form_regd_no : event.target.value
        })
    }
    handleOrgAdd1 = (event)=>{
        this.setState({
            orgAddr1 : event.target.value
        })
    }
    handleOrgAdd2 = (event)=>{
        this.setState({
            orgAddr2 : event.target.value
        })
    }
    handleOrgCity = (event)=>{
        this.setState({
            orgCity : event.target.value
        })
    }
    handleOrgDis = (event)=>{
        this.setState({
            orgDistrict : event.target.value
        })
    }
    handleOrgState = (event)=>{
        this.setState({
            orgState : event.target.value
        })
    }
    handleOrgCountry = (event) =>{
        this.setState({
            orgCountry : event.target.value
        })
    }
    handleStatus = (event) => {
        this.setState({
            orgStatus : event.target.value
        })
    }
    handleSubmit = (event)=>{
        let frm = document.getElementById('frm2')
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
                    <p id="head2">Organization Registration</p>
                    <form id="frm2" className="container" action={this.props.action} method={this.props.method} onSubmit={this.handleSubmit}> 
                    <div className="input-container" >
                        <label htmlFor="oegName">Organization Name</label>
                        <input className="input-field" id="ino1" type="text" placeholder="Enter Organization Name" name="orgName" value={this.state.orgName}
                        onChange = {this.handleOname}/>
                    </div>
                    <div className="input-container" >
                        <label htmlFor="ceoName">CEO Name</label>
                        <input className="input-field" id="ino1" type="text" placeholder="Enter CEO Name" name="ceoName" value={this.state.ceoName}
                        onChange = {this.handleCname}/>
                    </div>
                    <div className="input-container" >
                        <label htmlFor="orgPan">PAN Number</label>
                        <input className="input-field" id="ino1" type="text" placeholder="Enter Organization's PAN Number" name="orgPAN" value={this.state.orgPAN}
                        onChange = {this.handleOrgPan}/>
                    </div>
                    <div className="input-container" >
                        <label htmlFor="orgGST">GST Number</label>
                        <input className="input-field" id="ino1" type="text" placeholder="Enter Organization's GST Number" name="orgGST" value={this.state.orgGST}
                        onChange = {this.handleOrgGST}/>
                    </div>
                    <div className="input-container" >
                        <label htmlFor="orgTIN">TIN Number</label>
                        <input className="input-field" id="ino1" type="text" placeholder="Enter Organization's TIN Number" name="orgTIN" value={this.state.orgTIN}
                        onChange = {this.handleOrgTIN}/>
                    </div>
                    <div className="input-container" >
                        <label htmlFor="s_tax">Service Tax Number</label>
                        <input className="input-field" id="ino1" type="text" placeholder="Enter Oranization's Service Tax Number" name="service_tax_no" value={this.state.service_tax_no}
                        onChange = {this.handleStax}/>
                    </div>
                    <div className="input-container" >
                        <label htmlFor="im_ex_regdNo">Import Export Registration Number</label>
                        <input className="input-field" id="ino1" type="text" style={{width : "350px"}} placeholder="Enter Organization's Import Export Registration Number " name="export_import_regd_no" value={this.state.export_import_regd_no}
                        onChange = {this.handleImexNo}/>
                    </div>
                    <div className="input-container" >
                        <label htmlFor="form_regd">Form Registration Number</label>
                        <input className="input-field" id="ino1" type="text" style={{width : "350px"}} placeholder="Enter Organization's Form Registration Number" name="form_regd_no" value={this.state.form_regd_no}
                        onChange = {this.handleFromRegd}/>
                    </div>
                    <div className="input-container" >
                        <label htmlFor="orgAdd1">Address Line 1</label>
                        <input className="input-field" id="ino1" type="text" placeholder="Enter Address Line 1" name="orgAddr1" value={this.state.orgAddr1}
                        onChange = {this.handleOrgAdd1}/>
                    </div>
                    <div className="input-container" >
                        <label htmlFor="orgAdd2">Address Line 2</label>
                        <input className="input-field" id="ino1" type="text" placeholder="Enter Address Line 2" name="orgAddr2" value={this.state.orgAddr2}
                        onChange = {this.handleOrgAdd2}/>
                    </div>
                    <div className="input-container" >
                        <label htmlFor="orgCity">City</label>
                        <input className="input-field" id="ino1" type="text" placeholder="Enter City Name " name="orgCity" value={this.state.orgCity}
                        onChange = {this.handleOrgCity}/>
                    </div>
                    <div className="input-container" >
                        <label htmlFor="orgDistrict">District</label>
                        <input className="input-field" id="ino1" type="text" placeholder="Enter District" name="orgDistrict" value={this.state.orgDistrict}
                        onChange = {this.handleOrgDis}/>
                    </div>
                    <div className="input-container" >
                        <label htmlFor="orgState">State</label>
                        <input className="input-field" id="ino1" type="text" placeholder="Enter State" name="orgState" value={this.state.orgState}
                        onChange = {this.handleOrgState}/>
                    </div>
                    <div className="input-container" >
                        <label htmlFor="orgCountry">Country</label>
                        <input className="input-field" id="ino1" type="text" placeholder="Enter Country" name="orgCountry" value={this.state.orgCountry}
                        onChange = {this.handleOrgCountry}/>
                    </div>
                    <div className="input-container" >
                        <label htmlFor="status">Status</label>
                        <input className="input-field" id="ino1" type="text" placeholder="Enter Current Status of Organization" name="orgStatus" value={this.state.orgStatus}
                        onChange = {this.handleStatus}/>
                    </div>
                    <button className="btn" style={{width:"60%"}}>Register</button>
                    </form>                  
                </div>
            </div>
        )
    }
};
OrgReg.defaultProps = {
    action: 'http://localhost:3001/app-admin/orgReg',
    method: 'post'
};
export default OrgReg