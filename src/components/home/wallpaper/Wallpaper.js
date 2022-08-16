import React from "react";
import './wallpaper.css';
const Wallpaper = () => {
  return (
    <div className="container">
      <img
        src="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2017/03/16/578816-odisha6.jpg"
        alt="Orissa"
        style={{ width: "100%" }}
      />
      <button className="btn-explore">EXPLORE NOW</button>
    </div>
  );
};

export default Wallpaper;
