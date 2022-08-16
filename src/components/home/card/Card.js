import React from "react";
import './card.css'
const Card = () => {
  return (
    <div className="card">
      <img
        src="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2017/03/16/578816-odisha6.jpg"
        alt="Avatar"
        style={{width:"100%"}}
      />
      <div className="container">
        <h4>
          <b>John Doe</b>
        </h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  );
};

export default Card;
