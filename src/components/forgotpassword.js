import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



export default class Forgotpassword extends Component {
    render() {
        return (

            <div className="outer">
            <div className="inner"> 
            <form>

                <h3>Forgot Password</h3>

                <div className="form-group">
                    <label>Enter your Email</label>
                    <input type="email" className="form-control" placeholder="Enter your email" />
                </div>

                
                <a href="https://accounts.google.com/ServiceLogin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&osid=1&service=mail&ss=1&ltmpl=default&rm=false&flowName=GlifWebSignIn&flowEntry=ServiceLogin" ><button type="button" className="btn btn-dark btn-lg btn-block">Submit</button></a>
                <br/>
                
                
            </form>
            </div>
            </div>
        );
    }
}