import React from "react";
import Heading from "./Heading";
import "../CssFiles/Reward.css";
import { awards } from "../Data/data";

const Reward = () => {
  return (
    <>
      <section className="awards padding">
        <div className="container">
          <Heading
            title="Plus de 10,0000+ personnes utilisent notre service à travers le monde."
            subtitle="Notre Mérite"
          />

          <div className="content grid4 mtop">
            {awards.map((val, index) => (
              <div className="box" key={index}>
                <div className="icon">
                  <span>{val.icon}</span>
                </div>
                <h1>{val.num}</h1>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Reward;
