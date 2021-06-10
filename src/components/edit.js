import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const Edit = () => {
  let history = useHistory();
  const { orderID } = useParams();
  const [values, setValues] = useState({
    orderID:'', 
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
  });

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
  addOrEdit(formData, /*resetForm*/) 

  const onInputChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

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

  useEffect(() => {
    loadOrder();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:44357/api/Orders/${orderID}`, formData);
    history.push("/");
  };

  const loadOrder = async () => {
    const result = await axios.get(`http://localhost:44357/api/Orders/${orderID}`);
    setValues(result.data);
  };
  return (

    <>
        <div className="container text-center ">
            <p className="lead"></p>
        </div>
        <form autoComplete="off"  onSubmit={e => onSubmit(e)}>
            <div className="card">
                <div className="card-header text-center">Place Your Order Here</div>
            
            <img src={values.imageSrc} className="card-img-top"/>

                <div className="card-body">

                    <div className="form-group">
                        <input type="file" accept="image/*" className="form-control-file" onChange={showPreview} id="image-uploader"/> 
                    </div>
                    <div className="form-group">
                        <input type="datetime-local" className="form-control" placeholder="Date Time" name="dateTime" value={values.dateTime}
                       onChange={e => onInputChange(e)}/>
                    </div>

                    <div className="form-group">
                        <input className={"form-control" + "form-control-lg"}placeholder="Enter the prescription items and qty" name="status" value={values.status} onChange={e => onInputChange(e)}/>
                    </div>

                    <div className="form-group">
                        <input className={"form-control" + "form-control-lg"} placeholder="What are the symptoms?" name="status2" value={values.status2} onChange={e => onInputChange(e)}/>
                    </div>

                    <div className="form-group">
                        <input className={"form-control" + "form-control-lg"} placeholder="Pharmacy Name" name="pharmacyName" value={values.pharmacyName} onChange={e => onInputChange(e)}/>
                    </div>

                    <div className="form-group">
                        <input className={"form-control" + "form-control-lg"}  placeholder="Your Name" name="customerName" value={values.customerNamecustname} onChange={e => onInputChange(e)}/>
                    </div>

                    <div className="form-group">
                        <input className={"form-control"+ "form-control-lg"} placeholder="Patient Name" name="patientName" value={values.patientName} onChange={e => onInputChange(e)}/>
                    </div>

                    <div className="form-group">
                        <input className={"form-control"+ "form-control-lg"} placeholder="Patient Age" name="patientAge" value={values.patientAge} onChange={e => onInputChange(e)}/>
                    </div>

                    <div className="form-group">
                        <input className={"form-control"+ "form-control-lg"} placeholder="Delivery address" name="address" value={values.address} onChange={e => onInputChange(e)}/>
                    </div>

                    <div className="form-group">
                        <input className={"form-control" + "form-control-lg"}placeholder="Your Email" name="email" value={values.email} onChange={e => onInputChange(e)}/>
                    </div>

                    <div className="form-group">
                        <input className={"form-control"+ "form-control-lg"} placeholder="Contact Number" name="teleNo" value={values.teleNo} onChange={e => onInputChange(e)}/>
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

export default Edit;