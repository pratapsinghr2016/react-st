import Button from "./Button";

// John Component - The deepest child who actually uses the handlers
const John = ({
  message,
  areToysArranged,
  setCurrentMessage,
  setAreToysArranged,
  currentStep,
}) => {
  const handleArrangeToys = () => {
    setAreToysArranged(true);
    setCurrentMessage("Toys are now arranged! 🎉");
  };

  const handleResetToys = () => {
    setAreToysArranged(false);
    setCurrentMessage("John arrange your toys");
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
        marginTop: "20px",
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

// Sister Component - Receives props and passes them to John (PROP DRILLING!)
const Sister = ({
  message,
  areToysArranged,
  setCurrentMessage, // 🔴 Sister doesn't use this, but must pass it!
  setAreToysArranged, // 🔴 Sister doesn't use this, but must pass it!
  onPassMessage,
  currentStep,
}) => {
  const isActive = currentStep === 2;
  const canPass = currentStep >= 2;

  return (
    <div
      style={{
        border: "3px solid #9370db",
        borderRadius: "12px",
        padding: "20px",
        backgroundColor: isActive ? "#f0e6ff" : "#f5f5f5",
        transition: "all 0.3s ease",
        boxShadow: isActive ? "0 0 20px rgba(147, 112, 219, 0.5)" : "none",
        opacity: canPass ? 1 : 0.6,
        marginTop: "20px",
      }}
    >
      <h3 style={{ margin: "0 0 15px 0", color: "#9370db" }}>👧 Sister</h3>
      {canPass && (
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
        </div>
      )}
      <Button
        variant="primary"
        onClick={onPassMessage}
        disabled={!canPass}
        style={{ opacity: canPass ? 1 : 0.5 }}
      >
        Pass Message to John
      </Button>
      <div style={{ marginTop: "15px", fontSize: "40px", textAlign: "center" }}>
        👧
      </div>

      {/* 🔴 PROP DRILLING: Sister must render John and pass props she doesn't use! */}
      <John
        message={message}
        areToysArranged={areToysArranged}
        setCurrentMessage={setCurrentMessage}
        setAreToysArranged={setAreToysArranged}
        currentStep={currentStep}
      />
    </div>
  );
};

// Father Component - Receives props and passes them to Sister (PROP DRILLING!)
const Father = ({
  message,
  areToysArranged,
  setCurrentMessage, // 🔴 Father doesn't use this, but must pass it!
  setAreToysArranged, // 🔴 Father doesn't use this, but must pass it!
  onPassMessage,
  onSisterPass,
  currentStep,
}) => {
  const isActive = currentStep === 1;
  const canPass = currentStep >= 1;

  return (
    <div
      style={{
        border: "3px solid #4169e1",
        borderRadius: "12px",
        padding: "20px",
        backgroundColor: isActive ? "#e6f2ff" : "#f5f5f5",
        transition: "all 0.3s ease",
        boxShadow: isActive ? "0 0 20px rgba(65, 105, 225, 0.5)" : "none",
        opacity: canPass ? 1 : 0.6,
        marginTop: "20px",
      }}
    >
      <h3 style={{ margin: "0 0 15px 0", color: "#4169e1" }}>👨 Father</h3>
      {canPass && (
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
        </div>
      )}
      <Button
        variant="primary"
        onClick={onPassMessage}
        disabled={!canPass}
        style={{ opacity: canPass ? 1 : 0.5 }}
      >
        Pass Message to Sister
      </Button>
      <div style={{ marginTop: "15px", fontSize: "40px", textAlign: "center" }}>
        👨
      </div>

      {/* 🔴 PROP DRILLING: Father must render Sister and pass props he doesn't use! */}
      <Sister
        message={message}
        areToysArranged={areToysArranged}
        setCurrentMessage={setCurrentMessage}
        setAreToysArranged={setAreToysArranged}
        onPassMessage={onSisterPass}
        currentStep={currentStep}
      />
    </div>
  );
};

// Mother Component - Starts the prop chain
const Mother = ({
  message,
  areToysArranged,
  setCurrentMessage,
  setAreToysArranged,
  onPassMessage,
  onFatherPass,
  onSisterPass,
  currentStep,
}) => {
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
      </div>
      <Button variant="primary" onClick={onPassMessage}>
        Pass Message to Father
      </Button>
      <div style={{ marginTop: "15px", fontSize: "40px", textAlign: "center" }}>
        👩
      </div>

      {/* 🔴 PROP DRILLING STARTS HERE: Mother renders Father with all props */}
      <Father
        message={message}
        areToysArranged={areToysArranged}
        setCurrentMessage={setCurrentMessage}
        setAreToysArranged={setAreToysArranged}
        onPassMessage={onFatherPass}
        onSisterPass={onSisterPass}
        currentStep={currentStep}
      />
    </div>
  );
};

export default Mother;
