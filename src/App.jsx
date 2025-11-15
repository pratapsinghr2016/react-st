import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Module00 from "./pages/Module00";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Module00 />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
