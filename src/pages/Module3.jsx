import { useState } from "react";
import Button from "../components/Button";
import ContextDoc from "../components/ContextDoc";
import { Father, John, Mother, Sister } from "../components/Module3Family";
import {
  PageContainer,
  PageContent,
  PageTitle,
} from "../components/PageContent";
import { ToyContext } from "../context/toys";

// Main Component - THE CONTEXT PROVIDER wraps all components!
const Module3 = () => {
  const [currentMessage, setCurrentMessage] = useState(
    "John arrange your toys"
  );
  const [areToysArranged, setAreToysArranged] = useState(false);
  const [currentStep, setCurrentStep] = useState(0); // 0: Mother, 1: Father, 2: Sister, 3: John

  const handleMotherPass = () => {
    setCurrentStep(3);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setCurrentMessage("John arrange your toys");
    setAreToysArranged(false);
  };

  // 🎯 Context value shared with ALL components
  const contextValue = {
    message: currentMessage,
    areToysArranged,
    setCurrentMessage,
    setAreToysArranged,
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
        <PageTitle>Context API Solution - No Prop Drilling!</PageTitle>
      </div>
      <h2>
        All components are independent siblings - they access shared data via
        Context
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
        <h3 style={{ margin: "0 0 10px 0" }}>🎯 Context API Architecture:</h3>
        <div
          style={{
            padding: "10px",
            backgroundColor: "#e6f9e6",
            borderRadius: "5px",
            marginBottom: "10px",
            border: "2px solid #28a745",
          }}
        >
          <strong>Module3 (Context Provider)</strong>
          <div style={{ marginLeft: "20px", marginTop: "5px" }}>
            ↓ provides Context to all children ↓
          </div>
        </div>
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
              padding: "5px 10px",
              backgroundColor: currentStep >= 0 ? "#ff69b4" : "#ddd",
              color: currentStep >= 0 ? "white" : "#666",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
          >
            Mother
          </span>
          <span
            style={{
              padding: "5px 10px",
              backgroundColor: currentStep >= 1 ? "#4169e1" : "#ddd",
              color: currentStep >= 1 ? "white" : "#666",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
          >
            Father
          </span>
          <span
            style={{
              padding: "5px 10px",
              backgroundColor: currentStep >= 2 ? "#9370db" : "#ddd",
              color: currentStep >= 2 ? "white" : "#666",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
          >
            Sister
          </span>
          <span
            style={{
              padding: "5px 10px",
              backgroundColor: currentStep >= 3 ? "#32cd32" : "#ddd",
              color: currentStep >= 3 ? "white" : "#666",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
          >
            John
          </span>
        </div>
        <div
          style={{
            marginTop: "10px",
            padding: "10px",
            backgroundColor: "#fff3cd",
            borderRadius: "5px",
            fontSize: "14px",
          }}
        >
          ⭐ All components are <strong>siblings</strong> (not nested) and
          access Context independently!
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
        {/* 🎯 CONTEXT PROVIDER wraps all components at this level! */}
        <ToyContext.Provider value={contextValue}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {/* ✅ All components are INDEPENDENT SIBLINGS */}
            <Mother
              onPassMessage={handleMotherPass}
              currentStep={currentStep}
            />

            <Father />

            <Sister />

            <John currentStep={currentStep} />
          </div>
        </ToyContext.Provider>

        <ContextDoc />
      </PageContent>
    </PageContainer>
  );
};

export default Module3;
