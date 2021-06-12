import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Contact from './components/Contact';
import Header from './components/Header/index';
import Home from './pages/Home';
import SpecialOffers from './components/SpecialOffers';
import Wishlist from './components/HeaderCom/Wishlist';
import Login from './components/HeaderCom/Login';
import OrderHistory from './components/HeaderCom/OrderHistory';
import Register from './components/HeaderCom/Register';
import Shipping from './components/HeaderCom/Shipping';
/**
 * / => Customer facing homepage with header
 * /admin => Different header & sidebar
 * /admin/* => Use Admin header & sidebar with respective page
 * /support => FAQ page with no header & sidebar
 */

function App() {
  return (
    <>
      <BrowserRouter>
        <>
          <Header />
          <Switch>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/demo">
                <h1>Yoohoo Demo!</h1>
              </Route>
              <Route path="/wishlist">
                <Wishlist/>
              </Route>
              <Route path="/shipping">
                <Shipping/>
              </Route>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/register">
                <Register/>
              </Route>
              <Route path="/orderhistory">
                <OrderHistory/>
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <Footer />
          </>
      </BrowserRouter>
    </>
  );
}

export default App;
