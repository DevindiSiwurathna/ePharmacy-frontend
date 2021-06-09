import React from 'react'
import Upload from './Upload'
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import { useLocation, useParams } from 'react-router';

export default function Uploadlist({custid,custname}) {

    
    //let url = new URL()
    //let myphmcy = (new URLSearchParams(window.location.search)).get('phmcy').filter(phmcy => phmcy>0) 
    var phmcy = (new URLSearchParams(window.location.search)).getAll('phmcy')

    var filtered = phmcy.filter(Boolean);
      
      console.log(filtered);
    
    var myphmcy = filtered[0];
    //console.log(phmcy);
   // var myphmcy = JSON.stringify(phmcy);
    //const phmcyvalue = new URLSearchParams(this.props.location.search);
    //const phmcy = phmcyvalue.get('phmcy')
    console.log(myphmcy);

    //const custid = this.props.custid;
    console.log({custid});
    console.log(custname);
    
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
                <Upload
                    addOrEdit = {addOrEdit}
                    myphmcy = {myphmcy}
                    custid = {custid}
                    custname = {custname}
                />
                </div> 
                <div className="col-md-1">
                    <div> </div>
                </div>
            
        </div>
    )
}



/*import React, { useState, useEffect } from 'react'
import Upload from './upload.component'
import axios from "axios";

export default function UploadList() {

    const ordersAPI = (url = 'https://localhost:44357/api/Orders') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }

    const addOrEdit = (formData, onSuccess) => {
        
        ordersAPI().create(formData)
            .then(res => {
                onSuccess();
            })
            .catch(err => console.log(err)) 
}

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="jumbotron jumbotron-fluid py-4">
                    <div className="container text-center">
                        <h1 className="display-4">Oredr Register</h1>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <Upload
                    addOrEdit={addOrEdit}
                />
            </div>
            <div className="col-md-8">
                
            </div>
        </div>
    )

    

    


   


    }*/
