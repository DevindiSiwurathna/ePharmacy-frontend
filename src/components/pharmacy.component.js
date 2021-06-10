import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Pharmacy = ({phmname}) => {
  const [orders, setOrder] = useState([]);

  const {phmid} = useParams();
  console.log(phmid);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    const result = await axios.get(`https://localhost:44357/api/Orders/PharmacyId/${phmid}`);
    setOrder(result.data.reverse());
  };

  /*const deleteOrder = async orderId => {
    await axios.delete(`http://localhost:44357/Orders/${orderId}`);
    loadOrders();
  };*/

  const newOrder = orders.filter(order => {
    return order.complete === false;
  })

  console.log(newOrder);
  console.log(newOrder.length);
  return (
    <div className="container">
      <div className="py-4">
        <h1>{phmname}</h1><hr/>
        <p>You Have {(newOrder.length)} Pending Orders!</p>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Index</th>
              <th scope="col">OrderID</th>
              <th scope="col">DateTime</th>
             
             
              <th scope="col">customerName</th>
              
              <th scope="col">patientAge</th>
              <th scope="col">Address</th>
              
              <th scope="col">teleNo</th>
              <th scope="col">customerId</th>
              <th scope="col">Is Complete?</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{order.orderID}</td>
          <td>{order.dateTime}</td>

          
          <td>{order.customerName}</td>
          
          <td>{order.patientAge}</td>
          <td>{order.address}</td>
         
          <td>{order.teleNo}</td>
          <td>{order.customerId}</td>
          
          <td>
            <p className={
              order.complete ? "btn btn-success" : "btn btn-danger"}>
               {order.complete ? "Completed" : "Pending"} 
              </p>
          </td>
          
                <td>
                  <Link class="btn btn-primary mr-2" to={`/orders/${order.orderID}`}>
                    View
                  </Link>
                  
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    </div>
  );
};

export default Pharmacy;



