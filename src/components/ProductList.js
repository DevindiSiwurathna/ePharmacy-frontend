
import React, { useState, useEffect } from 'react'
import Product from './Product'

import axios from "axios";


export default function  ProductList() {

    const [productList,setProductList] = useState([])

    useEffect(() => {
        refreshProductList();
        
        
    },)

    const productAPI = (url = 'https://localhost:44357/api/Product/') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }

    
        
    function refreshProductList () {
        productAPI().fetchAll()
        .then(res=> setProductList(res.data))
        .catch(err => console.log(err))
    }

    const addOrEdit = (formData, onSuccess) => {
        productAPI().create(formData)
        .then(res => {
            onSuccess();
        })
        .catch(err => console.log(err))
    }

    const imageCard = data =>(

        <div className="card">
            <img src={data.imageSrc} className="card-img-top square" />
            <div className="card-body">
                <h5>{data.productName}</h5>
                <h5>{data.productPrice}</h5>
                <h5>{data.pharmacyDetails}</h5>

            </div>
        </div>

    )

    return (
        <div className="row">

           <div className="col-md-4">
               <Product
               addOrEdit={addOrEdit}/>
  
        </div>

           <div className="col-md-8">
               <table>
                   <tbody>
                       {
                          //tr > 3 td
                          [...Array(Math.ceil(productList.length/3))].map((e,i) =>
                          <tr key= {i}>
                              <td>{ imageCard (productList[3 * i]) }</td>
                              <td>{ productList[3 * i+1] ? imageCard (productList[3 * i+1]) : null}</td>
                              <td>{ productList[3 * i+2] ? imageCard (productList[3 * i+2]) : null}</td>

                              </tr>

                          )

                       }
                       </tbody>
                       </table>
  
        </div>
        </div>
        
           
            
    )
}



