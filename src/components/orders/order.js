import React, {useState, useEffect} from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import axios from "axios";


const Order = () => {
    const [order, setOrder] = useState({
        address: "",
        customerId: "",
        customerName: "",
        dateTime: "",
        email: "",
        imageFile: "",
        imageName: "",
        orderID: "",
        patientAge: "",
        patientName: "",
        pharmacyId: "",
        pharmacyName: "",
        status: "",
        status2: "",
        teleNo: "",
        imageSrc:"",
        total:"",
        complete:""
    });
    const {orderID} = useParams();
    console.log(order.imageSrc);

    useEffect(() => {
        loadOrder();
    }, []);

    const loadOrder = async () => {
        const res = await axios.get(
            `https://localhost:44357/api/Orders/${orderID}`
        );
        //console.log(res)
        setOrder(res.data);
    };

    const { total } = order

    const onInputChange = e => {
        setOrder({ ...order, [e.target.name]: e.target.value });
      };

    let history=useHistory();
      const onSubmit = async e => {
            e.preventDefault();
            await axios.put(`https://localhost:44357/api/Orders/${orderID}`,order);
            history.push("/");
        };
        

    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/Pharmacy">Back</Link>
            <h1 className="display-4">Order Id: {orderID}</h1>
            <hr />

            <img src={`https://localhost:44357/Images/${order.imageName}`}/>
      <ul className="list-group w-50">
      <li className="list-group-item">Customer Name: {order.customerName}</li>
        <li className="list-group-item">Ingrediants: {order.status}</li>
        <li className="list-group-item">Symptoms: {order.status2}</li>
        <li className="list-group-item">Patient Name {order.patientName}</li>
        <li className="list-group-item">Patient Age: {order.patientAge}</li>
        <li className="list-group-item">Address: {order.address}</li>
        <li className="list-group-item">Email: {order.email}</li>
        <li className="list-group-item">Phone: {order.teleNo}</li>
        
      </ul> 
      {order.complete ? (
      <ul className="list-group w-50">
        
        <li className="list-group-item">total: {order.total}</li> </ul>) : null }
        {order.complete ? null:(
     
      <div>
          <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
          <input type="string" className="form-control form-control-lg" placeholder="Total amount" name="total" value={total} onChange={e => onInputChange(e)}/>
        <button className="btn btn-warning btn-block">Send Total</button>
        </div> 
        </form>
      </div>) 
      
        }

        </div> 
    )
};

export default Order;