import { BellIcon } from "../../iconsSvg/bellIcon";
import { LogoIcon } from "../../iconsSvg/logoIcon";

const Header = () => {
    return (
        <header className=" min-h-10 min-w-full max-w-full my-5 mb-5">
            <div className="px-5 w-full flex flex-col sm:flex-row justify-between items-center gap-5 md:gap-0">
                <div className="">
                    <a href="/">
                        <LogoIcon />
                    </a>
                </div>
                <ul className="flex flex-col sm:flex-row items-center justify-around gap-7">
                    <li className="text-[#FBA403] cursor-pointer text-base">
                        <a href="/">Home</a>
                    </li>
                    <li className="text-white cursor-pointer text-base">
                        <a href="#gettingATaxi">Getting a Taxi</a>
                    </li>
                    <li className="text-white cursor-pointer text-base">
                        <a href="#mobileApp">Mobile App</a>
                    </li>
                    <li className="text-white cursor-pointer text-base">
                        <a href="#footer">Contact Us</a>
                    </li>
                </ul>
                <div className="flex items-center gap-5">
                    <BellIcon />
                    <div className="w-[0.01rem] h-9 bg-[#333333]"></div>
                    <img
                        src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Avatar image with borders full rounded."
                        className="cursor-pointer rounded-full w-8 h-8"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
