import React from "react";
import MiniDrawer from "./Drawer/Drawer";
import RestaurantsPage from "./Reastaurants/Restaurants";
import "./mainstyles.css";

const Main = () => {
  return (
    <React.Fragment>
      <div className="intro-text">
        <h1>Flavor</h1>
        <h2>Flavor</h2>
      </div>
      <MiniDrawer />
    </React.Fragment>
  );
};

export default Main;
