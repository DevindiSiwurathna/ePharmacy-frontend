import React, { Component } from "react";

export default class successAlert extends Component {
    render(){
        return(
            <div className= "alert alert-success" role= "alert">
                Successfully Registered.
            </div>
        );
    }
}