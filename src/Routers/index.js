import { Route, Routes, BrowserRouter } from "react-router-dom";

import ForgetPassword from "../Screens/Auth/ForgetPassword";
import ForgetPassword2 from "../Screens/Auth/ForgetPassword2";
import ForgetPassword3 from "../Screens/Auth/ForgetPassword3";
import AdminLogin from "../Screens/Auth/Login";
import AdminSignup from "../Screens/Auth/signup";

import Error from "../Screens/Error";
import { Home } from "../Screens/Home";
import { ProductListing } from "../Screens/ProductListing";
import { Novel } from "../Screens/Novel";
import { ProductDetail } from "../Screens/ProductListing/productDetail";
import { MyAccount } from "../Screens/MyAccount";
import { ProtectedRoutes } from "./ProtectedRoutes";
 
export default function UserRouter() {
  return (
    <BrowserRouter basename="/TimUser">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/forget-password2" element={<ForgetPassword2 />} />
        <Route path="/forget-password3" element={<ForgetPassword3 />} />

        <Route path="/book-listing" element={<ProductListing />}></Route>
        <Route path="/novel-listing" element={<Novel />}></Route>
        <Route path="/book-listing/product-detail/:id" element={<ProductDetail />}></Route>
        <Route path="*" element={<Error />} />
        <Route path="/login" element={<AdminLogin />}></Route>
        <Route path="/sign_up" element={<AdminSignup />}></Route>
        <Route path="/account" element={<ProtectedRoutes Components={MyAccount} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}