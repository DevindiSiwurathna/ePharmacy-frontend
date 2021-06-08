import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios'

class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            pharmacies: [],
            pharname:'',
            errorMsg: ''

             
        }

       
    }

    changeHandler = e => {
        this.setState({ pharname: e.target.value})
    }

    


   submitHandler = e => {

        e.preventDefault()
        console.log(this.state.pharname)
        axios
           .get('https://localhost:44357/api/Pharmacies?field=name&value='+this.state.pharname)
           .then(response => {
               console.log(response)
               this.setState({pharmacies:response.data})
           })
           .catch(error => {
               console.log(error)
               this.setState({errorMsg: 'No result found'})
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

        let errr ='';

        if (this.state.msg){

            errr =(
                <div className="alert alert-danger" role="alert" >
                    {this.state.errorMsg}
                </div>
            )
        }



        return (
            <div>
                <div className="outer">
                <div className="inner4">
                <h1>Search Pharmacy</h1>

                 
                 <form onSubmit={this.submitHandler}>
                 { errr }
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
                                <div className="col-4">
                                <img src={pharmacy.imageSrc} className="card-img-top"/>
                                </div>
                                <div className="col-2">
                                    <p>Address          </p>
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
                            <Link to = "/upload" ><button type="submit" className="btn btn-dark" >Place an order</button></Link>
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

