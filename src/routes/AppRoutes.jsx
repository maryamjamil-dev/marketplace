import { Routes, Route } from "react-router-dom";

import BuyerHome from "../Pages/buyer/BuyerHome";
import SellerHome from "../Pages/seller/SellerHome";
import SellerDashboard from "../pages/seller/SellerDashboard";
import CreateStore from "../pages/seller/CreateStore";
import SellerProducts from "../pages/seller/Products";
import AddProduct from "../pages/seller/AddProduct";
import SellerOrders from "../pages/seller/Orders";
import Analytics from "../pages/seller/Analytics";
import Settings from "../pages/seller/Settings";
import Products from "../pages/buyer/Products";
import ProductDetails from "../pages/buyer/ProductDetails";
import Stores from "../pages/buyer/Stores";
import StoreDetails from "../pages/buyer/StoreDetails";
import Cart from "../pages/buyer/Cart";
import Checkout from "../pages/buyer/Checkout";
import Orders from "../pages/buyer/Orders";
import Profile from "../pages/buyer/Profile";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import VerifyOTP from "../pages/auth/VerifyOTP";
import ForgotPassword from "../pages/auth/ForgetPassword";
import StoreProfile from "../pages/seller/StoreProfile";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<BuyerHome />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/seller" element={<SellerHome />} />
      <Route path="/verify-otp" element={<VerifyOTP />} />
      <Route path="/seller/dashboard" element={<SellerDashboard />} />
      <Route path="/seller/create-store" element={<CreateStore />} />
      <Route path="/seller/products" element={<SellerProducts />} />
      <Route path="/seller/add-product" element={<AddProduct />} />
      <Route path="/seller/orders" element={<SellerOrders />} />
      <Route path="/seller/analytics" element={<Analytics />} />
      <Route path="/seller/Settings" element={<Settings />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/stores" element={<Stores />} />
      <Route path="/stores/:id" element={<StoreDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/seller/store" element={<StoreProfile />} />
    </Routes>
  );
}

export default AppRoutes;