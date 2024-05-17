import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import OutletComponent from "./components/outlet";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Loading from "./pages/loading";
const Home = lazy(() => import("./pages/home"));
const NotFound = lazy(() => import("./pages/notFound"));

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<OutletComponent />}>
                        <Route
                            index
                            element={
                                <Suspense fallback={<Loading />}>
                                    <Home />
                                </Suspense>
                            }
                        />
                        <Route
                            path="*"
                            element={
                                <Suspense fallback={<Loading />}>
                                    <NotFound />
                                </Suspense>
                            }
                        />
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
