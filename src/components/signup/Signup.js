import React from "react";
import FormContainer from "../common/formcontainer/FormContainer";
import InputButton from "../common/InputButton";
import InputField from "../common/InputField";
import "./signup.css";
const Signup = () => {
  const inputs = [
    {
      name: "firstName",
      placeholder: "First Name",
      requiredFlag: true,
      type: "text",
      divClass: "dpf",
      inputClass: "mr-10",
    },
    {
      name: "lastName",
      placeholder: "Last Name",
      requiredFlag: true,
      type: "text",
      divClass: "",
      inputClass: "",
    },
    {
      name: "email",
      placeholder: "Email Address",
      requiredFlag: true,
      type: "email",
      divClass: "",
      inputClass: "",
    },
    {
      name: "password",
      placeholder: "Password",
      requiredFlag: true,
      type: "password",
      divClass: "",
      inputClass: "",
    },
    {
      name: "confirmPassword",
      placeholder: "Confirm Password",
      requiredFlag: true,
      type: "password",
      divClass: "",
      inputClass: "",
    },
  ];
  const footerJSX = (
    <div className="text-center">
      Already have an account? <a href="Login.html">Login here</a>
    </div>
  );
  return (
    <div className="signup-bg">
      <FormContainer
        heading="Create Account"
        subHeading="Welcome to Tourists Galore."
        fields={inputs}
        footer={footerJSX}
        requiredFlag={true}
        formType="signup"
      >
        {inputs.map(
          (
            { name, placeholder, requiredFlag, type, divClass, inputClass },
            idx
          ) => {
            if (idx === 1) return null;
            else if (idx === 0)
              return (
                <div className="dpf">
                  <InputField
                    name={"firstName"}
                    placeholder={"First Name"}
                    type={"text"}
                    required={true}
                  />
                  <InputField
                    name={"lastName"}
                    placeholder={"Last Name"}
                    type={"text"}
                    required={true}
                  />
                </div>
              );
            return (
              <InputField
                name={name}
                placeholder={placeholder}
                type={type}
                required={requiredFlag}
                divClass={divClass}
                inputClass={inputClass}
              />
            );
          }
        )}

        <InputButton
          btnClass="btn btn-primary btn-block btn-lg"
          text="Sign Up"
        />
      </FormContainer>
    </div>
  );
};

export default Signup;
