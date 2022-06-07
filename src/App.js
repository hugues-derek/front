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
import "semantic-ui-css/semantic.min.css";
import "./CssFiles/App.css";
import { AppContextProvider } from "./Store/AppContext";

function App() {
  return (
    <Router>
      <AppContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/About" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="user" element={<UserProfile />} />
          <Route
            path="user/:id"
            element={<p>Hello from User id Component</p>}
          />
          <Route path="bien" element={<p>Hello from bien Component</p>} />
          <Route path="addBien" element={<p>Hello from add Bien</p>} />
          <Route
            path="updateBien/:id"
            element={<p>Hello from updateBien Component</p>}
          />
        </Routes>
        <Footer />
      </AppContextProvider>
    </Router>
  );
}

export default App;
