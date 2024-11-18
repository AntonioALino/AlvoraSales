import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../containers/content/home";
import Login from "../containers/user/login";
import Profile from "../containers/content/profile";
import Signup from "../containers/user/signup";
import NewSale from "../containers/content/newSale"

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new_sale" element={<NewSale />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;
