import React from "react";
import FormLogin from "./FormLogin";
import Back from "./Back";
import "../CssFiles/Form.css";
import img from "../images/pricing.jpg";

function Login() {
  return (
    <>
      <Back name="CONNECTION" title="Connectez-vous" cover={img} />
      <div className="form-container" style={{ height: "600px" }}>
        <span className="close-btn">×</span>
        <div className="form-content-left">
          <img className="form-img" src="img-1.svg" alt="spaceship" />
        </div>
        <FormLogin />
      </div>
    </>
  );
}

export default Login;
