import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
//import { Link } from "react-router-dom";

const Customer = () => {
//export default function  Customer(props) {
  //const custid = props.custid
//console.log(custid);


  const [orders, setOrder] = useState([]);

  const{custid}= useParams();
console.log(custid);
  useEffect(() => {
    loadOrders();
  }, []);

//console.log(props.custid);
  const loadOrders = async () => {
    const result = await axios.get(`https://localhost:44357/api/Orders/CustomerId/${custid}`);
    setOrder(result.data.reverse());
  };

  /*const [name, setName] = useState([]);

  useEffect(()=>{
    loadName();
  },[]);

  const loadName = async () => {
    const res = await axios.get(`https://localhost:44357/api/Customers/${custid}`);
    //setName(res.data.reverse());
    console.log(res);
  };*/


//console.log(custid);
  const deleteOrder = async orderId => {
    await axios.delete(`http://localhost:44357/Orders/${orderId}`);
    loadOrders();
  };

  return (
    <div className="container">
      <div className="py-4">
        {/*{res.map((res)=>(
        <h1>{res.data.customerName}</h1>))}*/}
        <h2>My Orders</h2>
        <table class="table border shadow">
          <thead class="thead-dark">
          
            <tr>
              <th scope="col">Index</th>
              <th scope="col">OrderID</th>
              <th scope="col">DateTime</th>
              <th scope="col">patientName</th>
              <th scope="col">patientAge</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
              <th scope="col">teleNo</th>
            
              <th scope="col">Is Complete?</th>
              
              <th scope="col">Total Amount</th>
             
              <th scope="col">Action</th> 
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{order.orderID}</td>
          <td>{order.dateTime}</td>
          <td>{order.patientName}</td>
          <td>{order.patientAge}</td>
          <td>{order.address}</td>
          <td>{order.email}</td>
          <td>{order.teleNo}</td>
        
          
          <td>
            <p className={
              order.complete ? "btn btn-success" : "btn btn-danger"}>
               {order.complete ? "Completed" : "Pending"} 
              </p>
          </td>
          <td>{order.total}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customer;