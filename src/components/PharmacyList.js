/*import React, { useState, useEffect } from 'react'
import Pharmacy from './Pharmacy'

import axios from "axios";


export default function  PharmacyList() {

    const pharmacyAPI = (url = 'https://localhost:44357/api/Pharmacies/') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }

    const addOrEdit = (formData, onSuccess) => {
        pharmacyAPI().create(formData)
        .then(res => {
            onSuccess();
        })
        .catch(err => console.log(err))
    }


    return (
        
           
            <div>
                <Pharmacy
                    addOrEdit={addOrEdit}
                />
            </div>
            
    )
}*/

