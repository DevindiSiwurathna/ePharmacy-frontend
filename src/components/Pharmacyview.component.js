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



export default class Phview extends Component {

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
                    <Link className="nav-link" to={"/edit-pharmacy-account"}>Edit Account</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to={"/search"}>Search Pharmacy</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to = {"/services"}>Services</Link>
                    </li>
                  <button type="submit" className="btn btn-dark btn-sm" onClick={() => localStorage.clear()}>Logout</button>
                  
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
    
    
    }
}