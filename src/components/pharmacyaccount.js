import React, { Component } from "react";
import axios from 'axios'
import { BrowserRouter as Route, Switch, Link } from "react-router-dom";
import SuccessAlert from "./successAlert";
import ErrorAlert from "./errorAlert";

export default class SignUpaspharmacy extends Component {

    constructor(props) {
        super(props)

        this.state = {
            RegNo:'',
            Pharmacyname:'',
            Address:'',
            District:'',
            Email:'',
            TeleNo:'',
            Password:'',
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
           .post('/api/Pharmacies', this.state)
           .then(response => {
            this.setState({alert_message:"success"})
        })
        .catch(error => {
            this.setState({alert_message:"error"})
        })
    }


    render() {
        const {RegNo, Pharmacyname, Address, District, Email, TeleNo, Password  } = this.state
        return (
                <div className="outer">
                <div className="inner3">  

                    <hr/>
                {this.state.alert_message=="success"?<SuccessAlert/>:null}
                {this.state.alert_message=="error"?<ErrorAlert/>:null}
      
                <form onSubmit={this.submitHandler}>           
                 <h3>Pharmacy Registration</h3>

                <div className="form-group">
                    <label>Pharmacy name</label>
                    <input type="text" className="form-control" placeholder="Pharmacy name"  name="Pharmacyname" value={Pharmacyname} onChange={this.changeHandler}/>
                </div>
                
                <div className="form-group">
                    <label>District</label>
                    <input type="text" className="form-control" placeholder="District"  name="District" value={District} onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" placeholder="Address" name="Address" value={Address} onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                    <label>SLMC Reg No</label>
                    <input type="text" className="form-control" placeholder="SLMC Reg No" name="RegNo" value={RegNo} onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                    <label>Telephone number</label>
                    <input type="text" className="form-control" placeholder="Enter Telephone number" name="TeleNo" value={TeleNo} onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" placeholder="Enter email" name="Email" value={Email} onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"  name="Password" value={Password} onChange={this.changeHandler}/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register as Pharmacy</button>
                <p className="forgot-password text-right">
                Already registered <Link to="/sign-in">log in?</Link>
                </p>
            </form>
            </div>
            </div>
        );
    }
}