import Footer from "./footer";
import Header from "./header";
import { Outlet as RouterDomOutlet } from "react-router-dom";
import MessageBar from "./messageBar";

const Outlet = () => {
    return (
        <>
            <MessageBar />
            <Header />
            <RouterDomOutlet />
            <Footer />
        </>
    );
};

export default Outlet;
