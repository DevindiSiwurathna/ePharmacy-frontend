import React, { Component } from "react";
import { BrowserRouter as Route, Switch, Link } from "react-router-dom";
import axios from 'axios'
import SuccessAlert from "./successAlert";
import ErrorAlert from "./errorAlert";

export default class SignUpascustomer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            customername:'',
            email:'',
            teleno:'',
            password:'',
            alert_message : ''
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios
           .post('/api/Customers', this.state)
           .then(response => {
            this.setState({alert_message:"success"})
        })
        .catch(error => {
            this.setState({alert_message:"error"})
        })
    }

    render() {
        const { customername, email, teleno, password } = this.state
        return (
            <div className="outer">
            <div className="inner"> 

            <hr/>
                {this.state.alert_message=="success"?<SuccessAlert/>:null}
                {this.state.alert_message=="error"?<ErrorAlert/>:null}


            <form onSubmit={this.submitHandler}>
                <h3>Customer Registration</h3>

                <div className="form-group">
                    <label>Full name</label>
                    <input type="text" className="form-control" placeholder="Enter name" name="customername" value={customername} onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" placeholder="Enter email" name="email" value={email} onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                    <label>Teleno</label>
                    <input type="text" className="form-control" placeholder="Enter telephone no" name="teleno" value={teleno} onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" value={password} onChange={this.changeHandler}/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                Already registered <Link to="/sign-in">log in?</Link>
                </p>

            </form>
            </div>
            </div>
        );
    }
}