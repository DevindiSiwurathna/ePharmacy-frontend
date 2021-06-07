import React,{ Component } from 'react';
//import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import { Link, useParams, withRouter } from "react-router-dom";

import './district.css';
import Upload from "./upload.component";
import Districtpharmacy from "./districtpharmacy.component";

class District extends React.Component{
    state = {
        pharmacy: []
      };
     
     

   
    render(){
       // const {custid} = useParams();
        //console.log(custid);
        return(

            <div className="container">

                <div className="container district">
                <form action="/uploadlist" method="get">
                    <div className="row">
                        <div className="container header">
                        <h1>Select your District and Nearby Pharmacy</h1>
                        <p>Please select only one pharmacy</p>
                        </div>                 
                    </div>
                    
                <div className="row">
               <div className="form-column">
                <Districtpharmacy district="Mathara"/>
                <Districtpharmacy district="Galle"/>
                <Districtpharmacy district="Hambantota"/>
                <Districtpharmacy district="Kalutara"/>
                <Districtpharmacy district="Colombo"/>
                <Districtpharmacy district="Gampaha"/>
                <Districtpharmacy district="Rathnapura"/>
                <Districtpharmacy district="Kurunegala"/>
        </div>
            
                <div className="form-column">
                <Districtpharmacy district="Monaragala"/>
                <Districtpharmacy district="Anuradhapura"/>
                <Districtpharmacy district="Polonnaruwa"/>
                <Districtpharmacy district="Kandy"/>
                <Districtpharmacy district="Nuwara Eliya"/>
                <Districtpharmacy district="Kegalla"/>
                <Districtpharmacy district="Matale"/>
                <Districtpharmacy district="Badulla"/>
    <Districtpharmacy district="Ampara"/>
                </div>
               
                <div className="form-column">
                <Districtpharmacy district="Puttalam"/>
                <Districtpharmacy district="Trincomalee"/>
                <Districtpharmacy district="Batticaloa"/>
                <Districtpharmacy district="Mannar"/>
                <Districtpharmacy district="Vavuniya"/>
                <Districtpharmacy district="Mulaitivu"/>
                <Districtpharmacy district="Kilinochchi"/>
                <Districtpharmacy district="Jaffna"/>
               </div>
                </div>

                    <div>
                       <br/>
                       <Link to = "/uploadlist" ><button type="button" className="districtSelectButton" value = "Add Prescription" >Add Prescription</button></Link>
                    </div>
                    <br/>
                    <button type="submit" >Add</button>
                    </form>

                    
  

                </div>

            </div> 

        
        );
    }

    

}

export default withRouter(District);