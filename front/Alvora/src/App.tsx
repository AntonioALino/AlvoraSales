import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/appRoutes";
import Nav from "./components/nav";

const App: React.FC = () => {
  return (
    <Router>
      <Nav />
      <AppRoutes />
    </Router>
  );
};

export default App;
