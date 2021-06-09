import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios'

class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            pharmacies: [],
            pharname:'',
            value1:'byname',
            errorMsg: ''

             
        }

       
    }

    changeHandler = e => {
        this.setState({ pharname: e.target.value})
    }

    changeHandler2 = e => {
        this.setState({ value1: e.target.value1})
    }

    


   submitHandler = e => {

        e.preventDefault()
        console.log(this.state.pharname)
        axios
           .get('https://localhost:44357/api/Pharmacies?field=name&value='+this.state.pharname)
           .then(response => {
               console.log(response)
               console.log()
               this.setState({pharmacies:response.data})
           })
           .catch(error => {
               console.log(error)
               this.setState({errorMsg: 'Error retrieving data'})
           })
    }

    /*componentDidMount() {
        axios.get('/api/Pharmacies?field=name&value=ghghjgkj')
        .then(response => {
            console.log(response)
            this.setState({pharmacies:response.data})
        }) 
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'Error retrieving data'}) checked={this.state.searchby==="bydistrict"}
        }) 

      }*/
    
    
    render() {
        const { pharmacies } = this.state

        const { value1 } = this.state



        return (
            <div>
                <div className="outer">
                <div className="inner4">
                <h1>Search Pharmacy</h1>

                <input type="radio" value1="byname" checked={value1 === "byname"} onChange={this.changeHandler2} /><label>.  Search by name</label>
                <br></br>

                <input type="radio" value1="bydistrict" checked={value1 === "bydistrict"} onChange={this.changeHandler2} /><label>.  Search by district</label>

                 
                 <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" placeholder="Enter pharmacy name" onChange={this.changeHandler} />
                        <button type="submit" >Search</button>
                    </div>
                
                </form>
                <br></br>

                
                {   
                     pharmacies.map(pharmacy => 
                        

                        <div  key={pharmacy.id}>
                            
                            <h4>{pharmacy.pharmacyname} Pharmacy</h4>
                            
                            <br></br>
                            <div className="row">
                                <div className="col-6">
                                <img src={pharmacy.imageSrc} className="card-img-top"/>
                                </div>
                                <div className="col-2">
                                    <p>Address          </p>
                                    <br></br>
                                    <p>District         </p>
                                    <p>TeleNo           </p>
                                    <p>Email            </p>
                                    <p>RegNo            </p>
                                </div>
                                <div className="col-4">
                                    <p>:    {pharmacy.address}</p>
                                    <p>:    {pharmacy.district}</p>
                                    <p>:    {pharmacy.teleNo}</p>
                                    <p>:    {pharmacy.email}</p>
                                    <p>:    {pharmacy.regNo}</p>
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                            <div className="col-3">
                            <Link to = {`/uplist/${pharmacy.id}`} ><button type="submit" className="btn btn-dark" >Place an order</button></Link>
                            </div>
                            <div className="col-3">
                            <button type="submit" className="btn btn-dark" >Search drugs</button>
                            </div>
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>
                        </div>
                        
                        )
                       
                 }

                 </div>
                 </div>
            </div>
            
        )
    }
}

export default Search

