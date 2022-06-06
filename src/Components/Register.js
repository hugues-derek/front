import React, { useState } from "react";
import FormRegister from "../Components/FormRegister";
import Back from "./Back";
import img from "../images/pricing.jpg";

import "../CssFiles/Form.css";

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <Back name="Creation de Compte" title="Creer votre Compte" cover={img} />
      <div className="form-container">
        <span className="close-btn">×</span>
        <div className="form-content-left">
          <img className="form-img" src="img-2.svg" alt="spaceship" />
        </div>
        {!isSubmitted ? (
          <FormRegister submitForm={submitForm} />
        ) : (
          <div className="form-success">Hello from Success Form</div>
        )}
      </div>
    </>
  );
};

export default Register;
