import AuthenticateService from "./components/login/AuthenticateService";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import { Route, Switch, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import CartComponent from "./components/CartComponent";
import HomePage from "./components/HomePage";
import OrderComponent from "./components/OrderComponent";
import LoginForm from "./components/login/LoginForm";
import ForgotPassword from "./components/forgotpassword/Forgotpassword";
import AddGroceryProduct from "./components/AddGroceryProduct";
import RegistrationForm from "./components/RegistrationForm";
import FarmerProfile from "./components/profile/FarmerProfile";
import News from "./components/News";
import Schemes from "./components/Schemes";
import Crop from "./components/crops/Crop";
import Barley from "./components/crops/Barley";
import Cotton from "./components/crops/Cotton";
import Cowpea from "./components/crops/Cowpea";
import GroundNut from "./components/crops/GroundNut";
import Maize from "./components/crops/Maize";
import AddProduct from "./components/AddProduct";
import Marketmain from "./components/expense/Marketmain";
import Payment from "./components/Payment";
import AddProductForm from "./components/AddSomething";
import DisplayProducts from "./components/DisplayProducts";
import DisplayOrders from "./components/DisplayOrders";
import DisplayUsers from "./components/Displayusers";
import { ContactUs } from "./components/ContactUs";
import Rice from "./components/crops/Rice";
import AboutUs from "./components/AboutUs";
import Dashboard from "./components/Dashboard";
import UpdateUserAdmin from "./components/profile/UpdateUserAdmin";
import DisplayAllOrders from "./components/DisplayAllOrders";
import DashboardAdmin from "./components/DashboardAdmin";
import DashboardFarmer from "./components/DashboardFarmer";
function ProtectedRoute({ children, userType }) {
  const isUserLoggedIn = AuthenticateService.isUserLoggedIn();
  const currentUserType = AuthenticateService.getUserType();

  if (!isUserLoggedIn) {
    // Redirect to the login page or display a message for unauthenticated users
    return <h1 style={{ marginTop: "80px" }}>Kindly Login First</h1>;
  }

  if (userType.includes(currentUserType)) {
    // Allow access to the route for users with the specified userType
    return children;
  }

  // Redirect or show a message for users with the wrong userType
  return <h1 style={{ marginTop: "80px" }}>Access Denied</h1>;
}

function App() {
  useEffect(() => {
    // You might need to add additional logic here to check if the user is authenticated
    // and then set the user type accordingly.
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginForm} />
        <Route path="/register" exact component={RegistrationForm} />
        <Route path="/forgotpassword" exact component={ForgotPassword} />

        {/* Protected Routes */}
        {/* <ProtectedRoute
          path="/userprofile/:userId"
          userType={["users", "admin", "farmer"]}
          exact
        >
          <UpdateUserAdmin />
        </ProtectedRoute> */}
        <Route path="/userprofile/:userId" component={UpdateUserAdmin} />
        <ProtectedRoute
          path="/farmerProfile"
          userType={["users", "admin", "farmer"]}
          exact
        >
          <FarmerProfile />
        </ProtectedRoute>
        <ProtectedRoute path="/addproduct" exact userType={["admin", "farmer"]}>
          <AddProduct />
        </ProtectedRoute>
        <ProtectedRoute
          path="/addgroceryproduct"
          userType={["admin", "farmer"]}
          exact
        >
          <AddGroceryProduct />
        </ProtectedRoute>
        <ProtectedRoute
          path="/user/order"
          userType={["users", "admin", "farmer"]}
        >
          <OrderComponent />
        </ProtectedRoute>
        <ProtectedRoute
          path="/payment"
          userType={["users", "admin", "farmer"]}
          exact
        >
          <Payment />
        </ProtectedRoute>
        <ProtectedRoute
          path="/displayorders"
          userType={["users", "admin", "farmer"]}
          exact
        >
          <DisplayOrders />
        </ProtectedRoute>
        <ProtectedRoute
          path="/displayallorders"
          userType={["admin"]}
          exact
        >
          <DisplayAllOrders />
        </ProtectedRoute>
        <ProtectedRoute path="/displayusers" userType={["admin"]} exact>
          <DisplayUsers />
        </ProtectedRoute>
        {/* End of Protected Routes */}

        <Route path="/products" exact component={ProductList} />
        <Route path="/products/:productId" component={ProductDetails} />
        <ProtectedRoute
          path="/user/cart"
          userType={["users", "admin", "farmer"]}
          exact
        >
          <CartComponent />
        </ProtectedRoute>

        <ProtectedRoute path="/mandirate" userType={["admin", "farmer"]} exact>
          <Marketmain />
        </ProtectedRoute>

        <ProtectedRoute
          path="/dashboard"
          userType={["users", "admin", "farmer"]}
          exact
        >
          <Dashboard />
        </ProtectedRoute>
        <ProtectedRoute
          path="/admin/dashboard"
          userType={["users", "admin", "farmer"]}
          exact
        >
          <DashboardAdmin />
        </ProtectedRoute>
        <ProtectedRoute
          path="/farmer/dashboard"
          userType={["users", "admin", "farmer"]}
          exact
        >
          <DashboardFarmer />
        </ProtectedRoute>

        {/* <Route path="/mandirate" exact component={Marketmain} /> */}
        <Route path="/crops" exact>
          <Crop />
        </Route>

        <Route path="/news" exact>
          <News />
        </Route>

        <Route path="/schemes" exact>
          <Schemes />
        </Route>

        <Route path="/crops/barley" exact>
          <Barley />
        </Route>

        <Route path="/crops/cotton" exact>
          <Cotton />
        </Route>

        <Route path="/crops/cowpea" exact>
          <Cowpea />
        </Route>

        <Route path="/crops/groundnut" exact>
          <GroundNut />
        </Route>

        <Route path="/crops/maize" exact>
          <Maize />
        </Route>

        <Route path="/addsomething" exact>
          <AddProductForm />
        </Route>

        <Route path="/displayproducts" exact>
          <DisplayProducts />
        </Route>

        <Route path="/crops/rice" exact>
          <Rice />
        </Route>

        <Route path="/contactus" exact>
          <ContactUs />
        </Route>

        <Route path="/AboutUs" exact>
          <AboutUs />
        </Route>

        <Route>
          <h2>404 Page not found</h2>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
