import React from "react";
import Back from "../Components/Back";
import Heading from "../Components/Heading";
import img from "../images/about.jpg";
import "../CssFiles/About.css";

function About() {
  return (
    <>
      <section className="about">
        <Back name="Qui Sommes-nous?" title="A PROPOS" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="Notre Histoire"
              subtitle="Check out our company story and work process"
            />

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <button className="btn2">Plus...</button>
          </div>
          <div className="right row">
            <img src="./immio.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
