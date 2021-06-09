import React from 'react'
import Up from './up'

import axios from "axios";
import { Link, withRouter,useParams } from "react-router-dom";
//import { useLocation, useParams } from 'react-router-dom';

export default function Uplist({custid}) {

    
    //let url = new URL()
    //let myphmcy = (new URLSearchParams(window.location.search)).get('phmcy').filter(phmcy => phmcy>0) 
    //var phmcy = (new URLSearchParams(window.location.search)).getAll('phmcy')

    //var filtered = phmcy.filter(Boolean);
      
      //console.log(filtered);
      var {myphmcy} = useParams();
    //const {myphmcy} = useParams();
    //console.log(phmcy);
   // var myphmcy = JSON.stringify(phmcy);
    //const phmcyvalue = new URLSearchParams(this.props.location.search);
    //const phmcy = phmcyvalue.get('phmcy')
    console.log(myphmcy);

    //const custid = this.props.custid;
    console.log({custid});

    
    //console.log(props.match.params);

    const ordersAPI= (url='https://localhost:44357/api/Orders') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url+id)
        }
    }
 
    const addOrEdit = (formData, onSuccess) => {

        ordersAPI().create(formData)
        .then(res => {
            onSuccess();
        })
        .catch(err => console.log(err.response.data))
    }

    return (
        <div className="row">
            <div className="jumbotron jumbotron-fluid py-4 "></div>
            <div className="container text">
                <h1 className="display-4"> Order Register</h1>
               
            </div>
            <div className="col-md-4 offset-3">
                <Up
                    addOrEdit = {addOrEdit}
                    myphmcy = {myphmcy}
                    custid = {custid}
                />
                </div> 
                <div className="col-md-1">
                    <div> </div>
                </div>
            
        </div>
    )
}

