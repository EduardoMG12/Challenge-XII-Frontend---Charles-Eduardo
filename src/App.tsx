import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import "./index.css";
import OutletComponent from "./components/outlet";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OutletComponent />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;