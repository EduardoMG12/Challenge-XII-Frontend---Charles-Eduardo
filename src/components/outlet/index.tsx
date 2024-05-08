import Footer from "./footer";
import Header from "./header";
import { Outlet as RouterDomOutlet } from "react-router-dom";

const Outlet = () => {
    return (
        <>
            <Header />
                <RouterDomOutlet />
            <Footer />
        </>
    );
};

export default Outlet;