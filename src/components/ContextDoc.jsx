const ContextDoc = () => (
  <div
    style={{
      marginTop: "30px",
      padding: "20px",
      backgroundColor: "#e6f9e6",
      borderRadius: "8px",
      border: "2px solid #28a745",
    }}
  >
    <h3 style={{ margin: "0 0 10px 0" }}>
      ✅ Context API Power: Independent Components!
    </h3>
    <p style={{ margin: "5px 0" }}>
      Context API's TRUE power is shown when components are{" "}
      <strong>independent siblings</strong>, not nested inside each other. This
      demo shows:
    </p>
    <ul style={{ margin: "10px 0", paddingLeft: "20px" }}>
      <li>
        <strong>Module3</strong> wraps all components in{" "}
        <code>&lt;ToyContext.Provider&gt;</code>
      </li>
      <li>
        <strong>Mother, Father, Sister, and John</strong> are all{" "}
        <strong>independent siblings</strong>
      </li>
      <li>
        <strong>ALL components</strong> access the same Context data using{" "}
        <code>useContext(ToyContext)</code>
      </li>
      <li>
        <strong>John</strong> can directly modify data that{" "}
        <strong>Mother</strong> displays - no props between them!
      </li>
      <li>
        <strong>Father and Sister</strong> can read Context data, but don't need
        to pass it as props
      </li>
    </ul>

    <div
      style={{
        marginTop: "15px",
        padding: "15px",
        backgroundColor: "#fff",
        borderRadius: "5px",
        border: "1px solid #28a745",
      }}
    >
      <h4 style={{ margin: "0 0 10px 0", color: "#28a745" }}>
        🏗️ Architecture Comparison:
      </h4>

      <div style={{ marginBottom: "15px" }}>
        <strong style={{ color: "#d9534f" }}>
          ❌ With Prop Drilling (Nested):
        </strong>
        <pre
          style={{
            backgroundColor: "#ffebee",
            padding: "10px",
            borderRadius: "5px",
            overflow: "auto",
            fontSize: "13px",
            border: "1px solid #d9534f",
          }}
        >
          {`Module3
  └─ Mother (gets all props)
      └─ Father (receives all props, passes down)
          └─ Sister (receives all props, passes down)
              └─ John (finally uses the props!)

Problem: Father & Sister are middlemen!`}
        </pre>
      </div>

      <div>
        <strong style={{ color: "#28a745" }}>
          ✅ With Context API (Independent Siblings):
        </strong>
        <pre
          style={{
            backgroundColor: "#e6f9e6",
            padding: "10px",
            borderRadius: "5px",
            overflow: "auto",
            fontSize: "13px",
            border: "1px solid #28a745",
          }}
        >
          {`Module3 (Context Provider)
  ├─ Mother   (reads from Context)
  ├─ Father   (reads from Context) 
  ├─ Sister   (reads from Context)
  └─ John     (reads & modifies Context)

✨ All components are siblings!
✨ Any component can access Context!
✨ No props passed between them!`}
        </pre>
      </div>
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
        💡 Key Takeaway:
      </h4>
      <p style={{ margin: "5px 0", color: "#856404" }}>
        Context API eliminates prop drilling by allowing{" "}
        <strong>any component</strong> in the tree to access shared data,
        regardless of where they are in the component hierarchy. Components
        don't need to be nested or pass props to communicate!
      </p>
    </div>
  </div>
);
export default ContextDoc;
