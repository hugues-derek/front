import React from "react";
import { user } from "../Data/data";
// import "../CssFiles/ProfilePage.css";

const UserProfile = () => {
  return (
    <div className="container">
      <div className="card-container">
        <div className="upper-container"></div>
        <div className="low-container">
          <div className="image-container">
            <img src={user.imageUrl} alt={user.nom} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
