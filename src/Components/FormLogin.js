import React from "react";
import useForm from "../utils/useForm";
import validate from "../utils/ValidateInfo";
import { Link } from "react-router-dom";

export const FormLogin = () => {
  return (
    <div className="form-content-right">
      <form className="form" noValidate>
        <h1>Remplissez ce formulaire pour vous connecter</h1>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Entrer votre Email"
          />
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Entrer votre password"
          />
        </div>
        <button className="form-input-btn" type="submit">
          Login
        </button>
        <span className="form-input-login">
          Vous n'avez pas de compte? <Link to="/register">register</Link>
        </span>
      </form>
    </div>
  );
};

export default FormLogin;
