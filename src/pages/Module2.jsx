import { useState } from "react";
import Button from "../components/Button";
import Mother from "../components/Module2Family";
import {
  PageContainer,
  PageContent,
  PageTitle,
} from "../components/PageContent";

const Module2 = () => {
  const [currentMessage, setCurrentMessage] = useState(
    "John arrange your toys"
  );
  const [areToysArranged, setAreToysArranged] = useState(false);
  const [currentStep, setCurrentStep] = useState(0); // 0: Mother, 1: Father, 2: Sister, 3: John

  const handleMotherPass = () => {
    setCurrentStep(1);
  };

  const handleFatherPass = () => {
    setCurrentStep(2);
  };

  const handleSisterPass = () => {
    setCurrentStep(3);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setCurrentMessage("John arrange your toys");
    setAreToysArranged(false);
  };

  return (
    <PageContainer>
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "20px",
            fontSize: "60px",
          }}
        >
          🏠
        </div>
        <PageTitle>Prop Drilling</PageTitle>
      </div>
      <h2>
        Passing props from Parent to its children to reach specific child
        component
      </h2>

      <div
        style={{
          marginBottom: "20px",
          padding: "15px",
          backgroundColor: "#f0f8ff",
          borderRadius: "8px",
          border: "2px solid #4682b4",
        }}
      >
        <h3 style={{ margin: "0 0 10px 0" }}>Prop Flow Status:</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontWeight: currentStep >= 0 ? "bold" : "normal",
              color: currentStep >= 0 ? "#ff69b4" : "#999",
            }}
          >
            Mother
          </span>
          <span>→</span>
          <span
            style={{
              fontWeight: currentStep >= 1 ? "bold" : "normal",
              color: currentStep >= 1 ? "#4169e1" : "#999",
            }}
          >
            Father
          </span>
          <span>→</span>
          <span
            style={{
              fontWeight: currentStep >= 2 ? "bold" : "normal",
              color: currentStep >= 2 ? "#9370db" : "#999",
            }}
          >
            Sister
          </span>
          <span>→</span>
          <span
            style={{
              fontWeight: currentStep >= 3 ? "bold" : "normal",
              color: currentStep >= 3 ? "#32cd32" : "#999",
            }}
          >
            John
          </span>
        </div>
        <Button
          variant="secondary"
          onClick={handleReset}
          style={{ marginTop: "10px" }}
        >
          ↺ Reset Demo
        </Button>
      </div>

      <PageContent>
        <Mother
          message={currentMessage}
          areToysArranged={areToysArranged}
          setCurrentMessage={setCurrentMessage}
          setAreToysArranged={setAreToysArranged}
          onPassMessage={handleMotherPass}
          onFatherPass={handleFatherPass}
          onSisterPass={handleSisterPass}
          currentStep={currentStep}
        />

        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            backgroundColor: "#fff9e6",
            borderRadius: "8px",
            border: "2px solid #ffa500",
          }}
        >
          <h3 style={{ margin: "0 0 10px 0" }}>📚 What is Prop Drilling?</h3>
          <p style={{ margin: "5px 0" }}>
            Prop drilling occurs when props need to be passed through multiple
            intermediate components to reach a deeply nested component. In this
            example:
          </p>
          <ul style={{ margin: "10px 0", paddingLeft: "20px" }}>
            <li>
              <strong>Module2</strong> → renders <strong>Mother</strong>
            </li>
            <li>
              <strong>Mother</strong> → renders <strong>Father</strong> (and
              passes all props)
            </li>
            <li>
              <strong>Father</strong> → renders <strong>Sister</strong> (and
              passes all props)
            </li>
            <li>
              <strong>Sister</strong> → renders <strong>John</strong> (and
              passes all props)
            </li>
            <li>
              <strong>setCurrentMessage()</strong> and{" "}
              <strong>setAreToysArranged()</strong> handlers must be passed
              through Father and Sister even though they don't use them!
            </li>
            <li>This creates tight coupling and makes refactoring difficult</li>
          </ul>
          <p
            style={{ margin: "10px 0", fontStyle: "italic", color: "#d9534f" }}
          >
            💡 Look at the code: Father and Sister receive setCurrentMessage and
            setAreToysArranged but never use them - they just pass them down!
          </p>
        </div>
      </PageContent>
    </PageContainer>
  );
};

export default Module2;
