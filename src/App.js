
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

export default class App extends Component {

  state = {

    userrole : '',
    userid   : '',
    username : ''

  };

componentDidMount() {

  if(localStorage.login)
  {
    const currentuser     = JSON.parse(atob(localStorage.login.split(".")[1])); 
    this.setState( {userrole: currentuser.role });
    this.setState( {userid: currentuser.id });
    this.setState( {username: currentuser.name });
 }

}


  

render() {

if(this.state.userrole === "Customer"){
  {/*<Customer custid={this.state.userid} />*/}
  console.log(this.state.username);
  const custname=this.state.username;
  const custid=this.state.userid;
  console.log(custid);
  
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
              Hi! {this.state.username}
              <button type="submit" className="btn btn-dark btn-sm" onClick={() => localStorage.clear()}>Logout</button>
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
            <Route path="/Uploadlist" render={props => (<UploadList custid={this.state.userid} />)}/> 
            <Route path="/username" render = {props => (<Username custid={this.state.userid} />)}/>
            <Route path = "/services" component={Services}/>
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
            {/*<Route path="/CustomerService" component={CustomerService} />*/}
        </Switch>
         <Footer/>
        </div>
      
    </Router>
  );
}

else if(this.state.userrole === "Pharmacy"){

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
                <Link className="nav-link" to={"/search"}>Search Pharmacy</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to = {"/services"}>Services</Link>
                </li>
                <li className="nav-item"> 
                <Link className="nav-link" to={`/pharmacy/${phmid}`}>pharmacy</Link>
                </li>
              <button type="submit" className="btn btn-dark btn-sm" onClick={() => localStorage.clear() } >Logout</button>
              
            </ul>
          </div>
        </div>
      </nav>
      <Switch> <Route exact path='/' exact component={Home} /></Switch> 
                       
            <Switch>
            <Route path = "/services" component={Services}/>
            <Route path="/terms" component={terms} />
            <Route path="/working" component={working} />
            <Route path="/sendmessage" component={sendmessage} />
            <Route path="/messagesuccess" component={messagesuccess} />
            <Route path="/search" component={Search} />
            <Route path = "/pharmacy/:phmid" render={props => (<Pharmacy phmname={this.state.username} />)}/>
            <Route path = "/orders/:orderID" component = {Order}/>
            {/*<Route path="/Addproduct" component={Addproduct} />*/}
            <Route path="/ProductList" component={ProductList} />

        </Switch>
         <Footer/>
        </div>
      
    </Router>
  );


}

else {

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
        
          
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up-as-customer" component={SignUpascustomer} />
            <Route path="/sign-up-as-pharmacy" component={Ph} />
            <Route path = "/pharmacy" component={Pharmacy}/>
            <Route path="/terms" component={terms} />
            <Route path="/working" component={working} />
            <Route path="/Forgotpassword" component={Forgotpassword} />
            <Route path="/search" component={Search} />

            {/*<Route path="/Addproduct" component={Addproduct} />*/}

        </Switch>
         <Footer/>
        </div>
      
    </Router>
  );



}

}
}
