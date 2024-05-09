import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import "./index.css";
import OutletComponent from "./components/outlet";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<OutletComponent />}>
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
