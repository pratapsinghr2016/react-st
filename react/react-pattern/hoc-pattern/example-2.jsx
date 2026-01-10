import { Navigate } from "react-router-dom";

// HOC — protects routes, redirects if not logged in
function withAuth(WrappedComponent) {
  return function ProtectedComponent(props) {
    const isLoggedIn = localStorage.getItem("token");

    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }

    return <WrappedComponent {...props} />;
  };
}

// Original components
function Dashboard() {
  return <h1>Welcome to Dashboard</h1>;
}

function Settings() {
  return <h1>Settings Page</h1>;
}

// Enhanced — now protected
const ProtectedDashboard = withAuth(Dashboard);
const ProtectedSettings = withAuth(Settings);

// Usage
function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<ProtectedDashboard />} />
      <Route path="/settings" element={<ProtectedSettings />} />
    </Routes>
  );
}