import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer
                className="w-full bg-black text-white py-14 overflow-hidden"
            >
                <div>
                    <div className="px-4 md:px-0">
                        <h1 className="text-2xl md:text-4xl text-center max-w-lg mx-auto font-semibold uppercase">
                            Have a <span className="text-secondary">project</span> in mind? Let
                            us work <span className="text-secondary">together</span>
                        </h1>
                        <div className="flex justify-center gap-8 mt-7 whitespace-nowrap">
                            <Link to="/pricing"><button className="bg-transparent border-[2.5px] border-white text-[16px] font-bold tracking-widest py-2 px-4 select-none hover:scale-105 active:scale-100">
                                See The Plans
                            </button></Link>
                            <button className="bg-primary text-white text-[16px] font-bold tracking-widest py-2 px-4 select-none hover:scale-105 active:scale-100">
                                Book a call
                            </button>
                        </div>

                        <div className="max-w-7xl mx-auto">
                            <hr className="border border-white my-12" />

                            <div className="w-full flex flex-col md:flex-row md:justify-between sm:px-4">
                                <div className="flex gap-4 lg:gap-6">
                                    {[{
                                        icon: "li.svg",
                                        link: "https://www.linkedin.com/company/hypecutoffcials/",
                                    }, {
                                        icon: "tw.svg",
                                        link: "#",
                                    }, {
                                        icon: "ins.svg",
                                        link: "https://www.instagram.com/hypecutofficials",
                                    }, {
                                        icon: "fab.svg",
                                        link: "https://www.facebook.com/profile.php?id=61560280655084",
                                    }, {
                                        icon: "yot.svg",
                                        link: "#",
                                    }]
                                        .map((item, index) => (
                                            <a
                                                key={index}
                                                href={item.link}
                                            >
                                                <img
                                                    src={`/images/${item.icon}`}
                                                    alt="Icon"
                                                    className="w-auto h-[20px] mb-4"
                                                />
                                            </a>
                                        ))}
                                </div>
                                <div className="my-4 sm:my-0 w-fit flex flex-col sm:flex-row gap-2 sm:gap-4 lg:gap-8 whitespace-nowrap">
                                    {[{
                                        link: "#",
                                        title: "General Info",
                                    }, {
                                        link: "#",
                                        title: "Privacy Policy",
                                    }, {
                                        link: "#",
                                        title: "Terms of Use",
                                    }]
                                        .map((item, index) => (
                                            <a
                                                key={index}
                                                href={item.link}
                                            >
                                                {item.title}
                                            </a>
                                        ))}
                                </div>
                            </div>

                            <p className="font-medium text-center my-4">
                                &copy; {new Date().getFullYear() || "2024"} by Hypecut. All rights
                                reserved.
                            </p>
                        </div>
                    </div>

                    <div
                        className="pt-8"
                    >
                        <Marquee className="whitespace-nowrap overflow-hidden">{[1, 2, 3, 4, 5, 6].map((item, index) => (
                            <div className="mx-4"
                                key={index}>
                                <h1
                                    className={
                                        index % 2 == 0
                                            ? "text-4xl md:text-6xl font-bold uppercase"
                                            : "text-4xl md:text-6xl font-bold uppercase text-stroke-yellow"
                                    }
                                >
                                    Hypecut
                                </h1></div>
                        ))}</Marquee>
                    </div>
                </div>
            </footer>
        </>
    )
}
