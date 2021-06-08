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
import Upload from './components/upload.component';
import Pharmacy from "./components/pharmacy.component";
import Phedit from "./components/Phedit";
import editcustomer from "./components/customeredit.component";
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



export default class custview extends Component {

render() {


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
                <Link className="nav-link" to={"/district"}>Place an order</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to = {"/services"}>Services</Link>
                </li>
                <li>
              <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                    <i className="fas fa-cart-plus"/>
                    </span>
                    my cart 
                </ButtonContainer>
              </Link>
              </li>
              <button type="submit" className="btn btn-dark btn-sm" onClick={() => localStorage.clear()}>Logout</button>
              
            </ul>
          </div>
        </div>
      </nav>
      <Switch> <Route exact path='/' exact component={Home} /></Switch> 
                       
            <Switch>
        
            <Route path="/district" component={District} />
            <Route path="/upload" component={Upload} />
            <Route path = "/services" component={Services}/>
            <Route path = "/Cart" component={Cart}/>
            <Route path = "/edit-profile" component={editcustomer}/>
            <Route path = "/Details" component={Details}/>
            <Route path="/terms" component={terms} />
            <Route path="/working" component={working} />
            <Route path="/sendmessage" component={sendmessage} />
            <Route path="/messagesuccess" component={messagesuccess} />
            <Route path="/search" component={Search} />

            {/*<Route path="/Addproduct" component={Addproduct} />*/}
            <Route path="/ProductList" component={ProductList} />

        </Switch>
         <Footer/>
        </div>
      
    </Router>
  );
}}