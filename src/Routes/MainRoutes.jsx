import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../Components/Home';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import Shop from '../Components/Shop';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Blog from '../Blogs/Blogs';
import BlogDetail from '../Blogs/BlogDetails';
import Cart from '../Components/Cart';
import Wishlist from '../Components/Wishlist';
import Login from '../Authentication/Login';
import TermsandConditions from '../Information/TermsandConditions';
import PrivacyPolicy from '../Information/PrivacyPolicy';
import Checkout from '../Components/Checkout';
import ShopList from '../Components/ShopList';
import ShopDetails from '../Components/ShopDetails';
import QuickView from '../Components/QuickView';
import Category from '../Components/Category';
import Register from '../Authentication/Register';
import ForgotPassword from '../Authentication/ForgotPassword';
import Error404 from '../Components/Error404'
import Dashboard from '../Profiles/Dashboard';
import VerifyPassword from '../Authentication/VerifyPassword';
import CategoryShop from '../Components/CategoryShop';
import AddAddress from '../Profiles/AddAddress';
import UpdateAddress from '../Profiles/UpdateAddress';
import UpdateProfile from '../Profiles/UpdateProfile';
import OrderSummary from '../Orders/OrderSummary';

const MainRoutes = () => {
  return (
    <div>
        <Router>
            <Header />
         <Routes>

          {/* Public Routes */}
          <Route exact path={"/"} element={<Home />} />
          <Route path={"/shop"} element={<Shop />} />
          <Route path={"/shopdetails/:id"} element={<ShopDetails />} />
          <Route path={"/shoplist"} element={<ShopList />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/blog"} element={<Blog />} />
          <Route path={"/blogdetails"} element={<BlogDetail />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/category"} element={<Category />} />
          <Route path={"/wishlist"} element={<Wishlist />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/termsandcondition"} element={<TermsandConditions />} />
          <Route path={"/privacypolicy"} element={<PrivacyPolicy />} />
          <Route path={"/quickview"} element={<QuickView />} />
          <Route path={"/forgotpassword"} element={<ForgotPassword />} />
          <Route path={"/verifypasword"} element={<VerifyPassword />} />
          <Route path={"/categoryShop/:id"} element={<CategoryShop />} />




          {/* protected Routes */}
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"/dashboard"} element={<Dashboard />} />
          <Route path={"/addaddress"} element={<AddAddress />} />
          <Route path={"/updateaddress"} element={<UpdateAddress />} />
          <Route path={"/updateprofile"} element={<UpdateProfile />} />
          <Route path={"/ordersummary"} element={<OrderSummary />} />









          
          <Route path={"/error"} element={<Error404/>} />

        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default MainRoutes