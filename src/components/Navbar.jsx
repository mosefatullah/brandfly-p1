import Marquee from "react-fast-marquee";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <header
                id="header"
                className="w-full bg-primary text-white text-[14px] tracking-widest font-medium uppercase py-1.5 whitespace-nowrap"
            >
                <Marquee>
                    {[
                        "Free First Video",
                        "7 Days Free Trial",
                        "100% Money-Back Guarantee",
                        "Free First Video",
                        "7 Days Free Trial",
                        "100% Money-Back Guarantee",
                    ].map((item, index) => (
                        <div key={index} className="flex items-center gap-4 mx-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                                width={13}
                                height={13}
                                className="fill-secondary"
                            >
                                <path d="M192 32c17.7 0 32 14.3 32 32l0 135.5 111.5-66.9c15.2-9.1 34.8-4.2 43.9 11s4.2 34.8-11 43.9L254.2 256l114.3 68.6c15.2 9.1 20.1 28.7 11 43.9s-28.7 20.1-43.9 11L224 312.5 224 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-135.5L48.5 379.4c-15.2 9.1-34.8 4.2-43.9-11s-4.2-34.8 11-43.9L129.8 256 15.5 187.4c-15.2-9.1-20.1-28.7-11-43.9s28.7-20.1 43.9-11L160 199.5 160 64c0-17.7 14.3-32 32-32z" />
                            </svg>{" "}
                            {item}
                        </div>
                    ))}
                </Marquee>
            </header>
            <nav id="navbar" className="w-full">
                <div className="w-full xl:max-w-7xl flex justify-between items-center mx-auto p-8 lg:py-12">
                    <div id="navbar-logo">
                        <Link to="/"><img
                            src="/images/logo.png"
                            alt="Hypecut Logo"
                            className="w-auto h-[20px] md:h-[37px]"
                        /></Link>
                    </div>

                    <div id="navbar-menu">
                        <ul className="items-center text-sm font-medium uppercase tracking-widest border-[2.5px] border-black whitespace-nowrap hidden lg:flex cursor-pointer gap-[1px]">
                            {[{ title: "Home", link: "/" }, { title: "Pricing", link: "/pricing" }, { title: "About Us", link: "/about-us" }].map((item, index) => (
                                <NavLink
                                    to={item.link}
                                    key={index}
                                    className={({ isActive }) => "transition-all duration-300 select-none" + (isActive ? " bg-primary text-white" : " active:scale-100 hover:bg-primary hover:text-white group")}
                                >
                                    <p className="py-1.5 px-5 group-hover:scale-105">{item.title}</p>
                                </NavLink>
                            ))}
                        </ul>
                    </div>

                    <div id="navbar-action">
                        <button className="bg-primary text-white text-[14px] font-medium uppercase tracking-widest py-1 px-2 md:py-1.5 md:px-4 border-[2px] border-black hover:bg-primary/70 transition-all select-none hover:scale-105 active:scale-100">
                            Book a Demo
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}
