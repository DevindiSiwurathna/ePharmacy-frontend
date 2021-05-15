import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import district from "./district.component";

export default class Login extends Component {
    render() {
        return (

            <div className="outer">
            <div className="inner"> 
            <form>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                 
                
                <Link to= "/district" ><button type="submit" className="btn btn-dark btn-lg btn-block">Sign in as customer</button></Link>
                <br/>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in as pharmacy</button>
                <p className="forgot-password text-right">
                    Forgot <Link to= "/Forgotpassword" >password?</Link>
                </p>
            </form>
            </div>
            </div>
        );
    }
}