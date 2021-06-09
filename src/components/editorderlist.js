import React, {useState, useEffect} from 'react'
import axios from "axios";
import { Link, withRouter,useHistory,useParams } from "react-router-dom";
//import { useLocation, useParams } from 'react-router';

    const EditOderList=()=> {

        let history = useHistory();
        const {orderID} = useParams();

        /*const [values, setValues] = useState({
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
        customerId:'',
        pharmacyId:'',//data obtaind from the URL have to posted as the pharmacyID when posting. 
        imageName:'',
        imageSrc:'',
        imageFile: null
        })*/
        const [editOrderList, setEditOrderList] = useState([])
        const [recordForEdit, setRecordForEdit] = useState(null)
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
        customerId:'',
        pharmacyId:'',//data obtaind from the URL have to posted as the pharmacyID when posting. 
        imageName:'',
        imageSrc:'',
        imageFile: null
        
    }

    
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

        ordersAPI().update(formData.get('orderID'),formData)
        .then(res => {
            onSuccess();
            refreshEditOrderList();
        })
        .catch(err => console.log(err.response.data))
    }

    const showRecordDetails = data =>{
        setRecordForEdit(data)
    }

   const [values, setValues] = useState(initialFieldValues)
    const[errors, setErrors] = useState({})

    const handleInputChange= e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
        
    }
    useEffect(()=> {
        if (recordForEdit != null)
            setValues(recordForEdit);
    },[recordForEdit])

    useEffect(()=>{
        refreshEditOrderList();
    },[])

    /*const loadValue = async () => {
        const result = await axios.get(`http://localhost:44357/api/Orders/${orderID}`);
        setValues(result.data);
        console.log(result);
    };*/

    function refreshEditOrderList(){
        ordersAPI().fetchAll()
        .then(res=> {
            setEditOrderList(res.data)
        })
        .catch(err => console.log(err))
    }
   

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
        formData.append('customerName',values.customerName)
        formData.append('patientName',values.patientName)
        formData.append('patientAge',values.patientAge)
        formData.append('address',values.address)
        formData.append('email',values.email)
        formData.append('teleNo',values.teleNo)
        formData.append('customerId',values.customerId)
        formData.append('pharmacyId',values.pharmacyId)
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
                        <input className="form-control" placeholder="Enter the prescription items and qty" name="status" value={values.status} onChange={ handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <input className="form-control" placeholder="What are the symptoms?" name="status2" value={values.status2} onChange={ handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <input className="form-control" placeholder="Pharmacy Name" name="pharmacyName" value={values.pharmacyName} onChange={ handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <input className={"form-control" + applyErrorClass('customerName')}  placeholder="Your Name" name="customerName" value={values.customerName} onChange={ handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <input className="form-control" placeholder="Patient Name" name="patientName" value={values.patientName} onChange={ handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <input className="form-control" placeholder="Patient Age" name="patientAge" value={values.patientAge} onChange={ handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <input className="form-control" placeholder="Delivery address" name="address" value={values.address} onChange={ handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <input className="form-control" placeholder="Your Email" name="email" value={values.email} onChange={ handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <input className="form-control" placeholder="Contact Number" name="teleNo" value={values.teleNo} onChange={ handleInputChange}/>
                    </div>

                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-light">submit</button>
                        
                    </div>
                    

                </div>
            </div>
        </form>
    </>
    );
};

export default EditOderList;