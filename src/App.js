import React, { Component } from 'react';
import GlobalStyle from './globalStyles';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import Footer from './components/Footer/Footer';
import Login from "./components/login.component";
import SignUpascustomer from "./components/signup.component";
import SignUpaspharmacy from "./components/pharmacyaccount";
import District from './components/district.component';
import Upload from './components/upload/Upload';
import UploadList from "./components/upload/Uploadlist";
import Pharmacy from "./components/pharmacy.component";
import Services from "./components/services.component";
import Details from './components/services/Details';
import Cart from './components/services/Cart';
import {ButtonContainer} from "./components/services/Button";
import terms from './components/terms';
import working from './components/working';
import Forgotpassword from './components/forgotpassword';
import sendmessage from './components/sendmessage';
import messagesuccess from './components/messagesuccess';
import Ph from "./components/Ph";
import Search from "./components/Search";
//import Addproduct from "./components/Addproduct";
import ProductList from "./components/ProductList";
import Order from './components/orders/order';
import Customer from "./components/customer";
//import CustomerService from "./components/customerservice";
import Username from "./components/username";
import Edit from './components/edit';
import Uplist from './components/up/uplist';
import Up from './components/up/up';
import Chatbot from 'react-chatbot-kit';
import Phedit from "./components/Phedit";
import editcustomer from "./components/customeredit.component";
import ActionProvider from './components/chatbot/ActionProvider';
import MessageParser from './components/chatbot/MessageParser';
import config from './components/chatbot/config';
import Draggable from 'react-draggable'; // The default

export default class App extends Component {

  state = {

    userrole : '',
    userid   : '',
    username : '',
    usermail : '',
    usertele : '',
    islogged : ''


  };

  putlogged = () =>{
  
    this.setState( {islogged: 'true' });
  
  };
  
  changeHandler = () => {

    localStorage.clear();
    this.setState( {islogged: 'null' });
    
  }

componentWillMount() {

  if(localStorage.login)
  {
    const currentuser     = JSON.parse(atob(localStorage.login.split(".")[1])); 
    this.setState( {userrole: currentuser.role });
    this.setState( {userid: currentuser.id });
    this.setState( {username: currentuser.name });
    this.setState( {usermail: currentuser.mail });
    this.setState( {usertele: currentuser.tele });
    this.setState( { islogged: 'true'});
    
 }

 else{
   
  this.setState( { islogged: 'null'});

 }

}


  

render() {

if (localStorage.login && this.state.islogged === "true"){

  const currentuser     = JSON.parse(atob(localStorage.login.split(".")[1])); 

if( currentuser.role === "Customer"){
  {/*<Customer custid={this.state.userid} />*/}
  console.log(currentuser.name);
  console.log(currentuser.mail);
  console.log(currentuser.tele);
  const custmail=this.state.usermail;
  const custid=this.state.userid;
  console.log(custid);
  console.log(custmail);
  
  return (<Router>
    <GlobalStyle/>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand">ORDER YOUR HEALTH & WELLNESS PRODUCTS ONLINE TODAY!</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item"> 
                <Link className="nav-link" to={"/"}>Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to={"/edit-profile"}>Edit Profile</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to={"/search"}>Search Pharmacy</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to={`district/${custid}`}>Place an order</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to = {"/services"}>Products</Link>
                </li>
                <li className="nav-item"> 
                <Link className="nav-link" to={`/customer/${custid}`}>Customer</Link>
                </li>
                <li className="nav-item">
              <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                    <i className="fas fa-cart-plus"/>
                    </span>
                    my cart 
                </ButtonContainer>
              </Link>
              </li>

              <li className="nav-item">
              Hi! {currentuser.name}
              <button type="submit" className="btn btn-dark btn-sm" onClick={this.changeHandler}>Logout</button>
              {/*<Username/>*/}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch> <Route exact path='/' exact component={Home} /></Switch> 
                       
            <Switch>
        
            <Route path="/district" component={District} />
            <Route path="/Upload" component={Upload} />
            {/*<Route path="/Uploadlist" component={UploadList} />*/}
            {/*<Route path="/Uploadlist" render={props => <UploadList {...props.match.params} />}/>*/}
           {/* <Route path="/Uploadlist" component={props => <UploadList custid={props.match.params.custid}/>}/> */}
            <Route path="/Uploadlist" render={props => (<UploadList custid={this.state.userid} custname={this.state.username} custmail={this.state.usermail} custtele={this.state.usertele}/>)}/> 
            <Route path="/username" render = {props => (<Username custid={this.state.userid} />)}/>
            <Route path="/Uplist/:myphmcy" render={props => (<Uplist custid={this.state.userid} />)}/> 
            <Route path="/Up" component={Up} />
            <Route path = "/services" component={Services}/>
            <Route path = "/edit-profile" component={editcustomer}/>
            <Route path = "/Cart" component={Cart}/>
            <Route path = "/Details" component={Details}/>
            <Route path="/terms" component={terms} />
            <Route path="/working" component={working} />
            <Route path="/sendmessage" component={sendmessage} />
            <Route path="/messagesuccess" component={messagesuccess} />
            <Route path="/search" component={Search} />
            <Route path = "/customer/:custid" render={props => (<Customer custname={this.state.username} />)}/>
            {/*<Route path="/Addproduct" component={Addproduct} />*/}
            <Route path="/ProductList" component={ProductList} />
            <Route path = "/edit/:orderID" component = {Edit}/>
            
            {/*<Route path="/CustomerService" component={CustomerService} />*/}

            
        </Switch>

        <Draggable>
        <div>
        <Chatbot 
        config={config} actionProvider={ActionProvider} messageParser={MessageParser}/>
        </div>
        </Draggable>

         <Footer/>
        </div>
      
    </Router>
  );
}

else if(currentuser.role === "Pharmacy"){

  const phmid=this.state.userid;
  console.log(phmid);

  const custname=this.state.username;
  return (<Router>
    <GlobalStyle/>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand">ORDER YOUR HEALTH & WELLNESS PRODUCTS ONLINE TODAY!</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item"> 
                <Link className="nav-link" to={"/"}>Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to={"/edit-pharmacy-account"}>Edit Account</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to={"/search"}>Search Pharmacy</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to = {"/services"}>Services</Link>
                </li>
                <li className="nav-item"> 
                <Link className="nav-link" to={`/pharmacy/${phmid}`}>pharmacy</Link>
                </li>
                <li className="nav-item">
              Hi! {currentuser.name}
              <button type="submit" className="btn btn-dark btn-sm" onClick={ this.changeHandler } >Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch> <Route exact path='/' exact component={Home} /></Switch> 
                       
            <Switch>
            <Route path = "/services" component={Services}/>
            <Route path="/terms" component={terms} />
            <Route path="/working" component={working} />
            <Route path = "/edit-pharmacy-account" component={Phedit}/>
            <Route path="/sendmessage" component={sendmessage} />
            <Route path="/messagesuccess" component={messagesuccess} />
            <Route path="/search" component={Search} />
            <Route path = "/pharmacy/:phmid" render={props => (<Pharmacy phmname={this.state.username} />)}/>
            <Route path = "/orders/:orderID" component = {Order}/>
            {/*<Route path="/Addproduct" component={Addproduct} />*/}
            <Route path="/ProductList" component={ProductList} />

        </Switch>
        <Draggable>
        <div>
        <Chatbot 
        config={config} actionProvider={ActionProvider} messageParser={MessageParser}/>
        </div>
        </Draggable>
         <Footer/>
        </div>
      
    </Router>
  );


}}

else if (this.state.islogged==="null") {

  return (<Router>
    <GlobalStyle/>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand">ORDER YOUR HEALTH & WELLNESS PRODUCTS ONLINE TODAY!</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up-as-customer"}>Sign up as customer</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up-as-pharmacy"}>Sign up as Pharmacy</Link>
  </li>
                <li className="nav-item">
                <Link className="nav-link" to={"/search"}>Search Pharmacy</Link>
                </li>
                <li className="nav-item"> 
                <Link className="nav-link" to={"/"}>Home</Link>
                </li>
              
            </ul>
          </div>
        </div>
      </nav>
      <Switch> <Route exact path='/' exact component={Home} /></Switch> 
                       
            <Switch>
        
          
            <Route path="/sign-in" component={() => <Login putlogged={this.putlogged}/>} />
            <Route path="/sign-up-as-customer" component={SignUpascustomer} />
            <Route path="/sign-up-as-pharmacy" component={Ph} />
            <Route path = "/pharmacy" component={Pharmacy}/>
            <Route path="/terms" component={terms} />
            <Route path="/working" component={working} />
            <Route path="/Forgotpassword" component={Forgotpassword} />
            <Route path="/search" component={Search} />

            {/*<Route path="/Addproduct" component={Addproduct} />*/}

        </Switch>
        <Draggable>
        <div>
        <Chatbot 
        config={config} actionProvider={ActionProvider} messageParser={MessageParser}/>
        </div>
        </Draggable>
         <Footer/>
        </div>
      
    </Router>
  );



}

}
}


