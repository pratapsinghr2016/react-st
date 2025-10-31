const ReduxDoc = () => (
  <div
    style={{
      marginTop: "30px",
      padding: "20px",
      backgroundColor: "#ffe6f0",
      borderRadius: "8px",
      border: "2px solid #e91e63",
    }}
  >
    <h3 style={{ margin: "0 0 10px 0" }}>
      🎯 Redux: Predictable State Container!
    </h3>
    <p style={{ margin: "5px 0" }}>
      Redux provides a <strong>centralized store</strong> for your entire
      application state. Key concepts demonstrated here:
    </p>
    <ul style={{ margin: "10px 0", paddingLeft: "20px" }}>
      <li>
        <strong>Store</strong>: Single source of truth holding the global state
      </li>
      <li>
        <strong>Actions</strong>: Plain objects describing "what happened"
        (SET_MESSAGE, SET_TOYS_ARRANGED)
      </li>
      <li>
        <strong>Reducer</strong>: Pure function that takes current state +
        action and returns new state
      </li>
      <li>
        <strong>useSelector</strong>: Hook to read data from Redux store
      </li>
      <li>
        <strong>useDispatch</strong>: Hook to send actions to Redux store
      </li>
      <li>
        <strong>Provider</strong>: Makes Redux store available to all components
      </li>
    </ul>

    <div
      style={{
        marginTop: "15px",
        padding: "15px",
        backgroundColor: "#fff",
        borderRadius: "5px",
        border: "1px solid #e91e63",
      }}
    >
      <h4 style={{ margin: "0 0 10px 0", color: "#e91e63" }}>
        🔄 Redux Data Flow:
      </h4>
      <pre
        style={{
          backgroundColor: "#f8f9fa",
          padding: "10px",
          borderRadius: "5px",
          overflow: "auto",
          fontSize: "13px",
        }}
      >
        {`1. John clicks "Arrange Toys" button
2. Component calls: dispatch(setToysArranged(true))
3. Action sent to Redux Store
4. Reducer processes action, updates state
5. Store notifies all subscribed components
6. Mother, Father, Sister re-render with new state
7. All components show updated toys status!

Flow: Component → Action → Reducer → Store → All Components`}
      </pre>
    </div>

    <div
      style={{
        marginTop: "15px",
        padding: "15px",
        backgroundColor: "#fff3cd",
        borderRadius: "5px",
        border: "1px solid #ffc107",
      }}
    >
      <h4 style={{ margin: "0 0 10px 0", color: "#856404" }}>
        💡 Redux vs Context API:
      </h4>
      <ul style={{ margin: "5px 0", paddingLeft: "20px", color: "#856404" }}>
        <li>
          <strong>Redux</strong>: Middleware support, time-travel debugging,
          better DevTools
        </li>
        <li>
          <strong>Context</strong>: Simpler setup, built into React, no extra
          dependencies
        </li>
        <li>
          <strong>Redux</strong>: Best for complex apps with lots of state
          updates
        </li>
        <li>
          <strong>Context</strong>: Best for simpler apps or themed data
        </li>
      </ul>
    </div>
  </div>
);

export default ReduxDoc;
