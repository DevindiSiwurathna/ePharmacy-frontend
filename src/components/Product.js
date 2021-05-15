import React, { useState, useEffect } from 'react'
import { BrowserRouter as Route, Switch, Link } from "react-router-dom";
const defaultImageSrc = '/img/default-user-image.png'

const initialFieldValues = {
    productID: 0,
    productName:'',
    productPrice: '',
    pharmacyDetails: '',
    imageName: '',
    imageSrc: defaultImageSrc,
    imageFile: null
}

export default function Product(props) {

    const { addOrEdit, recordForEdit } = props

    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const showPreview = e => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    imageFile,
                    imageSrc: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }
        else {
            setValues({
                ...values,
                imageFile: null,
                imageSrc: defaultImageSrc
            })
        }
    }

    const validate = () => {
        let temp = {}
        temp.productName = values.productName=== "" ? false : true;
        temp.productPrice = values.productPrice === "" ? false : true;
        temp.pharmacyDetails = values.pharmacyDetails === "" ? false : true;
        temp.imageSrc = values.imageSrc === defaultImageSrc ? false : true;
        setErrors(temp)
        return Object.values(temp).every(x => x === true)
    }

    const resetForm = () => {
        setValues(initialFieldValues)
        document.getElementById('image-uploader').value = null;
        setErrors({})
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        if (validate()) {
            const formData = new FormData()
            formData.append('productID', values.productID)
            formData.append('productName', values.productName)
            formData.append('productPrice', values.productPrice)
            formData.append('pharmacyDetails', values.pharmacyDetails)
            formData.append('imageName', values.imageName)
            formData.append('imageFile', values.imageFile)
            addOrEdit(formData, resetForm)
        }
    }

    const applyErrorClass = field => ((field in errors && errors[field] === false) ? ' invalid-field' : '')

    return (
        <>
            <div className="container text-center">
                <p className="lead">Product</p>
            </div>
           {/* <div className="outer"> */}
           {/* <div className="inner3"> */}
            <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
                <div className="card">
                    <br></br>
                    <h3>Product form</h3>
                    <br></br>
                    <label>Select a product picture</label>
                    <img src={values.imageSrc} className="card-img-top" />
                    <div className="card-body">
                        <div className="form-group">
                            <input type="file" accept="image/*" className={"form-control-file" + applyErrorClass('imageSrc')}
                                onChange={showPreview} id="image-uploader" />
                        </div>
                        <div className="form-group">
                        <label>Product Name </label>
                            <input className={"form-control" + applyErrorClass('productName')} placeholder="Enter product name" name="productName"
                                value={values.productName}
                                onChange={handleInputChange} />
                                </div>
                        
                        <div className="form-group">
                        <label>Product Price</label>
                            <input className={"form-control" + applyErrorClass('productPrice')} placeholder="Enter product price" name="productPrice"
                                value={values.productPrice}
                                onChange={handleInputChange} />
                        </div>
                        
                        <div className="form-group">
                        <label>Pharmacy Details</label>
                            <input className={"form-control" + applyErrorClass('pharmacyDetails')} placeholder="Enter pharmacy name district" name="pharamacyDetails"
                                value={values.pharmacyDetails}
                                onChange={handleInputChange} />
                        </div>
                        </div>
                        <div className="form-group text-center">
                            <button type="submit"  className="btn btn-dark btn-lg btn-block">Submit</button>
                        </div>
                        
                    </div>    
            </form>
            
        
            
        </>
    )
}