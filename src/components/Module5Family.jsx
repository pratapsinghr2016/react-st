import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentStep,
  setMessage,
  setToysArranged,
} from "../slices/toySlice";
import Button from "./Button";

// John Component - Uses Redux Toolkit
export const John = () => {
  // 🎯 RTK: Read state from store (state.toy because that's our slice name)
  const { message, areToysArranged, currentStep } = useSelector(
    (state) => state.toy
  );

  // 🎯 RTK: Same dispatch as classic Redux!
  const dispatch = useDispatch();

  const handleArrangeToys = () => {
    dispatch(setToysArranged(true));
    dispatch(setMessage("Toys are now arranged! 🎉"));
  };

  const handleResetToys = () => {
    dispatch(setToysArranged(false));
    dispatch(setMessage("John arrange your toys"));
  };

  const isActive = currentStep === 3;
  const canAct = currentStep >= 3;

  return (
    <div
      style={{
        border: "3px solid #32cd32",
        borderRadius: "12px",
        padding: "20px",
        backgroundColor: isActive ? "#e6ffe6" : "#f5f5f5",
        transition: "all 0.3s ease",
        boxShadow: isActive ? "0 0 20px rgba(50, 205, 50, 0.5)" : "none",
        opacity: canAct ? 1 : 0.6,
      }}
    >
      <h3 style={{ margin: "0 0 15px 0", color: "#32cd32" }}>👦 John</h3>
      {canAct && (
        <div style={{ marginBottom: "15px" }}>
          <p style={{ margin: "5px 0" }}>
            <strong>Message Received:</strong> {message}
          </p>
          <p style={{ margin: "5px 0" }}>
            <strong>Toys Status:</strong>{" "}
            <span
              style={{
                color: areToysArranged ? "green" : "red",
                fontWeight: "bold",
              }}
            >
              {areToysArranged ? "✓ Arranged" : "✗ Not Arranged"}
            </span>
          </p>
          <p
            style={{
              margin: "10px 0",
              padding: "10px",
              backgroundColor: "#d4edda",
              borderRadius: "5px",
              fontSize: "14px",
            }}
          >
            🚀 <strong>Redux Toolkit!</strong> Same dispatch pattern, 95% less
            boilerplate code!
          </p>
        </div>
      )}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Button
          variant="primary"
          onClick={handleArrangeToys}
          disabled={!canAct || areToysArranged}
          style={{ opacity: !canAct || areToysArranged ? 0.5 : 1 }}
        >
          ✓ Arrange Toys
        </Button>
        <Button
          variant="secondary"
          onClick={handleResetToys}
          disabled={!canAct}
          style={{ opacity: !canAct ? 0.5 : 1 }}
        >
          ↺ Reset
        </Button>
      </div>
      <div style={{ marginTop: "15px", fontSize: "40px", textAlign: "center" }}>
        👦
      </div>
    </div>
  );
};

// Sister Component - Uses Redux to read global state
export const Sister = () => {
  return (
    <div
      style={{
        border: "3px solid #9370db",
        borderRadius: "12px",
        padding: "20px",
        backgroundColor: "#f0e6ff",
        boxShadow: "0 0 20px rgba(147, 112, 219, 0.5)",
        opacity: 0.6,
      }}
    >
      <h3 style={{ margin: "0 0 15px 0", color: "#9370db" }}>👧 Sister</h3>
      <div style={{ marginBottom: "15px" }}>
        <p style={{ margin: "5px 0" }}>
          <strong>Message Received:</strong> Sister is playing with her dolls
        </p>
        <p style={{ margin: "5px 0" }}>
          <strong>Toys Status:</strong>{" "}
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            Sister does not track toys status
          </span>
        </p>
        <p
          style={{
            margin: "10px 0",
            padding: "10px",
            backgroundColor: "#e7d4f5",
            borderRadius: "5px",
            fontSize: "14px",
          }}
        >
          ✅ <strong>No Props Needed!</strong> Sister reads from Redux store
          directly - no props from Father!
        </p>
      </div>

      <div style={{ marginTop: "15px", fontSize: "40px", textAlign: "center" }}>
        👧
      </div>
    </div>
  );
};

// Father Component - Uses Redux to read global state
export const Father = () => {
  return (
    <div
      style={{
        border: "3px solid #4169e1",
        borderRadius: "12px",
        padding: "20px",
        backgroundColor: "#f5f5f5",
        boxShadow: "0 0 20px rgba(65, 105, 225, 0.5)",
        opacity: 0.6,
      }}
    >
      <h3 style={{ margin: "0 0 15px 0", color: "#4169e1" }}>👨 Father</h3>
      <div style={{ marginBottom: "15px" }}>
        <p style={{ margin: "5px 0" }}>
          <strong>Message Received:</strong> Father chilling in his room
        </p>
        <p style={{ margin: "5px 0" }}>
          <strong>Toys Status:</strong>{" "}
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            Father does not track toys status
          </span>
        </p>
        <p
          style={{
            margin: "10px 0",
            padding: "10px",
            backgroundColor: "#d4e9ff",
            borderRadius: "5px",
            fontSize: "14px",
          }}
        >
          ✅ <strong>No Props Needed!</strong> Father reads from Redux store
          directly - no props from Mother!
        </p>
      </div>

      <div style={{ marginTop: "15px", fontSize: "40px", textAlign: "center" }}>
        👨
      </div>
    </div>
  );
};

// Mother Component - Uses Redux Toolkit
export const Mother = () => {
  const { message, areToysArranged, currentStep } = useSelector(
    (state) => state.toy
  );

  const dispatch = useDispatch();

  const handlePassMessage = () => {
    dispatch(setCurrentStep(3));
  };

  const isActive = currentStep === 0;

  return (
    <div
      style={{
        border: "3px solid #ff69b4",
        borderRadius: "12px",
        padding: "20px",
        backgroundColor: isActive ? "#fff0f5" : "#fff",
        transition: "all 0.3s ease",
        boxShadow: isActive ? "0 0 20px rgba(255, 105, 180, 0.5)" : "none",
      }}
    >
      <h3 style={{ margin: "0 0 15px 0", color: "#ff69b4" }}>👩 Mother</h3>
      <div style={{ marginBottom: "15px" }}>
        <p style={{ margin: "5px 0" }}>
          <strong>Message:</strong> {message}
        </p>
        <p style={{ margin: "5px 0" }}>
          <strong>Toys Status:</strong>{" "}
          <span
            style={{
              color: areToysArranged ? "green" : "red",
              fontWeight: "bold",
            }}
          >
            {areToysArranged ? "✓ Arranged" : "✗ Not Arranged"}
          </span>
        </p>
        <p
          style={{
            margin: "10px 0",
            padding: "10px",
            backgroundColor: "#ffd4e5",
            borderRadius: "5px",
            fontSize: "14px",
          }}
        >
          🚀 <strong>Redux Toolkit!</strong> Same power, way simpler code!
        </p>
      </div>
      <Button variant="primary" onClick={handlePassMessage}>
        Pass Message to Father
      </Button>
      <div style={{ marginTop: "15px", fontSize: "40px", textAlign: "center" }}>
        👩
      </div>
    </div>
  );
};
