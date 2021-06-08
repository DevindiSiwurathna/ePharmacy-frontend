import React, { useState, useEffect } from 'react'
import Pharmacyaccountedit from './Pharmacyaccountedit'
import axios from "axios";

export default function  Pharmacyedit() {

    const [pharmacyList, setpharmacyList] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)

    const currentuser     = JSON.parse(atob(localStorage.login.split(".")[1])); 

    useEffect(() => {

        refreshpharmacyList();
      
        
    }, [])


    const pharmacyAPI = (url = 'https://localhost:44357/api/Pharmacies/') => {
        return {
            fetchbyid: () => axios.get('https://localhost:44357/api/Pharmacies?field=Byid&value='+ currentuser.id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }

    function refreshpharmacyList() {
        pharmacyAPI().fetchbyid()
            .then(res => {
                //console.log(res)
                setpharmacyList(res.data)
            })
            .catch(err => console.log(err))
    }

    const addOrEdit = (formData, onSuccess) => {
        pharmacyAPI().update(formData.get('id'), formData)
        .then(res => {
            onSuccess();
            //window.alert('succesfully registered')
            refreshpharmacyList();
        })
        .catch(err => console.log(err))
        //window.alert('invalid data inputs')
    }

    const showRecordDetails = data => {
        setRecordForEdit(data)
        //console.log(recordForEdit)
    }

    const onDelete = (e, id) => {
        e.stopPropagation();
        if (window.confirm('Are you sure to deactivate this Account?'))
        pharmacyAPI().delete(id)
                .then(res => refreshpharmacyList())
                .catch(err => console.log(err))
    }

    const imageCard = data => (
        <div className="outer">
        <div className="inner3">
        <h5>{data.pharmacyname}</h5>
        <div className="card" onClick={() => { showRecordDetails(data) }}>
            <img src={data.imageSrc} className="card-img-top" />
            <div className="card-body">
                <span>{data.regNo}</span><br />
                <span>{data.address}</span><br />
                <span>{data.email}</span><br />
                <span>{data.teleNo}</span><br />
                
                 <br />
                <button className="btn btn-light delete-button" onClick={e => onDelete(e, parseInt(data.id))}>
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
        </div>
        </div>
    )

    return (
        
        <div className="row">
        <div className="col-md-12">
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-4">
        <table>
                <tbody>
                    {
                        //tr > 3 td
                        [...Array(Math.ceil(pharmacyList.length / 3))].map((e, i) =>
                            <tr key={i}>
                                <td>{imageCard(pharmacyList[3 * i])}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>                              
        </div>
        <div className="col-md-4">
            <Pharmacyaccountedit
                addOrEdit={addOrEdit}
                recordForEdit={recordForEdit}
            />
        </div>
    </div>
       
        
        
            
            
    )
}