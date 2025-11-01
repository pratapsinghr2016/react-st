const RTKDoc = () => (
  <div
    style={{
      marginTop: "30px",
      padding: "20px",
      backgroundColor: "#e6f7ff",
      borderRadius: "8px",
      border: "2px solid #1890ff",
    }}
  >
    <h3 style={{ margin: "0 0 10px 0" }}>🚀 Why Redux Toolkit?</h3>

    <div
      style={{
        marginTop: "15px",
        padding: "15px",
        backgroundColor: "#fff",
        borderRadius: "5px",
        border: "1px solid #1890ff",
      }}
    >
      <h4 style={{ margin: "0 0 10px 0", color: "#1890ff" }}>
        📊 Code Comparison:
      </h4>
      <table style={{ width: "100%", fontSize: "13px" }}>
        <thead>
          <tr style={{ backgroundColor: "#f0f0f0" }}>
            <th style={{ padding: "8px", textAlign: "left" }}>Aspect</th>
            <th style={{ padding: "8px", textAlign: "left" }}>Classic Redux</th>
            <th style={{ padding: "8px", textAlign: "left" }}>Redux Toolkit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "8px", borderTop: "1px solid #e0e0e0" }}>
              <strong>Action Types</strong>
            </td>
            <td style={{ padding: "8px", borderTop: "1px solid #e0e0e0" }}>
              Manual constants
            </td>
            <td style={{ padding: "8px", borderTop: "1px solid #e0e0e0" }}>
              ✅ Auto-generated
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderTop: "1px solid #e0e0e0" }}>
              <strong>Action Creators</strong>
            </td>
            <td style={{ padding: "8px", borderTop: "1px solid #e0e0e0" }}>
              Manual functions
            </td>
            <td style={{ padding: "8px", borderTop: "1px solid #e0e0e0" }}>
              ✅ Auto-generated
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderTop: "1px solid #e0e0e0" }}>
              <strong>Immutability</strong>
            </td>
            <td style={{ padding: "8px", borderTop: "1px solid #e0e0e0" }}>
              Manual spreads
            </td>
            <td style={{ padding: "8px", borderTop: "1px solid #e0e0e0" }}>
              ✅ Immer (write mutable code)
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderTop: "1px solid #e0e0e0" }}>
              <strong>DevTools</strong>
            </td>
            <td style={{ padding: "8px", borderTop: "1px solid #e0e0e0" }}>
              Manual setup
            </td>
            <td style={{ padding: "8px", borderTop: "1px solid #e0e0e0" }}>
              ✅ Included by default
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px", borderTop: "1px solid #e0e0e0" }}>
              <strong>Boilerplate</strong>
            </td>
            <td style={{ padding: "8px", borderTop: "1px solid #e0e0e0" }}>
              ~100 lines
            </td>
            <td style={{ padding: "8px", borderTop: "1px solid #e0e0e0" }}>
              ✅ ~30 lines
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      style={{
        marginTop: "15px",
        padding: "15px",
        backgroundColor: "#fff",
        borderRadius: "5px",
        border: "1px solid #52c41a",
      }}
    >
      <h4 style={{ margin: "0 0 10px 0", color: "#52c41a" }}>
        🎯 RTK = Best Practices Built-in:
      </h4>
      <ul style={{ margin: "5px 0", paddingLeft: "20px" }}>
        <li>✅ Immer for immutable updates</li>
        <li>✅ Redux Thunk for async logic</li>
        <li>✅ Redux DevTools extension</li>
        <li>✅ Serializable state check</li>
        <li>✅ Excellent TypeScript support</li>
        <li>✅ Better error messages</li>
      </ul>
    </div>
  </div>
);

export default RTKDoc;
