import React from "react";

const InputField = ({
  name,
  placeholder,
  type,
  required,
  inputClass,
  divClass,
}) => {
  return (
    <div className={`form-group ${divClass}`}>
      <input
        type={type}
        className={`form-control ${inputClass}`}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default InputField;
