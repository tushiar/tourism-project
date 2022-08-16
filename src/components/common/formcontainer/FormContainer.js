import React from "react";
import "./form-container.css";
const FormContainer = ({
  heading = "",
  subHeading = "",
  children,
  footer,
}) => {
  return (
    <div className="signup-form">
      <div className="form-container">
        {heading ? <h2>{heading}</h2> : null}
        {subHeading ? <p>{subHeading}.</p> : null}
        <hr />
        {children}
      </div>
      {footer}

    
    </div>
  );
};

export default FormContainer;
