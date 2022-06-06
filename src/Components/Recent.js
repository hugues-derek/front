import React from "react";
import Heading from "./Heading";
import "../CssFiles/Recent.css";
import RecentCard from "./RecentCard";

export const Recent = () => {
  return (
    <>
      <section className="recent padding">
        <div className="container">
          <Heading
            title="Nos Dernières Propriétés"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
          <RecentCard />
        </div>
      </section>
    </>
  );
};
