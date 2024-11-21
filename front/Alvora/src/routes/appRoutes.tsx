import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../containers/content/home";
import Login from "../containers/user/login";
import Profile from "../containers/content/profile";
import Signup from "../containers/user/signup";
import NewSale from "../containers/content/newSale";
import EditJogo from "../containers/content/editJogo";
import Users from '../containers/content/usuarios';
import EditUser from '../containers/content/editPerfil';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new_sale" element={<NewSale />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/edit" element={<EditJogo />} />
      <Route path="/usuarios" element={<Users />} />
      <Route path="/edit_user" element={<EditUser />} />
    </Routes>
  );
};

export default AppRoutes;
