import React,{ Component } from 'react';
//import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from "react-router-dom";
import './district.css';
//import Upload from "./upload.component";
class Districtpharmacy extends React.Component{
    state = {
        pharmacy: [],
        District: this.props.district
      };
      
        componentDidMount() {
          console.log(this.state)
          fetch("https://localhost:44357/api/Pharmacies/district/"+this.props.district)
            .then(response => response.json())
            .then(pharmacy => this.setState({pharmacy: pharmacy}));
            //console.log(this.state)
        }      

render(){
   // console.log(this.state)
    const pharm=this.state.pharmacy.map((pharmacies) =>{
    return(<option value ={pharmacies.id}>{pharmacies.pharmacyname},{pharmacies.address}</option>)})
    return(
        <div>
        <label class="label" for="district"><span>{this.props.district}</span></label>
        <select className="form-control select-dropdown"><option>Select Pharmacy</option>{pharm}</select>
        </div>
    )
}
}
export default Districtpharmacy