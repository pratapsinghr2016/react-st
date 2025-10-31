import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Module00 from "./pages/Module00";
import Module01 from "./pages/Module01";
import Module1 from "./pages/Module1";
import Module2 from "./pages/Module2";
import Module3 from "./pages/Module3";
import Module4 from "./pages/Module4";
import Module5 from "./pages/Module5";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Module00 />} />
          <Route path="/module01" element={<Module01 />} />
          <Route path="/module1" element={<Module1 />} />
          <Route path="/module2" element={<Module2 />} />
          <Route path="/module3" element={<Module3 />} />
          <Route path="/module4" element={<Module4 />} />
          <Route path="/module5" element={<Module5 />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
