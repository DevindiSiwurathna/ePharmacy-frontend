import React, { Component } from "react";

export default class errorAlert extends Component {
    render(){
        return(
            <div className= "alert alert-danger" role= "alert">
                Error Occured.
            </div>
        );
    }
}