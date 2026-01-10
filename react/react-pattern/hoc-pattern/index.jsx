// ! One-liner explanation: "Counter manages the state, 
// ! but the parent decides how to display it."

function withLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log(`[${WrappedComponent.name}] rendered with props:`, props);
    
    return <WrappedComponent {...props} />;
  };
}

// Original component
function Button({ label }) {
  return <button>{label}</button>;
}

// Enhanced component
const ButtonWithLogger = withLogger(Button);

// Usage
function App() {
  return <ButtonWithLogger label="Click me" />;
  // Console: [Button] rendered with props: { label: "Click me" }
}