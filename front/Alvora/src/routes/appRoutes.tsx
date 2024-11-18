import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../containers/content/home";
import Login from "../containers/user/login";
import Profile from "../containers/content/profile";
import Signup from "../containers/user/signup";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;
