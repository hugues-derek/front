import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Footer from "./Components/Footer";
import Services from "./Pages/Services";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import Contact from "./Pages/Contacts";
import UserProfile from "./Pages/UserProfile";
import Bien from "./Pages/Bien";
import "semantic-ui-css/semantic.min.css";
import "./CssFiles/App.css";
import { AppContextProvider } from "./Store/AppContext";
import Modal from "./Components/Modal";
import BienPage from "./Pages/BienPage";
import VisitePage from "./Pages/VisitePage";

function App() {
  return (
    <Router>
      <AppContextProvider>
        <div className="container-fluid">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/About" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user" element={<UserProfile />} />
            <Route path="/bien" element={<Bien />} />
            <Route path="bien/:id" element={<BienPage />} />
            <Route path="/visite" element={<VisitePage />} />
            <Route
              path="visite/:id"
              element={<h1>Hello from visite Id Page</h1>}
            />
          </Routes>
          <Footer />
        </div>
      </AppContextProvider>
    </Router>
  );
}

export default App;
