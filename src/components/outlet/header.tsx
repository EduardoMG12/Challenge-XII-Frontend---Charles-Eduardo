import LogoMyRide from "../icons/logoHeaderMyRide";
import Notify from "../icons/notify";

const Header = () => {
    return (
        <header className=" min-h-10 min-w-full max-w-full my-5 mb-5">
            <div className="px-5 w-full flex flex-col sm:flex-row justify-between items-center gap-5 md:gap-0">
                <div className="">
                    <a href="/">
                        <LogoMyRide style={{ cursor: "pointer" }} />
                    </a>
                </div>
                <ul className="flex flex-col sm:flex-row items-center justify-around gap-7">
                    {/* make a question about li, is this yellow because hover or because this page selected */}
                    <li className="text-[#FBA403] cursor-pointer text-base">
                        <a href="/">Home</a>
                    </li>
                    <li className="text-white cursor-pointer text-base">
                        <a href="/">Getting a Taxi</a>
                    </li>
                    <li className="text-white cursor-pointer text-base">
                        <a href="/">Mobile App</a>
                    </li>
                    <li className="text-white cursor-pointer text-base">
                        <a href="/">Contact Us</a>
                    </li>
                </ul>
                <div className="flex items-center gap-5">
                    <Notify style={{ cursor: "pointer" }} />
                    <div className="w-[0.01rem] h-9 bg-[#333333]"></div>
                    <div className="w-9 h-9 rounded-full bg-[#FBA403] cursor-pointer">
                        <p className="text-xs text-cyan-800 text-center">
                            API image
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
