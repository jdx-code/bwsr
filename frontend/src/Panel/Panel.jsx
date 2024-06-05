import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../component/Login/Login";
import Signup from "../component/Signup/Signup";
import Dashboard from "../component/Dashboard/Dashboard";
import VendorLogin from "../component/vendorLogin/VendorLogin";
import VendorSignup from "../component/vendorSignup/VendorSignup";
import Homepage from "../component/Homepage/Homepage";
import DynamicVendorComp from "../component/DynamicVendorComp/DynamicVendorComp";
import DynamicSellerComp from "../component/DynamicVendorComp/DynamicSellerComp";
import VendorHomePage from "../component/VendorHomepage/VendorHomePage";

const Panel = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login {...props}/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/vendor-login" element={<VendorLogin {...props}/>}/>
      <Route path="/vendor-signup" element={<VendorSignup/>}/>
      <Route path="/homepage" element={<Homepage {...props}/>}/>
      <Route path="/vendorDashboard" element={<VendorHomePage {...props}/>}/>
      <Route
        path="/vendors/:id"
        element={<DynamicVendorComp />}
      />
       <Route
        path="/vendors/:id/:id"
        element={<DynamicSellerComp />}
      />
    </Routes>
  );
};

export default Panel;
