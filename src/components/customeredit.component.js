import React, { Component } from "react";
import { BrowserRouter as Route, Switch, Link } from "react-router-dom";
import axios from 'axios'
import SuccessAlert from "./successAlert";
import ErrorAlert from "./errorAlert";

export default class editcustomer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            customername:'',
            email:'',
            teleNo:'',
            password:'',
            alert_message : ''
        }
    }

    

    componentDidMount() {

        const currentuser     = JSON.parse(atob(localStorage.login.split(".")[1]));
        axios.get('https://localhost:44357/api/Customers/'+ currentuser.id)
        .then(res => {
            //console.log(res)
           this.setState(res.data)
        })
        .catch(err => console.log(err))
      
      }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        const currentuser     = JSON.parse(atob(localStorage.login.split(".")[1]));
        console.log(this.state)
        axios
           .put('/api/Customers/'+ currentuser.id, this.state)
           .then(response => {
            this.setState({alert_message:"success"})
        })
        .catch(error => {
            this.setState({alert_message:"error"})
        })
    }

    render() {
        const { customername, email, teleNo, password } = this.state
        return (
            <div className="outer">
            <div className="inner"> 

            <hr/>
                {this.state.alert_message=="success"?<SuccessAlert/>:null}
                {this.state.alert_message=="error"?<ErrorAlert/>:null}


            <form onSubmit={this.submitHandler}>
                <h3>Edit profile</h3>

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
                    <input type="text" className="form-control" placeholder="Enter telephone no" name="teleNo" value={teleNo} onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" value={password} onChange={this.changeHandler}/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Update</button>
            </form>
            </div>
            </div>
        );
    }
}


