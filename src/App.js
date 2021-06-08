
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

import axios from 'axios';

export default class App extends Component {

 
      state = {

        userrole : '',
        userid   : '',
        isloggedin : 'no',
        msg : ''

    };

    buttonHandler = e => {

      localStorage.clear()
      this.setState( {
        isloggedin : 'no'
      })
    }

    submitHandler = e => {
      e.preventDefault()

      const logingdata ={
          email : this .Email,
          password: this .Password
      }

         axios
         .post('/api/UserLogin', logingdata)

         .then(response => {
             console.log(response); //to print response in console in developper tool 
             localStorage.setItem('login', response.data.token);
             this.setState( { isloggedin : 'yes'});
             
         })
         .catch(error => {
             console.log(error)
             this.setState({
                 msg : 'Invalid Email/Password' 
             })
         })
  }


/*componentWillMount() {

  if(localStorage.login)
  {
    const currentuser     = JSON.parse(atob(localStorage.login.split(".")[1])); 
    this.setState( {userrole: currentuser.role });
    this.setState( {userid: currentuser.id });
  }

}*/

render() {

  let errr ='';

  if (this.state.msg){

      errr =(
          <div className="alert alert-danger" role="alert" >
              {this.state.msg}
          </div>
      )
  }

if(this.state.isloggedin==="yes") {

  const currentuser     = JSON.parse(atob(localStorage.login.split(".")[1])); 

if(currentuser.role  === "Customer"){
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
              <button type="submit" className="btn btn-dark btn-sm" onClick={this.buttonHandler}>Logout</button>
              
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
}

else if(currentuser.role  === "Pharmacy"){

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
              <button type="submit" className="btn btn-dark btn-sm" onClick={this.buttonHandler}>Logout</button>
              
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

            {/*<Route path="/Addproduct" component={Addproduct} />*/}
            <Route path="/ProductList" component={ProductList} />

        </Switch>
         <Footer/>
        </div>
      
    </Router>
  );


}}

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
            <div className="outer">
            <div className="inner"> 
            <form onSubmit={ this.submitHandler}>
            { errr }

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" placeholder="Enter email" onChange ={ e => this.Email = e.target.value} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="text" className="form-control" placeholder="Enter password" onChange ={ e => this.Password = e.target.value} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                 
                
                
                <br></br>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                {/*<p className="forgot-password text-right">
                    Forgot <Link to= "/Forgotpassword" >password?</Link>
                </p>*/}
            </form>
            </div>
            </div>
      <Switch> <Route exact path='/' exact component={Home} /></Switch> 
                       
            <Switch>
      
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

