import { Provider, useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import { Father, John, Mother, Sister } from "../components/Module5Family";
import {
  PageContainer,
  PageContent,
  PageTitle,
} from "../components/PageContent";
import RTKDoc from "../components/RTKDoc";
import { resetState, store } from "../slices/toySlice";

// Main Component Content
const Module5Content = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.toy.currentStep);

  const handleReset = () => {
    dispatch(resetState());
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
        <PageTitle>Redux Toolkit - Modern Redux! 🚀</PageTitle>
      </div>
      <h2>
        95% less boilerplate, same power! Official recommended way to use Redux.
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
        <h3 style={{ margin: "0 0 10px 0" }}>
          🎯 Redux Toolkit (RTK) Benefits:
        </h3>
        <div
          style={{
            padding: "10px",
            backgroundColor: "#e6f7ff",
            borderRadius: "5px",
            marginBottom: "10px",
            border: "2px solid #1890ff",
          }}
        >
          <strong>✨ createSlice</strong> - Actions & reducers in one place
          <br />
          <strong>🔧 configureStore</strong> - DevTools & middleware included
          <br />
          <strong>✍️ Immer</strong> - Write "mutating" code safely
          <br />
          <strong>📦 Less boilerplate</strong> - ~70% less code!
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
          ⭐ Redux Toolkit is the <strong>official recommended</strong> way to
          write Redux logic!
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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          <Mother />
          <Father />
          <Sister />
          <John />
        </div>

        <RTKDoc />
      </PageContent>
    </PageContainer>
  );
};

// Export wrapped component with Redux Provider
const Module5ReduxRTK = () => {
  return (
    <Provider store={store}>
      <Module5Content />
    </Provider>
  );
};

export default Module5ReduxRTK;
