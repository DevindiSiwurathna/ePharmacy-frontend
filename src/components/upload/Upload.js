import React, {useState, useEffect} from 'react';
import './Upload.css';

import  myphmcy from './Uploadlist';

//const myphmcy = JSON.stringify(phmcy);
//console.log(myphmcy);
const defaultImageSrc = '/images/7.jpg';


const initialFieldValues ={
    orderID:0, 
    dateTime:'',
    status:'',
    status2:'',
    pharmacyName:'',
    customerName:'',
    patientName:'',
    patientAge:'',
    address:'',
    email:'',
    teleNo:'',
    customerId:1,
    pharmacyId:0,//data obtaind from the URL have to posted as the pharmacyID when posting. 
    imageName:'',
    imageSrc:'',
    imageFile: null
    
}


export default function Upload(props) {

    const {addOrEdit} = props

    const {myphmcy} = props
    const {custid} = props
    const {custname} = props

    console.log(custid);
     console.log(myphmcy);
    const [values, setValues] = useState(initialFieldValues)
    const[errors, setErrors] = useState({})

    const handleInputChange= e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
        
    }

    /*const addOrEdit = (formData, onSuccess) => {

        ordersAPI().create(formData)
        .then(res => {
            onSuccess();
        })
        .catch(err => console.log(err.response.data))
    }*/

    const showPreview = e => {
        if(e.target.files && e.target.files[0]){
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    imageFile,
                    imageSrc : x.target.result
                    
                })
                
            }
            reader.readAsDataURL(imageFile)
        }

        else{
            setValues({
                ...values,
                imageFile:null,
                imageSrc:''
            })
        }

    }

    const validate = () => {
        let temp = {}
        temp.customerName = values.customerName == "" ? false : true;
        temp.status = values.status == "" ? false : true;
        temp.status2 = values.status2 == "" ? false : true;
        temp.pharmacyName = values.pharmacyName == "" ? false : true;
        temp.patientName = values.patientName == "" ? false : true;
        temp.patientAge = values.patientAge == "" ? false : true;
        temp.address= values.address == "" ? false : true;
        temp.email = values.email == "" ? false : true;
        temp.teleNo = values.teleNo == "" ? false : true;
        setErrors(temp)
        return Object.values(temp).every(x => x == true)
    }

    const resetForm = () => {
        setValues(initialFieldValues)
        document.getElementById('image-uploader').value = null;
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        if (validate()){
        
        const formData = new FormData()
        
        formData.append('orderID',values.orderID)
        formData.append('dateTime',values.dateTime)
        formData.append('status',values.status)
        formData.append('status2',values.status2)
        formData.append('pharmacyName',values.pharmacyName)
        formData.append('customerName',custname)
        formData.append('patientName',values.patientName)
        formData.append('patientAge',values.patientAge)
        formData.append('address',values.address)
        formData.append('email',values.email)
        formData.append('teleNo',values.teleNo)
        formData.append('customerId',custid)
        formData.append('pharmacyId',myphmcy)
        formData.append('imageName',values.imageName)
        formData.append('imageFile',values.imageFile)
        addOrEdit(formData, resetForm) 

        alert("Your file is being uploaded!")
    }
}

const applyErrorClass = field => ((field in errors && errors[field] == false) ? ' invalid-field' : '')


    

    return (
        <>
        <div className="container text-center ">
            <p className="lead"></p>
        </div>
        <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
            <div className="card">
                <div className="card-header text-center">Place Your Order Here</div>
            
            <img src={values.imageSrc} className="card-img-top"/>

                <div className="card-body">

                    <div className="form-group">
                        <input type="file" accept="image/*" className="form-control-file" onChange={showPreview} id="image-uploader"/> 
                    </div>
                    <div className="form-group">
                        <input type="datetime-local" className="form-control" placeholder="Date Time" name="dateTime" value={values.dateTime}
                       onChange={ handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <input className={"form-control" + applyErrorClass('status')}placeholder="Enter the prescription items and qty" name="status" value={values.status} onChange={ handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <input className={"form-control"+ applyErrorClass('status2')} placeholder="What are the symptoms?" name="status2" value={values.status2} onChange={ handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <input className={"form-control"+ applyErrorClass('pharmacyName')} placeholder="Pharmacy Name" name="pharmacyName" value={values.pharmacyName} onChange={ handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <input className={"form-control" + applyErrorClass('customerName')}  placeholder="Your Name" name="customerName" value={custname} onChange={ handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <input className={"form-control"+ applyErrorClass('patientName')} placeholder="Patient Name" name="patientName" value={values.patientName} onChange={ handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <input className={"form-control"+ applyErrorClass('patientAge')} placeholder="Patient Age" name="patientAge" value={values.patientAge} onChange={ handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <input className={"form-control"+ applyErrorClass('address')} placeholder="Delivery address" name="address" value={values.address} onChange={ handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <input className={"form-control" + applyErrorClass('email')}placeholder="Your Email" name="email" value={values.email} onChange={ handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <input className={"form-control"+ applyErrorClass('teleNo')} placeholder="Contact Number" name="teleNo" value={values.teleNo} onChange={ handleInputChange}/>
                    </div>

                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-light">submit</button>
                        
                    </div>
                    

                </div>
            </div>
        </form>
    </>
    )
}
