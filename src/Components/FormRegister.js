import React from "react";
import { Link } from "react-router-dom";
import useForm from "../utils/useForm";
import validate from "../utils/ValidateInfo";
import { StatusOptions, SexeStatus } from "../Data/data";

const FormRegister = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>Remplissez ce formulaire pour la création de votre compte</h1>
        <div className="form-inputs">
          <label className="form-label">Nom</label>
          <input
            className="form-input"
            type="text"
            name="nom"
            placeholder="Entrer votre nom"
            value={values.nom}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Prenom</label>
          <input
            className="form-input"
            type="text"
            name="prenom"
            placeholder="Entrer votre prénom"
            value={values.prenom}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Entrer votre email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Confirm Password</label>
          <input
            className="form-input"
            type="password"
            name="password2"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Votre status</label>
          <select name="status" className="form-input">
            <option value="">status</option>
            {StatusOptions.map((s) => {
              return (
                <option value={s.value} key={s.key}>
                  {s.text}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-inputs">
          <label className="form-label">Sexe</label>
          <select name="sexe" className="form-input">
            <option value="">sexe</option>
            {SexeStatus.map((s) => {
              return (
                <option value={s.value} key={s.key}>
                  {s.text}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-inputs">
          <label className="form-label">Avatar</label>
          <input type="file" className="form-input" />
        </div>
        <button className="form-input-btn" type="submit">
          Sign up
        </button>
        <span className="form-input-login">
          Avez-vous déjà un compte? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default FormRegister;
