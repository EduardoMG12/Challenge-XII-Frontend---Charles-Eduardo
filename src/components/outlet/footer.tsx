import Instagram from "../../iconsSvg/ instagram";
import Facebook from "../../iconsSvg/facebook";
import { LogoIcon } from "../../iconsSvg/logoIcon";
import Twitter from "../../iconsSvg/twitter";

const Footer = () => {
    return (
        <footer id="footer" className="h-60 max-w-full  px-20 py-10 flex items-center sm:items-start gap-20 flex-col sm:flex-row mb-10">
            <div className="flex flex-col justify-center sm:justify-start items-center sm:items-start gap-4">
                <a href="/">
                    <LogoIcon />
                </a>
                <p className="text-[#B3B3B3]">
                    MyRide Inc., 2nd Floor, New York, NY 10016
                </p>
                <div className="flex gap-6">
                    <a
                        href="https://www.facebook.com/compass.uol/"
                        target="_blank"
                    >
                        <Facebook />
                    </a>
                    <a
                        href="https://www.instagram.com/compass.uol/"
                        target="_blank"
                    >
                        <Instagram />
                    </a>
                    <a href="https://twitter.com/compassuol" target="_blank">
                        <Twitter />
                    </a>
                </div>
            </div>
            <div className="flex text-white gap-20 flex-col sm:flex-row sm:gap-5">
                <div className="flex flex-col sm:w-44 gap-3">
                    <p className="text-xl gap-5">Company</p>

                    <ul className="flex flex-col gap-3">
                        <li className="text-base cursor-pointer">
                            <a href="/somePagebalbalbalkTest">About Us</a>
                        </li>
                        <li className="text-base cursor-pointer">
                            <a href="/somePagebalbalbalkTest">News</a>
                        </li>
                        <li className="text-base cursor-pointer">
                            <a href="/somePagebalbalbalkTest">Careers</a>
                        </li>
                        <li className="text-base cursor-pointer">
                            <a href="/testOtherPage12345">How we work</a>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col sm:w-44 gap-3">
                    <p className="text-xl gap-5">Support</p>

                    <ul className="flex flex-col sm:w-44 gap-3">
                        <li className="text-base cursor-pointer">
                            <a href="/testTesttestTestTest">FAQ</a>
                        </li>
                        <li className="text-base cursor-pointer">
                            <a href="/testTesttestTestTest">US Office</a>
                        </li>
                        <li className="text-base cursor-pointer">
                            <a href="/testTesttestTestTest">Asia Office</a>
                        </li>
                        <li className="text-base cursor-pointer">
                            <a href="/testTesttestTestTest"></a>
                            Help Center
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <p className="text-xl gap-5">More</p>

                    <ul className="flex flex-col gap-3">
                        <li className="text-base cursor-pointer">
                            <a href="testAgainTestAgainTestTest">
                                Become a partner
                            </a>
                        </li>
                        <li className="text-base cursor-pointer">
                            <a href="testAgainTestAgainTestTest">
                                Partner Support
                            </a>
                        </li>
                        <li className="text-base cursor-pointer">
                            <a href="testAgainTestAgainTestTest">
                                Mobile app links
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
