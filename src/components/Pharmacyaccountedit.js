import React, { useState, useEffect } from 'react'


const defaultImageSrc = '/img/default-user-image.png'

const initialFieldValues = {
    id: 0,
    regNo:'',
    pharmacyname: '',
    address: '',
    district:'',
    email:'',
    teleNo:'',
    password:'',
    pharmacyimagename: '',
    imageSrc: defaultImageSrc,
    pharmacyimagefile: null
}

export default function Pharmacyaccountedit(props) {

    const { addOrEdit, recordForEdit } = props

    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})

    useEffect(() => {
        if (recordForEdit != null)
            setValues(recordForEdit);
            //console.log(values)
    }, [recordForEdit])

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const showPreview = e => {
        if (e.target.files && e.target.files[0]) {
            let pharmacyimagefile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    pharmacyimagefile,
                    imageSrc: x.target.result
                })
            }
            reader.readAsDataURL(pharmacyimagefile)
        }
        else {
            setValues({
                ...values,
                pharmacyimagefile: null,
                imageSrc: defaultImageSrc
            })
        }
    }

    const validate = () => {
        let temp = {}
        temp.regNo = values.regNo=== "" ? false : true;
        temp.pharmacyname = values.pharmacyname === "" ? false : true;
        temp.address = values.address === "" ? false : true;
        temp.district = values.district=== "" ? false : true;
        temp.email = values.email=== "" ? false : true;
        temp.teleNo = values.teleNo=== "" ? false : true;
        temp.password = values.password=== "" ? false : true;
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
            formData.append('id', values.id)
            formData.append('regNo', values.regNo)
            formData.append('pharmacyname', values.pharmacyname)
            formData.append('address', values.address)
            formData.append('district', values.district)
            formData.append('email', values.email)
            formData.append('teleNo', values.teleNo)
            formData.append('password', values.password)
            formData.append('pharmacyimagename', values.pharmacyimagename)
            formData.append('pharmacyimagefile', values.pharmacyimagefile)
            addOrEdit(formData, resetForm)
        }
    }

    const applyErrorClass = field => ((field in errors && errors[field] === false) ? ' invalid-field' : '')

    return (
        <>
            <div className="outer">
            <div className="inner3"> 
            <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
                <div className="card">
                <br></br>
                    <h3> Edit Profile</h3>
                    <br></br>
                    <label>Select a profile picture</label>
                    <img src={values.imageSrc} className="card-img-top" />
                    <div className="card-body">
                        <div className="form-group">
                            <input type="file" accept="image/*" className={"form-control-file" + applyErrorClass('ImageSrc')}
                                onChange={showPreview} id="image-uploader" />
                        </div>
                        <div className="form-group">
                        <label>Register No</label>
                            <input className={"form-control" + applyErrorClass('regNo')} placeholder="Enter register No" name="regNo"
                                value={values.regNo}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                        <label>Pharmacy name</label>
                            <input className={"form-control" + applyErrorClass('pharmacyname')} placeholder="Enter pharmacy name" name="pharmacyname"
                                value={values.pharmacyname}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                        <label>Address</label>
                            <input className={"form-control" + applyErrorClass('address')} placeholder="Enter address" name="address"
                                value={values.address}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                        <label>District</label>
                            <input className={"form-control" + applyErrorClass('district')} placeholder="Enter district" name="district"
                                value={values.district}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                        <label>Email</label>
                            <input className={"form-control" + applyErrorClass('email')} placeholder="Enter email" name="email"
                                value={values.email}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                        <label>TeleNo</label>
                            <input className={"form-control" + applyErrorClass('teleNo')} placeholder="Enter teleno" name="teleNo"
                                value={values.teleNo}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                        <label>Password</label>
                            <input className={"form-control" + applyErrorClass('password')} placeholder="Enter password" name="password"
                                value={values.password}
                                onChange={handleInputChange} />
                        </div>
                        
                        <div className="form-group text-center">
                            <button type="submit"  className="btn btn-dark btn-lg btn-block">Edit</button>
                        </div>
                    </div>
                </div>
            </form>
            </div>
            </div>
        </>
    )
}