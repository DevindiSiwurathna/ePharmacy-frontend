import React,{ Component } from 'react';
//import { Link } from "react-router-dom";
import './district.css';

import axios from 'axios'
import ReactTable from "react-table"; 
import 'react-table/react-table.css'
class Pharmacy extends Component{
    constructor(props){
        super(props)
        let now=new Date()
        this.state = {
          orders: [],
          loading:true,
          date:now
        }
      }

      async getOrdersData(){
        const res = await axios.get('https://localhost:44357/api/Orders?field=pharmacy&value1=2&value2=date&date='+this.state.date)
        console.log(res.data)
        this.setState({loading:false, orders: res.data})
      }
      componentDidMount(){
        this.getOrdersData()
      }

      
    render(){
        
        const columns = [{  
            Header: 'Date',  
            accessor: 'Date_time',
           }
           ,{  
            Header: 'Cutomer Name',  
            accessor: 'CustomerName' ,
            }
           
           ,{  
           Header: 'Cutomer ID',  
           accessor: 'Customer_id' ,
           }
           ,{  
           Header: 'Telephone',  
           accessor: 'TeleNo',
           },
           {  
            Header: 'Address',  
            accessor: 'Address',
            },
            {  
            Header: 'Email',  
            accessor: 'Email',
            }
        ]

        return(

            <div className="container outer">
            
                <div className="container district inner">
                <div className="row">
                        <div className="container pharmacy">
                            <h1>Hello!</h1>
                            <h2>Lanka Pharmacy</h2>
                            <p>Elpitiya</p>
                            <p1>View your new orders</p1>
                        </div>  

                        <div className="container table">  
                        <ReactTable  
                            data={this.state.orders}  
                            columns={columns}  
                        />
                        </div>           
                 </div>
                   
                </div>

            </div>

            
        );
    }
}

export default Pharmacy