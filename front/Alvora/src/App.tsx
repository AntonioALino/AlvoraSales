import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/appRoutes";
import Nav from "./components/nav";
import Footer from "./components/footer"

const App: React.FC = () => {
  return (
    <Router>
      <Nav />
      <AppRoutes />
      <Footer />
    </Router>
  );
};

export default App;
