import { useState } from "react";

const formConfig = [
  { name: "email", label: "Enter email", type: "email" },
  { name: "phone", label: "Enter phone", type: "phone" },
  { name: "password", label: "Enter password", type: "password" },
];

const validation = {
  email: (v) => (v?.length === 0 ? "Email required" : ""),
  phone: (v) => (v?.length !== 10 ? "Phone is invalid" : ""),
  password: (v) => (v?.length < 8 ? "Password is weak" : ""),
};

const MultiStepForm = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [formValues, setFormValues] = useState({});
  const [error, setError] = useState("");

  const currField = formConfig[activeIdx];
  const currValue = formValues[currField.name];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  const handleNext = () => {
    const error = validation[currField.name](currValue ?? "");
    if (error.length) {
      setError(error);
      return;
    }
    setError("");
    setActiveIdx((prev) => {
      if (prev < formConfig.length - 1) {
        return prev + 1;
      } else {
        return prev;
      }
    });
  };

  const handlePrev = () => {
    setError("");
    setActiveIdx((prev) => {
      if (prev > 0) {
        return prev - 1;
      } else {
        return prev;
      }
    });
  };

  const handleInputChange = (value, field) => {
    const error = validation[currField.name](currValue ?? "");
    if (error.length) {
      setError(error);
      return;
    }
    setError("");
    setFormValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit}>
        <div key={currField.name}>
          <input
            value={currValue}
            onChange={(e) => handleInputChange(e.target.value, currField.name)}
            name={currField.name}
          />
          <label htmlFor={currField.name}>{currField.label}</label>
        </div>
        {error && <p>{error}</p>}
        {activeIdx !== 0 && (
          <button onClick={handlePrev} type="button">
            Prev
          </button>
        )}
        {activeIdx < formConfig.length - 1 ? (
          <button onClick={handleNext} type="button">
            Next
          </button>
        ) : (
          <button type="submit">Submit</button>
        )}
      </form>
    </div>
  );
};

export default MultiStepForm;
