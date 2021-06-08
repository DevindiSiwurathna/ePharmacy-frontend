import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';
import {Redirect} from "react-router-dom";

//import district from "./district.component"; <Link to= "/district" ><button type="button" className="btn btn-dark btn-lg btn-block">Sign in as customer</button></Link>

export default class Login extends Component {

    state = {

        isloggedin : '',
        msg :''
    };

	/*componentDidMount() {
	   
	   const config = {
		headers: {
			Authorization: 'Bearer ' + localStorage.getItem('token')
		}
	};

	   axios
           .get('/api/Pharmacies/16, config)
           .then(res => {
               		this.setState( {user: res.data})
	})
           .catch (err => {
               console.log(err)
           })
	
	
	}*/


    submitHandler = e => {
        e.preventDefault()

        const logingdata ={
            email : this .Email,
            password: this .Password
        }
        
        
        /*axios
           .post('/api/UserLogin', logingdata)

           .then(response => {
               console.log(response); //to print response in console in developper tool
               const currentuser = JSON.parse(atob(response.data.token.split(".")[1])); 
               localStorage.setItem('login',JSON.stringify({
                   user_role : currentuser.role,
                   user_id : currentuser.id,
                   token : response.data.token
               }));
               
           })
           .catch(error => {
               console.log(error)
           })*/

           axios
           .post('/api/UserLogin', logingdata)

           .then(response => {
               console.log(response); //to print response in console in developper tool
               //const currentuser = JSON.parse(atob(response.data.token.split(".")[1])); 
               localStorage.setItem('login', response.data.token);
               this.setState( { isloggedin : 'true'});
               
           })
           .catch(error => {
               console.log(error)
               this.setState({
                   msg : 'Invalid Email/Password' 
               })
           })
    }

    render() {

        if(this.state.isloggedin=== "true"){
			return (

               <Redirect to ={'/Home'} />
			
			)
		
		}

        let errr ='';

        if (this.state.msg){

            errr =(
                <div className="alert alert-danger" role="alert" >
                    {this.state.msg}
                </div>
            )
        }

        
        return (

            <div className="outer">
            <div className="inner"> 
            <form onSubmit={ this.submitHandler}>
                { errr }

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" placeholder="Enter email" onChange ={ e => this.Email = e.target.value} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="text" className="form-control" placeholder="Enter password" onChange ={ e => this.Password = e.target.value} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                 
                
                
                <br></br>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <Link to= "/Forgotpassword" >password?</Link>
                </p>
            </form>
            </div>
            </div>
        );
    
    }
}