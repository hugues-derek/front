import React from "react";
import Heading from "./Heading";
import FeaturedCard from "./FeaturedCard";
import "../CssFiles/Featured.css";

const Featured = () => {
  return (
    <>
      <section className="featured background">
        <div className="container">
          <Heading
            title="Types de maisons en vedette"
            subtitle="Trouvez toutes sortes de maisons"
          />
          <FeaturedCard />
        </div>
      </section>
    </>
  );
};

export default Featured;
