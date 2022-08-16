import React from "react";
import FormContainer from "../common/formcontainer/FormContainer";
import InputButton from "../common/InputButton";
import InputField from "../common/InputField";
import "./login.css";
const Login = () => {
  const inputs = [
    {
      name: "email",
      placeholder: "Email Address",
      requiredFlag: true,
      type: "email",
    },
    {
      name: "password",
      placeholder: "Password",
      requiredFlag: true,
      type: "password",
    },
  ];
  const footerJSX = (
    <div className="text-center">
      Don't have an account? <a href="signup.html">Create here</a>
    </div>
  );
  return (
    <div className="login-bg">
      <FormContainer
        heading="Sign in"
        subHeading="Welcome to Tourists Galore."
        fields={inputs}
        footer={footerJSX}
        requiredFlag={true}
      >
        {inputs.map(({ name, placeholder, requiredFlag, type }) => (
          <InputField
            name={name}
            placeholder={placeholder}
            type={type}
            required={requiredFlag}
          />
        ))}

        <InputButton
          btnClass="btn btn-primary btn-block btn-lg"
          text="Login"
        />
      </FormContainer>
    </div>
  );
};

export default Login;
