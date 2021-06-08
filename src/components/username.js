import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { EmailJSResponseStatus } from "emailjs-com";
//import { Link } from "react-router-dom";

export default function Userame({custid}) {

  const [customer, setCustomer] = useState({
    customername:""
    
  });

 // const{custid}= useParams();
console.log(custid);
  useEffect(() => {
    loadCustomers();
  }, []);

//console.log(props.custid);
  const loadCustomers = async () => {
    const result = await axios.get(`https://localhost:44357/api/Customers/${custid}`);
    console.log(result);

    const array = result.data;

    console.log(array);

    //const {custname} = array.get({customername});
  //console.log(custname);

    setCustomer(result.data);
  };

  //const setCustomer(reverse.a)
  //const custname = array[1];
  //console.log(custname);

 
  return (
    <div className="container">
      <div className="py-4">
        
        
          
           
          <div>
            
              <p>Hi! {customer.customername}</p>
          
         </div>
       
      </div>
    </div>
  );
};

//export default UserName;