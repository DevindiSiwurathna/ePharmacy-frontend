/*import React, { useState, useEffect } from 'react'
import { BrowserRouter as Route, Switch, Link } from "react-router-dom";
const defaultImageSrc = '/img/default-user-image.png'

const initialFieldValues = {
    employeeID: 0,
    RegNo:'',
    Pharmacyname: '',
    Address: '',
    District:'',
    Email:'',
    TeleNo:'',
    Password:'',
    Pharmacyimagename: '',
    ImageSrc: defaultImageSrc,
    Pharmacyimagefile: null
}

export default function Pharmacy(props) {

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
            let Pharmacyimagefile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    Pharmacyimagefile,
                    ImageSrc: x.target.result
                })
            }
            reader.readAsDataURL(Pharmacyimagefile)
        }
        else {
            setValues({
                ...values,
                Pharmacyimagefile: null,
                ImageSrc: defaultImageSrc
            })
        }
    }

    const validate = () => {
        let temp = {}
        temp.RegNo = values.RegNo=== "" ? false : true;
        temp.Pharmacyname = values.Pharmacyname === "" ? false : true;
        temp.Address = values.Address === "" ? false : true;
        temp.District = values.District=== "" ? false : true;
        temp.Email = values.Email=== "" ? false : true;
        temp.TeleNo = values.TeleNo=== "" ? false : true;
        temp.Password = values.Password=== "" ? false : true;
        temp.imageSrc = values.ImageSrc === defaultImageSrc ? false : true;
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
            formData.append('employeeID', values.employeeID)
            formData.append('RegNo', values.RegNo)
            formData.append('Pharmacyname', values.Pharmacyname)
            formData.append('Address', values.Address)
            formData.append('District', values.District)
            formData.append('Email', values.Email)
            formData.append('TeleNo', values.TeleNo)
            formData.append('Password', values.Password)
            formData.append('Pharmacyimagename', values.Pharmacyimagename)
            formData.append('Pharmacyimagefile', values.Pharmacyimagefile)
            addOrEdit(formData, resetForm)
        }
    }

    const applyErrorClass = field => ((field in errors && errors[field] === false) ? ' invalid-field' : '')

    return (
        <>
            <div className="container text-center">
                <p className="lead">An Employee</p>
            </div>
            <div className="outer">
            <div className="inner3"> 
            <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
                <div className="card">
                    <br></br>
                    <h3> Pharmacy Registration</h3>
                    <br></br>
                    <label>Select a profile picture</label>
                    <img src={values.ImageSrc} className="card-img-top" />
                    <div className="card-body">
                        <div className="form-group">
                            <input type="file" accept="image/*" className={"form-control-file" + applyErrorClass('ImageSrc')}
                                onChange={showPreview} id="image-uploader" />
                        </div>
                        <div className="form-group">
                        <label>Register No</label>
                            <input className={"form-control" + applyErrorClass('RegNo')} placeholder="Enter register No" name="RegNo"
                                value={values.RegNo}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                        <label>Pharmacy name</label>
                            <input className={"form-control" + applyErrorClass('Pharmacyname')} placeholder="Enter pharmacy name" name="Pharmacyname"
                                value={values.Pharmacyname}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                        <label>Address</label>
                            <input className={"form-control" + applyErrorClass('Address')} placeholder="Enter address" name="Address"
                                value={values.Address}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                        <label>District</label>
                            <input className={"form-control" + applyErrorClass('District')} placeholder="Enter district" name="District"
                                value={values.District}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                        <label>Email</label>
                            <input className={"form-control" + applyErrorClass('Email')} placeholder="Enter email" name="Email"
                                value={values.Email}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                        <label>TeleNo</label>
                            <input className={"form-control" + applyErrorClass('TeleNo')} placeholder="Enter telephone no" name="TeleNo"
                                value={values.TeleNo}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                        <label>Password</label>
                            <input className={"form-control" + applyErrorClass('Password')} placeholder="Enter password" name="Password"
                                value={values.Password}
                                onChange={handleInputChange} />
                        </div>
                        
                        <div className="form-group text-center">
                            <button type="submit"  className="btn btn-dark btn-lg btn-block">Register</button>
                        </div>
                        <p className="forgot-password text-right">
                        Already registered <Link to="/sign-in">log in?</Link>
                        </p>
                    </div>
                </div>
            </form>
            </div>
            </div>
        </>
    )
} */