const Footer = () => {
    return (
        <footer className="h-60 max-w-full  px-20 py-10 flex items-center sm:items-start gap-20 flex-col sm:flex-row mb-10">
            <div className="flex flex-col justify-center sm:justify-start items-center sm:items-start gap-4">
                <a href="/">
                    <img
                        src="https://challengeuolpbcompass.s3.amazonaws.com/Outlet/logoIcon/LogoMyRideFillWhite.svg"
                        alt="Logo in the shape of an isosceles triangle with slightly rounded edges, entirely in white. The logo is inscribed within a circle. The word ‘my’ is written in the upper part of the circle, and below ‘my’, within the isosceles triangle that lacks a background, the word ‘ride’ is written."
                    />
                </a>
                <p className="text-[#B3B3B3]">
                    MyRide Inc., 2nd Floor, New York, NY 10016
                </p>
                <div className="flex gap-6">
                    <a
                        href="https://www.facebook.com/compass.uol/"
                        target="_blank"
                    >
                        <img
                            src="https://challengeuolpbcompass.s3.amazonaws.com/Outlet/socialIcons/Facebook.svg"
                            alt="facebook icon with background full rounded white"
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/compass.uol/"
                        target="_blank"
                    >
                        <img
                            src="https://challengeuolpbcompass.s3.amazonaws.com/Outlet/socialIcons/Instagram.svg"
                            alt="instagram icon with background full rounded white"
                        />
                    </a>
                    <a href="https://twitter.com/compassuol" target="_blank">
                        <img
                            src="https://challengeuolpbcompass.s3.amazonaws.com/Outlet/socialIcons/Twitter.svg"
                            alt="twitter icon with background full rounded white"
                        />
                    </a>
                </div>
            </div>
            <div className="flex text-white gap-20 flex-col sm:flex-row sm:gap-5">
                <div className="flex flex-col sm:w-44 gap-3">
                    <p className="text-xl gap-5">Company</p>

                    <ul className="flex flex-col gap-3">
                        <li className="text-base cursor-pointer">About Us</li>
                        <li className="text-base cursor-pointer">News</li>
                        <li className="text-base cursor-pointer">Careers</li>
                        <li className="text-base cursor-pointer">
                            How we work
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col sm:w-44 gap-3">
                    <p className="text-xl gap-5">Support</p>

                    <ul className="flex flex-col sm:w-44 gap-3">
                        <li className="text-base cursor-pointer">FAQ</li>
                        <li className="text-base cursor-pointer">US Office</li>
                        <li className="text-base cursor-pointer">
                            Asia Office
                        </li>
                        <li className="text-base cursor-pointer">
                            Help Center
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <p className="text-xl gap-5">More</p>

                    <ul className="flex flex-col gap-3">
                        <li className="text-base cursor-pointer">
                            Become a partner
                        </li>
                        <li className="text-base cursor-pointer">
                            Partner Support
                        </li>
                        <li className="text-base cursor-pointer">
                            Mobile app links
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
