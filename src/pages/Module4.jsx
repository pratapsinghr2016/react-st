import { Provider, useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import { Father, John, Mother, Sister } from "../components/Module4Family";
import {
  PageContainer,
  PageContent,
  PageTitle,
} from "../components/PageContent";
import ReduxDoc from "../components/ReduxDoc";
import { resetState } from "../redux/actions/toyActions";
import { store } from "../redux/store/store";

// Main Component Content (wrapped by Provider in Module4 below)
const Module4Content = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.toyStore.currentStep);

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
        <PageTitle>Redux Solution - Centralized State Management!</PageTitle>
      </div>
      <h2>
        All components connect to Redux store - no props, no Context needed!
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
        <h3 style={{ margin: "0 0 10px 0" }}>🎯 Redux Architecture:</h3>
        <div
          style={{
            padding: "10px",
            backgroundColor: "#ffe6f0",
            borderRadius: "5px",
            marginBottom: "10px",
            border: "2px solid #e91e63",
          }}
        >
          <strong>Redux Store (Global State)</strong>
          <div style={{ marginLeft: "20px", marginTop: "5px" }}>
            ↓ Components connect via useSelector & useDispatch ↓
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
          ⭐ Each component uses <code>useSelector</code> to read state and{" "}
          <code>useDispatch</code> to send actions!
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
          {/* ✅ All components are INDEPENDENT - connected only through Redux! */}
          <Mother />
          <Father />
          <Sister />
          <John />
        </div>

        <ReduxDoc />
      </PageContent>
    </PageContainer>
  );
};

// Export wrapped component with Redux Provider
const Module4 = () => {
  return (
    <Provider store={store}>
      <Module4Content />
    </Provider>
  );
};

export default Module4;
