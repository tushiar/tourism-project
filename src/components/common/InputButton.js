import React from "react";

const InputButton = ({ btnClass, text }) => {
  return (
    <div className="form-group">
      <button className={btnClass}>{text}</button>
    </div>
  );
};

export default InputButton;
