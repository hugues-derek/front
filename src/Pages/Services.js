import React from "react";
import img from "../images/services.jpg";
import Back from "../Components/Back";
import FeaturedCard from "../Components/FeaturedCard";
import "../CssFiles/Featured.css";

function Services() {
  return (
    <>
      <section className="services mb">
        <Back name="Nos Services" title="Services" cover={img} />
        <div className="featured container">
          <FeaturedCard />
        </div>
      </section>
    </>
  );
}

export default Services;
