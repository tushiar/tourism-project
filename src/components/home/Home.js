import React from "react";
import Card from "./card/Card";
import Wallpaper from "./wallpaper/Wallpaper";
import './home.css'
const Home = () => {
  return (
    <div className="home-container">
      <Wallpaper />
      <div className="flex">{Array(4).fill(<Card />)}</div>

    </div>
  );
};

export default Home;
