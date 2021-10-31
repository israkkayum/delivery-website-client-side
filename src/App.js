import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider';
import Login from './components/Login/Login/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Shop from './components/Shop/Shop';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Checkout from './Checkout/Checkout';
import Order from './Order/Order';
import Delivery from './Checkout/Delivery/Delivery';
import AddRestaurant from './AddRestaurant/AddRestaurant';


function App() {
  return (
    <div>

<AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path ="/">
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path = "/login">
              <Login></Login>
            </Route>
            <Route path="/shop/:restaurantId">
               <Shop></Shop>
            </Route>
            <PrivateRoute path="/checkout">
              <Checkout></Checkout>
            </PrivateRoute>
            <PrivateRoute path="/my-order">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path="/delivery">
              <Delivery></Delivery>
            </PrivateRoute>
            <PrivateRoute path="/add-restaurant">
              <AddRestaurant></AddRestaurant>
            </PrivateRoute>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
     
    </div>
  );
}

export default App;