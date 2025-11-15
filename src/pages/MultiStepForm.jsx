/* 
- config 
    - field-name
    - field-type --> input
    - placeholder
    - id
    - label

*/

import { useState } from "react";
import "./styles/stepper-form-styles.css";

const FormFieldItem = ({
  label,
  name,
  fieldType,
  inputType,
  value,
  fieldDchangeHandler,
}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      {fieldType === "input" && (
        <input
          name={name}
          id={name}
          value={value}
          placeholder="enter email"
          onChange={fieldDchangeHandler}
          type={inputType ?? "text"}
          // autoComplete="off"
          required={true}
        />
      )}
    </>
  );
};

const formConfig = [
  {
    name: "email",
    id: "email",
    label: "Email",
    type: "input",
    inputType: "email",
  },
  {
    name: "username",
    id: "username",
    label: "User Name",
    type: "input",
  },
  {
    name: "password",
    id: "password",
    label: "Password",
    type: "input",
    inputType: "password",
  },
];

const MAX_STEPS = formConfig.length - 1;
const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formObj, setFormObj] = useState({});
  const [isSubmited, setIsSubmitted] = useState(false);

  const oninputChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setFormObj((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
    console.log("formObj", formObj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formObj", formObj);
    setIsSubmitted(true);
  };

  const onNextClick = (e) => {
    e.preventDefault(); // preventDefault() here too
    const form = e.target.closest("form");
    // point to remember
    if (form.checkValidity()) setCurrentStep((prev) => prev + 1);
  };
  const onBackClick = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-item-container">
          {isSubmited ? (
            <p>Form is submitted</p>
          ) : (
            [formConfig[currentStep]].map((item, idx) => (
              <FormFieldItem
                key={item.id + "" + idx}
                name={item.name}
                label={item.label}
                fieldType={item.type}
                inputType={item.inputType}
                value={formObj[item.name] || ""} // react warned me here when i dont pass "", check console
                fieldDchangeHandler={oninputChange}
              />
            ))
          )}
        </div>
        <div className="action-handler">
          {currentStep !== 0 && (
            <button type="button" onClick={onBackClick}>
              Back
            </button>
          )}
          {currentStep < MAX_STEPS && (
            <button type="submit" onClick={onNextClick}>
              Next
            </button>
          )}
          {currentStep === MAX_STEPS && <button>Submit</button>}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
