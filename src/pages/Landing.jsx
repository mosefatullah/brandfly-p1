import Marquee from "react-fast-marquee";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Counter from './../components/SlotCounter';
import "@splidejs/react-splide/css";

gsap.registerPlugin(ScrollTrigger);

function Landing() {
    const [pricingCheck, setPricingCheck] = useState(false);
    const [pricingRadio, setPricingRadio] = useState("plan-radio-1");
    const [formRadio, setFormRadio] = useState("form-youtube");

    const makeInvrev = (boxes, sign = "-") => {
        if (boxes.length === 0) return;

        const boxWidth = boxes[0].offsetWidth;
        const containerWidth = boxWidth * boxes.length;
        const windowWidth = window.innerWidth;
        const totalDistance = containerWidth - windowWidth;
        const direction = sign === "+" ? 1 : -1;

        gsap.set(boxes, { x: direction === 1 ? -totalDistance : 0 });

        const speed = totalDistance / 20;

        const anim = gsap.to(boxes, {
            x: direction * totalDistance,
            ease: "none",
            duration: speed,
            repeat: -1,
            onUpdate: () => {
                const currentX = gsap.getProperty(boxes[0], 'x');
                if (direction === 1 && currentX >= 0) {
                    gsap.set(boxes, { x: -totalDistance });
                } else if (direction === -1 && currentX <= -totalDistance) {
                    gsap.set(boxes, { x: 0 });
                }
            }
        });

        const handleResize = () => {
            anim.kill();
            const newWindowWidth = window.innerWidth;
            const newTotalDistance = containerWidth - newWindowWidth;
            gsap.set(boxes, { x: direction === 1 ? -newTotalDistance : 0 });
            gsap.to(boxes, {
                x: direction * newTotalDistance,
                ease: "none",
                duration: newTotalDistance / 10,
                repeat: -1,
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            anim.kill();
        };
    };


    useEffect(() => {
        const fadeUpElements = gsap.utils.toArray(".fade-up");
        fadeUpElements.forEach(element => {
            gsap.set(element, { y: 100, opacity: 0 });
        });
        fadeUpElements.forEach((element) => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: "top bottom",
                    toggleActions: "play none none reverse"
                },
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power1.out"
            });
        });

        ScrollTrigger.refresh();
    }, []);

    useEffect(() => {
        makeInvrev(gsap.utils.toArray('.anim-invrev1'), "-");
        makeInvrev(gsap.utils.toArray('.anim-invrev2'), "+");
    }, []);


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
                <div className="w-full xl:max-w-7xl flex justify-between items-center mx-auto p-8">
                    <div id="navbar-logo">
                        <a href="#"><img
                            src="/images/logo.png"
                            alt="Hypecut Logo"
                            className="w-auto h-[20px] md:h-[37px]"
                        /></a>
                    </div>

                    <div id="navbar-menu">
                        <ul className="items-center text-sm font-medium uppercase tracking-widest border-[2.5px] border-black whitespace-nowrap hidden lg:flex cursor-pointer">
                            {["Home", "Pricing", "About Us"].map((item, index) => (
                                <li
                                    key={index}
                                    className="hover:bg-primary hover:text-white transition-all hover:scale-105 active:scale-100 select-none"
                                >
                                    <p className="py-1.5 px-5">{item}</p>
                                </li>
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
            <section id="hero">
                <div className="px-8 w-full pt-8 pb-20 min-h-[85vh] xl:max-w-7xl mx-auto grid lg:grid-cols-2 gap-4 items-center">
                    <div>
                        <h1 className="text-2xl md:text-[42px] leading-tight font-bold uppercase">
                            Transform Your Footages Into Professional-Grade And Catchy Videos
                        </h1>
                        <p className="py-4 text-sm md:text-[24px] font-medium">
                            Quick Turnaround And Exceptional Quality Guaranteed
                        </p>

                        <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-5">
                            <button className="bg-primary text-white text-xs md:text-[18px] font-bold uppercase tracking-widest py-2.5 md:py-2 px-6 hover:bg-primary/70 transition-all select-none hover:scale-105 active:scale-100">
                                See the Pricing
                            </button>
                            <button className="bg-transparent border-[2.5px] border-black text-xs md:text-[18px] font-bold uppercase tracking-widest  py-2 px-6 hover:bg-primary/30 transition-all select-none hover:scale-105 active:scale-100">
                                Watch How It Works
                            </button>
                        </div>
                    </div>
                    <div>
                        <img
                            src="/images/hero-cover.png"
                            alt="Hero Image"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>
            <section className="w-full bg-black -mt-7 rounded-t-2xl">
                <section className="pt-14 pb-8 px-4 md:px-0 ">
                    <Marquee className="whitespace-nowrap overflow-hidden">{[
                        "company1.png",
                        "company2.png",
                        "company3.png",
                        "company4.png",
                        "company5.png",
                        "company6.png",
                        "company7.png"
                    ].map((item, index) => (
                        <div key={index}
                            className="h-[50px] mx-6 md:mx-8 lg:mx-12">
                            <img
                                src={`/images/${item}`}
                                alt="Company Logo"
                                className="h-full"
                            />
                        </div>
                    ))}
                    </Marquee>
                </section>

                <section className="w-full xl:max-w-7xl mx-auto p-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            count: "45",
                            sign: "+",
                            title: "Clients",
                            description:
                                "We served our clients well enough to get these number of clients.",
                        },
                        {
                            count: "160",
                            sign: "+",
                            title: "Projects",
                            description:
                                "We served our clients well enough to get these number of clients.",
                        },
                        {
                            count: "100",
                            sign: "%",
                            title: "Commitment",
                            description:
                                "We served our clients well enough to get these number of clients.",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="transition-all fade-up"
                        >
                            <div className="flex flex-col gap-4 hover:scale-105 text-white bg-white/20 rounded-xl p-8 hover:bg-white/15 transition-all group">
                                <p className="text-5xl font-bold transition-all group-hover:scale-95"><Counter value={item.count} />{item.sign}</p>
                                <p className="text-2xl text-secondary font-medium uppercase mt-6 transition-all group-hover:scale-95">
                                    {item.title}
                                </p>
                                <p className="text-lg font-[300] transition-all group-hover:scale-95">{item.description}</p></div>
                        </div>
                    ))}
                </section>

                <section className="p-8 pb-16">
                    <h1 className="text-3xl uppercase font-bold text-white w-full max-w-xl mx-auto text-center">
                        <span className="text-secondary">Exclusive Benefits</span> You Will
                        Get By Working <span className="text-secondary">With Us</span>
                    </h1>

                    <div className="w-full max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12 mt-12">
                        {[
                            {
                                icon: "icon1.png",
                                title: "Unlimited Editing and Revisions",
                                description:
                                    "No hidden fees. Perfect your content with endless revisions, all within one package",
                            },
                            {
                                icon: "icon2.png",
                                title: "Fast Turnaround Time",
                                description:
                                    "Stay agile with 1-2 day turnaround for your first draft. Professional results, faster.",
                            },
                            {
                                icon: "icon3.png",
                                title: "Strategic Insights",
                                description:
                                    "Blend video expertise with market trends. Craft content that resonates and drives result.",
                            },
                            {
                                icon: "icon4.png",
                                title: "Dedicated Editors",
                                description:
                                    "Your own video professional, ready for real-time chats and aligned with your brand.",
                            },
                            {
                                icon: "icon5.png",
                                title: "Free Resources",
                                description:
                                    "Enhance your videos with stock footage, music, and graphics at no extra cost.",
                            },
                            {
                                icon: "icon6.png",
                                title: "Ready for Social",
                                description:
                                    "Tailored videos for Instagram reels, Tiktok content, Facebook stories, and more. Stand out on every platform.",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-4 text-white h-full"
                            >
                                <img
                                    src={`/images/${item.icon}`}
                                    alt="Icon"
                                    className="w-fit h-[50px] -ml-2"
                                />
                                <p className="text-2xl font-medium leading-7 py-3">
                                    {item.title}
                                </p>
                                <p className="text-lg font-[300]">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
            <section className="py-8">
                <div
                    className="pt-4"
                >
                    <Marquee className="whitespace-nowrap overflow-hidden">{[1, 2, 3, 4, 5, 6].map((item, index) => (
                        <div className="mx-4"
                            key={index}>
                            <h1
                                className={
                                    index % 2 == 0
                                        ? "text-6xl font-bold uppercase"
                                        : "text-6xl font-bold uppercase text-stroke-red"
                                }
                            >
                                Process
                            </h1></div>
                    ))}</Marquee>
                </div>

                <h1 className="mt-12 max-w-md mx-auto text-3xl text-center uppercase font-bold">
                    Get Your Video Done In These{" "}
                    <span className="text-primary">5 Easy Steps</span>
                </h1>

                <section className="max-w-3xl mx-auto mt-8 flex flex-wrap gap-4 lg:gap-y-8 justify-center">
                    {[
                        {
                            icon: "step1.svg",
                            titleComponent: (
                                <>
                                    <span className="text-primary">1. Create</span> Your Video
                                </>
                            ),
                        },
                        {
                            icon: "step2.svg",
                            titleComponent: (
                                <>
                                    2. Discovery <span className="text-primary">Call</span>
                                </>
                            ),
                        },
                        {
                            icon: "step3.svg",
                            titleComponent: (
                                <>
                                    <span className="text-primary">3. Upload</span> the Video
                                </>
                            ),
                        },
                        {
                            icon: "step4.svg",
                            titleComponent: (
                                <>
                                    4. We Do the <span className="text-primary">Edits</span>
                                </>
                            ),
                        },
                        {
                            icon: "step5.svg",
                            titleComponent: (
                                <>
                                    5. Get Your <span className="text-primary">Video</span>
                                </>
                            ),
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-4 items-center w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] transition-all hover:scale-95"
                        >
                            <img
                                src={`/images/${item.icon}`}
                                alt="Icon"
                                className="w-auto h-[200px] object-contain"
                            />
                            <p className="text-lg font-medium uppercase">
                                {item.titleComponent}
                            </p>
                        </div>
                    ))}
                </section>

                <p className="mt-12 max-w-3xl mx-auto text-center text-gray-500 text-sm">
                    Beim Discovery Call schauen wir erstmal, ob es denn auch klick macht
                    zwischen uns. D.h. wir lernen uns ein wenig besser kennen. Eine
                    vertrauensvolle Zusammenarbeit ist mir wichtig. Denn sie macht nicht
                    nur mehr Spaß, sondern führt auch zu einem erfolgreichem Ergebnis.
                </p>
            </section>
            <section className="py-8 pb-24">
                <div
                    className="pt-4"
                >
                    <Marquee className="whitespace-nowrap overflow-hidden">{[1, 2, 3, 4].map((item, index) => (
                        <div className="mx-4"
                            key={index}>
                            <h1
                                className={
                                    index % 2 == 0
                                        ? "text-6xl font-bold uppercase"
                                        : "text-6xl font-bold uppercase text-stroke-red"
                                }
                            >
                                Our Services
                            </h1></div>
                    ))}</Marquee>
                </div>

                <section className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 mt-12 p-4 sm:p-8 lg:p-0">
                    <div>
                        <h1 className="text-3xl uppercase font-bold">
                            The exclusive <span className="text-primary">services</span> you
                            are going to <span className="text-primary">get</span>
                        </h1>
                        <p className="font-medium mt-5 text-lg">
                            Captivate Your Audience By:
                        </p>
                        <div className="ps-6 mt-4">
                            {[
                                {
                                    icon: "ic1.svg",
                                    title: "Eye Catching Visual",
                                },
                                {
                                    icon: "ic2.svg",
                                    title: "Emojis, Gifs, Images",
                                },
                                {
                                    icon: "ic3.svg",
                                    title: "Video Stabilization",
                                },
                                {
                                    icon: "ic4.svg",
                                    title: "Trending Music + Foley Sounds Effects",
                                },
                                {
                                    icon: "ic5.svg",
                                    title: "Trending Content",
                                },
                                {
                                    icon: "ic6.svg",
                                    title: "Trimming + Cut the Fluff",
                                },
                                {
                                    icon: "ic7.svg",
                                    title: "Subtitling + Captions",
                                },
                                {
                                    icon: "ic8.svg",
                                    title: "Zooms + Pans + Cuts + Transitions",
                                },
                                {
                                    icon: "ic9.svg",
                                    title: "Call to Action Enhancement",
                                },
                            ].map((item, index) => (
                                <div key={index} className="flex gap-4 mt-2.5">
                                    <img
                                        src={`/images/${item.icon}`}
                                        alt="Icon"
                                        className="w-[20px] h-[20px]"
                                    />
                                    <p className="text-sm">{item.title}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm mt-4">
                            Our edits will follow any style and format you want for proven
                            success. If you require a different style please{" "}
                            <span className="text-primary font-medium">message us</span> or{" "}
                            <span className="text-primary font-medium">book a call</span>{" "}
                            before ordering.
                        </p>
                    </div>
                    <div className="border-2 border-black p-8 h-fit">
                        <h1 className="text-2xl font-medium leading-6">
                            <span className="text-primary">Repurpose</span> Longform Content
                        </h1>
                        <hr className="my-4 border-[1px] border-black" />
                        <p className="text-sm">
                            Repurpose new or existing longform content i.e podcasts of YouTube
                            Videos into clips for TikTok, Reels or YouTube Shorts. Each clip
                            produced counts as 1 monthly edit credit.
                        </p>

                        <h1 className="text-2xl font-medium leading-6 mt-8">
                            Grow Faster With A <span className="text-primary">CTA</span>
                        </h1>
                        <hr className="my-4 border-[1px] border-black" />
                        <p className="text-sm">
                            Repurpose new or existing longform content i.e podcasts of YouTube
                            Videos into clips for TikTok, Reels or YouTube Shorts. Each clip
                            produced counts as 1 monthly edit credit.
                        </p>

                        <button className="bg-primary text-white text-[14px] font-medium uppercase tracking-widest py-1.5 px-4 mt-7 select-none hover:scale-105 active:scale-100">
                            Order Edit
                        </button>
                    </div>
                </section>

                <section className="max-w-4xl mx-auto mt-12 flex flex-col md:flex-row items-center md:items-none gap-5 md:gap-24">
                    <div className="w-full max-w-[270px]">
                        <img
                            src="/images/treesocial.svg"
                            alt="Social Tree"
                            className="w-full"
                        />
                    </div>
                    <div className="p-8">
                        <h1 className="text-2xl font-medium text-primary">
                            All Social Media Formats
                        </h1>
                        <p className="mt-4 leading-tight">
                            Whichever platform you choose we deliver all social media formats:
                            Square, vertical, horizontal (1*1, 4*5, 16*9, 9*16)
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full max-w-lg mt-6">
                            {[{
                                icon: "fb.svg",
                                title: "Facebook",
                            },
                            {
                                icon: "ig.svg",
                                title: "Instagram",
                            },
                            {
                                icon: "yt.svg",
                                title: "Youtube",
                            },
                            {
                                icon: "tk.svg",
                                title: "Tiktok",
                            },
                            {
                                icon: "yn.svg",
                                title: "You Name It"
                            }
                            ]
                                .map((item, index) => (
                                    <div key={index} className="flex gap-2 bg-black rounded-3xl items-center w-fit px-3 py-1.5 text-white hover:scale-105 transition-all select-none">
                                        <img
                                            src={`/images/${item.icon}`}
                                            alt="Icon"
                                            className="w-[15px] h-[15px]"
                                        />
                                        <p className="text-xs">{item.title}</p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </section>

                <button className="block mx-auto bg-primary text-white md:text-lg font-semibold py-1.5 px-3 md:py-2.5 md:px-7 mt-8 select-none hover:scale-105 active:scale-100">
                    Schedule A Free Strategy Call Now
                </button>
            </section>

            <section className="w-full bg-black -mt-7 rounded-t-2xl text-white">
                <div
                    className="pt-12"
                >
                    <Marquee className="whitespace-nowrap overflow-hidden">{[1, 2, 3, 4].map((item, index) => (
                        <div className="mx-4"
                            key={index}>
                            <h1
                                className={
                                    index % 2 == 0
                                        ? "text-6xl font-bold uppercase"
                                        : "text-6xl font-bold uppercase text-stroke-yellow"
                                }
                            >
                                Portfolio
                            </h1></div>
                    ))}</Marquee>
                </div>

                <section className="py-12">
                    <h1 className="text-center font-medium uppercase text-3xl max-w-2xl mx-auto">
                        Some of Our Previous{" "}
                        <span className="text-secondary">Selected Works</span> That We Did
                        for Our Clients
                    </h1>
                    <p className="max-w-sm text-center font-[300] mx-auto mt-6">
                        Convince your visitors with dear user guidance and a strong concept.
                    </p>
                </section>

                <section className="overflow-x-hidden">
                    <div className="flex grid-cols-3 lg:grid-cols-6 justify-center gap-4 mt-5">
                        <Marquee>{[
                            {
                                image: "pfl1.png",
                                title: "YT Shorts",
                            },
                            {
                                image: "pfl2.png",
                                title: "Tiktok",
                            },
                            {
                                image: "pfl3.png",
                                title: "FB Reel",
                            },
                            {
                                image: "pfl2.png",
                                title: "Tiktok",
                            },
                            {
                                image: "pfl3.png",
                                title: "FB Reel",
                            },
                            {
                                image: "pfl1.png",
                                title: "YT Shorts",
                            },
                            {
                                image: "pfl2.png",
                                title: "Tiktok",
                            },
                            {
                                image: "pfl3.png",
                                title: "FB Reel",
                            }
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center relative max-w-[220px] mx-3">
                                <img
                                    src={`/images/${item.image}`}
                                    alt="Portfolio"
                                    className="w-full object-cover"
                                />
                                <div className="w-full bg-white text-black p-2 md:p-4">
                                    <div className=" text-smmd:text-lg font-medium border-[3px] border-black px-4 py-0.5 w-fit mx-auto uppercase">
                                        {item.title}
                                    </div>
                                </div>

                                <img
                                    src="/images/play.svg"
                                    alt=""
                                    className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                                />
                            </div>
                        ))}
                        </Marquee>
                    </div>
                    <div className="mt-5">
                        <Marquee direction="right">{[
                            {
                                image: "pfl4.png",
                                title: "Youtube Video",
                            },
                            {
                                image: "pfl5.png",
                                title: "FB Video",
                            },
                            {
                                image: "pfl6.png",
                                title: "Any HD",
                            },
                            {
                                image: "pfl4.png",
                                title: "Youtube Video",
                            },
                            {
                                image: "pfl5.png",
                                title: "FB Video",
                            },
                            {
                                image: "pfl6.png",
                                title: "Any HD",
                            },
                            {
                                image: "pfl4.png",
                                title: "Youtube Video",
                            },
                            {
                                image: "pfl5.png",
                                title: "FB Video",
                            },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center relative max-w-[300px] mx-3">
                                <img
                                    src={`/images/${item.image}`}
                                    alt="Portfolio"
                                    className="w-full aspect-video"
                                />
                                <div className="w-full bg-white text-black p-2 md:p-4 whitespace-nowrap">
                                    <div className="text-xs md:text-sm font-medium border-[3px] border-black px-4 py-0.5 w-fit mx-auto uppercase">
                                        {item.title}
                                    </div>
                                </div>

                                <img
                                    src="/images/play.svg"
                                    alt=""
                                    className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                                />
                            </div>
                        ))}</Marquee>
                    </div>
                </section>

                <div
                    className="pt-4"
                ><Marquee className="whitespace-nowrap overflow-hidden">{[1, 2, 3, 4, 5, 6].map((item, index) => (
                    <div className="mx-4 mt-12"
                        key={index}>
                        <h1
                            className={
                                index % 2 == 0
                                    ? "text-6xl font-bold uppercase"
                                    : "text-6xl font-bold uppercase text-stroke-yellow"
                            }
                        >
                            Reviews
                        </h1></div>
                ))}</Marquee>
                </div>

                <section className="py-12">
                    <div>
                        <h1 className="text-center font-semibold uppercase text-3xl max-w-lg mx-auto mt-5">
                            Some inspirational <span className="text-secondary">stories</span>{" "}
                            of our <span className="text-secondary">previous clients</span>
                        </h1>
                        <p className="text-lg text-center font-[300] mt-6">
                            Convince your visitors with dear user guidance and a strong
                            concept.
                        </p>
                    </div>

                    <div className="py-12 overflow-hidden">
                        <Splide
                            tag="section"
                            hasTrack={false}
                            options={{
                                type: "loop",
                                padding: "20rem",
                            }}
                        >
                            <SplideTrack>
                                {[
                                    {
                                        user: {
                                            picture: "rec-user1.png",
                                            name: "Aurora lilly",
                                            position: "Marketing Manager",
                                        },
                                        comment:
                                            "Their animated explainer video for our new product went viral and boosted sales way beyond expectations. Highly recommend!",
                                        views: "35 Million+",
                                        followers: "150000+",
                                        cover: "rec1.png",
                                    },
                                    {
                                        user: {
                                            picture: "rec-user1.png",
                                            name: "Aurora lilly",
                                            position: "Marketing Manager",
                                        },
                                        comment:
                                            "Their animated explainer video for our new product went viral and boosted sales way beyond expectations. Highly recommend!",
                                        views: "35 Million+",
                                        followers: "150000+",
                                        cover: "rec1.png",
                                    },
                                    {
                                        user: {
                                            picture: "rec-user1.png",
                                            name: "Aurora lilly",
                                            position: "Marketing Manager",
                                        },
                                        comment:
                                            "Their animated explainer video for our new product went viral and boosted sales way beyond expectations. Highly recommend!",
                                        views: "35 Million+",
                                        followers: "150000+",
                                        cover: "rec1.png",
                                    },
                                ].map((r, i) => (
                                    <SplideSlide
                                        key={i}
                                        className="flex justify-center max-w-4xl"
                                    >
                                        <div className="max-w-2xl rounded-2xl pb-0.5 bg-[#413f3f]">
                                            <div className="flex gap-8 p-6 border border-white/50 rounded-2xl">
                                                <div className="flex flex-col justify-between">
                                                    <div>
                                                        <div className="flex gap-4">
                                                            <div>
                                                                <img
                                                                    src={"/images/" + r.user.picture}
                                                                    alt={r.user.name}
                                                                    className="w-12 h-12"
                                                                />
                                                            </div>
                                                            <div>
                                                                <h2 className="font-semibold">{r.user.name}</h2>
                                                                <p>{r.user.position}</p>
                                                            </div>
                                                        </div>

                                                        <p className="py-8 font-medium text-lg">
                                                            "{r.comment}"
                                                        </p>
                                                    </div>
                                                    <div className="flex gap-8">
                                                        <div>
                                                            <h2 className="font-semibold">{r.views}</h2>
                                                            <p>Views</p>
                                                        </div>
                                                        <div>
                                                            <h2 className="font-semibold">{r.followers}</h2>
                                                            <p>Followers Gained</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <img
                                                        src={"/images/" + r.cover}
                                                        alt="Cover"
                                                        className="min-w-[200px]"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </SplideSlide>
                                ))}
                            </SplideTrack>
                            <div className="splide__progress">
                                <div className="splide__progress__bar" />
                            </div>
                        </Splide>
                    </div>
                </section>

                <section className="pt-12">
                    <div>
                        <h1 className="text-center font-semibold uppercase text-3xl max-w-lg mx-auto">
                            What Ours Customers Say About Our{" "}
                            <span className="text-secondary">Services</span>
                        </h1>
                        <p className="max-w-lg text-center font-[300] mx-auto mt-6">
                            Convince your visitors with dear user guidance and a strong
                            concept.
                        </p>
                    </div>

                    <div className="max-w-7xl mx-auto mt-8">
                        <Splide>
                            {[
                                {
                                    picture: "rev1.png",
                                    title: (
                                        <p>
                                            a video agency that meet all{" "}
                                            <span className="text-secondary">our goals</span>
                                        </p>
                                    ),
                                    review:
                                        "They were incredibly responsive throughout the entire video production process and kept me informed every step of the way. The final product exceeded my expectations. I'll definitely be using them again!",
                                    name: "John Kim",
                                    position: (
                                        <p>
                                            Founder of{" "}
                                            <span className="text-secondary font-medium">
                                                TechSolve
                                            </span>
                                        </p>
                                    ),
                                },
                            ].map((rc, i) => (
                                <div className="w-full grid md:grid-cols-2 gap-4 items-center" key={i}>
                                    <div>
                                        <img
                                            src={"/images/" + rc.picture}
                                            alt="Human"
                                            className="w-[300px] mx-auto"
                                        />
                                    </div>
                                    <div>
                                        <div className="max-w-lg mx-auto p-8">
                                            <h2 className="text-2xl uppercase font-semibold">
                                                {rc.title}
                                            </h2>
                                            <p className="my-7">"{rc.review}"</p>

                                            <img
                                                src="/images/5stars.svg"
                                                alt="5 Stars"
                                                className="w-auto h-[14px]"
                                            />

                                            <div className="mt-12">
                                                <p className="text-2xl font-medium uppercase">
                                                    - {rc.name}
                                                </p>
                                                <div className="text-lg">{rc.position}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Splide>
                    </div>
                </section>
            </section>

            <section className="py-12">
                <section>
                    <div
                        className="pt-4"
                    >
                        <Marquee className="whitespace-nowrap overflow-hidden">{[1, 2, 3, 4, 5, 6].map((item, index) => (
                            <div className="mx-4"
                                key={index}>
                                <h1
                                    className={
                                        index % 2 == 0
                                            ? "text-6xl font-bold uppercase"
                                            : "text-6xl font-bold uppercase text-stroke-red"
                                    }
                                >
                                    Pricing
                                </h1></div>
                        ))}</Marquee>
                    </div>

                    <div className="px-4 md:px-0">
                        <div className="pb-8 pt-12">
                            <h1 className="text-center font-semibold uppercase text-3xl max-w-sm mx-auto">
                                create your <span className="text-primary">video</span> pick a
                                plan <span className="text-primary">later</span>
                            </h1>
                            <p className="max-w-xl text-center font-[300] mx-auto mt-6">
                                Choose the plan that’s right for your business. Whether you’re
                                just getting started with your first ever video or well down the
                                path to pro contents, we’re got you covered
                            </p>
                        </div>

                        <div className="flex gap-2 items-center w-fit mx-auto">
                            <button
                                className="font-semibold"
                                onClick={() => setPricingCheck(false)}
                            >
                                Monthly
                            </button>
                            <label className="inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    value=""
                                    checked={pricingCheck}
                                    onChange={(e) => setPricingCheck(e.currentTarget.checked)}
                                    className="sr-only peer"
                                />
                                <div className="relative w-12 h-7 border-2 border-primary peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-primary after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                            </label>
                            <button
                                className="font-semibold"
                                onClick={() => setPricingCheck(true)}
                            >
                                Yearly
                            </button>
                            <div className="text-primary h-fit text-[10px] py-0.5 font-medium px-2 rounded-full border border-primary flex items-center">
                                <p>35% OFF</p>
                            </div>
                        </div>

                        <div className="max-w-6xl mx-auto grid gap-4 py-8 lg:grid-cols-4">
                            <div>
                                <h1 className="font-semibold uppercase text-3xl max-w-sm">
                                    Pick Your <span className="text-primary">Plan</span>
                                </h1>

                                <div className="my-8">
                                    {[
                                        {
                                            id: "plan-radio-1",
                                            label: "Monthly Video Editing Service",
                                        },
                                        {
                                            id: "plan-radio-2",
                                            label: "Unlimited Long-Form Video",
                                        },
                                        {
                                            id: "plan-radio-3",
                                            label: "Unlimited Reels/Tiktok/Shorts",
                                        },
                                        {
                                            id: "plan-radio-4",
                                            label: "Single Video Edits",
                                        },
                                    ].map((p, i) => (
                                        <div className="flex items-center my-2" key={i}>
                                            <input
                                                type="radio"
                                                className={
                                                    "w-4 h-4" + (pricingRadio == p.id && " font-semibold")
                                                }
                                                id={p.id}
                                                checked={pricingRadio == p.id}
                                                onChange={() => setPricingRadio(p.id)}
                                            />
                                            <label
                                                htmlFor={p.id}
                                                className="ms-2 font-medium cursor-pointer"
                                            >
                                                {p.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>

                                <p>
                                    Choose the Pricing Plan that{" "}
                                    <span className="font-semibold">works best</span> for your
                                    business.
                                </p>
                            </div>

                            {[
                                {
                                    title: "Starter",
                                    subtle:
                                        "Display stars in Google organic search result and showcase.",
                                    features: [
                                        "4 YouTube videos (HD/4K)",
                                        "5 reels/shorts for any platform",
                                        "Animated subtitles",
                                        "Thumbnails for YouTube videos and reels/shorts",
                                        "Video running time: 10 minutes",
                                        "24/7 assistance via WhatsApp",
                                    ],
                                    cost: 1200,
                                    discount: 1080,
                                },
                                {
                                    title: "Creator",
                                    subtle:
                                        "Display stars in Google organic search result and showcase.",
                                    features: [
                                        "8 YouTube videos (HD/4K)",
                                        "10 reels/shorts for any platform",
                                        "Animated subtitles",
                                        "Thumbnails for YouTube videos and reels/shorts",
                                        "Video running time: 15 minutes",
                                        "24/7 assistance via WhatsApp",
                                        "Trending keywords suggestion",
                                        "Live updates via dedicated CRM",
                                    ],
                                    cost: 2200,
                                    discount: 1870,
                                },
                                {
                                    title: "Studio",
                                    subtle:
                                        "Display stars in Google organic search result and showcase.",
                                    features: [
                                        "16 YouTube videos (HD/4K)",
                                        "20 reels/shorts for any platform",
                                        "Animated subtitles",
                                        "Thumbnails for YouTube videos and reels/shorts",
                                        "Video running time: 20 minutes",
                                        "24/7 assistance via WhatsApp",
                                        "Trending keyword suggestion",
                                        "Live updates via dedicated CRM",
                                        "Hook generation",
                                    ],
                                    cost: 3500,
                                    discount: 2625,
                                    term: "* Contact us for personalized pricing and services",
                                },
                            ].map((p, i) => (
                                <div
                                    key={i}
                                    className="border-[2px] border-black p-4 flex flex-col justify-between bg-white"
                                >
                                    <div>
                                        <h1 className="font-semibold uppercase text-3xl text-primary">
                                            {p.title}
                                        </h1>

                                        <p className="mt-4 font-semibold">{p.subtle}</p>

                                        <ul className="ms-4 mt-6 list-disc">
                                            {p.features.map((f, ii) => (
                                                <li key={ii} className="my-2">
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-12 text-center">
                                        <p className="text-2xl">
                                            <del>${p.cost}</del>
                                        </p>
                                        <div className="flex gap-0.5 justify-center items-end">
                                            <p className="text-3xl font-bold text-primary">
                                                ${p.discount}
                                            </p>
                                            <p className="font-semibold text-lg">/mo</p>
                                        </div>
                                        <button className="block mx-auto bg-primary text-white text-lg font-semibold py-1.5 px-7 mt-8 select-none hover:scale-105 active:scale-100">
                                            Select Plan
                                        </button>
                                        <div className="h-[80px] pt-5 font-semibold">
                                            {p.term || ""}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-black bg-[url('/images/underpricing.png')] text-white bg-cover w-full pb-12 relative -z-10 rounded-t-3xl -mt-[280px] pt-[300px] px-4 text-center">
                    <h1 className="uppercase text-4xl font-bold max-w-sm mx-auto">
                        Can't find any{" "}
                        <span className="text-secondary">suitable package?</span>
                    </h1>

                    <p className="text-lg max-w-xl mx-auto my-5">
                        if you cant find any suitable package here you can always ask for a
                        quote by reaching us out. We are here 24/7
                    </p>

                    <button className="block mx-auto bg-primary text-white text-lg font-semibold py-2 px-8 mt-10 select-none hover:scale-105 active:scale-100">
                        Get a Quote
                    </button>
                </section>

                <div className="px-4 md:px-0">
                    <section className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto pt-14">
                        <div>
                            <h1 className="uppercase text-4xl font-bold">
                                Book a Call <span className="text-primary">Today</span>
                            </h1>

                            <p className="my-5 mt-6">
                                Have any query in mind? Just book a call today and we will discuss
                                them together.
                            </p>
                            <p className="my-5">
                                Save upto 70% from your first month Subscription
                            </p>
                            <p className="my-5">
                                Everyone you will hire is well trained to deliver files as you
                                want
                            </p>
                        </div>
                        <div>
                            <form action="" className="flex flex-col gap-3">
                                <div className="grid grid-cols-2 gap-3">
                                    <input
                                        type="text"
                                        className="px-4 py-2.5 border-2 border-black/50 placeholder:text-black/80"
                                        placeholder="Name"
                                    />
                                    <input
                                        type="tel"
                                        className="px-4 py-2.5 border-2 border-black/50 placeholder:text-black/80"
                                        placeholder="Phone Number"
                                    />
                                </div>
                                <input
                                    type="tel"
                                    className="px-4 py-2.5 border-2 border-black/50 placeholder:text-black/80"
                                    placeholder="Email"
                                />
                                <h2 className="font-semibold">I Want Video Editing for</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {["Youtube", "Instagram", "Other"].map((s, i) => (
                                        <label
                                            htmlFor={`form-${s.toLowerCase()}`}
                                            key={i}
                                            className={
                                                "px-4 py-2.5 border-2 border-black/50 placeholder:text-black/80 flex gap-2 items-center select-none hover:scale-105 active:scale-100" +
                                                (formRadio == `form-${s.toLowerCase()}` &&
                                                    " bg-primary !border-primary text-white")
                                            }
                                        >
                                            <input
                                                type="radio"
                                                id={`form-${s.toLowerCase()}`}
                                                checked={formRadio == `form-${s.toLowerCase()}`}
                                                onChange={() => setFormRadio(`form-${s.toLowerCase()}`)}
                                            />
                                            <p className="cursor-pointer">{s}</p>
                                        </label>
                                    ))}
                                </div>
                                <select
                                    type="tel"
                                    className="px-4 py-2.5 bg-white border-2 border-black/50"
                                >
                                    <option value="">Select Your Budget</option>
                                </select>
                                <h2 className="font-semibold">Describe Your Project</h2>
                                <textarea
                                    rows={5}
                                    className="px-4 py-2.5 border-2 border-black/50 placeholder:text-black/80"
                                    placeholder="Your Text"
                                ></textarea>

                                <button className="block mx-auto bg-primary text-white text-lg font-semibold py-1.5 px-6 mt-4 select-none hover:scale-105 active:scale-100">
                                    Schedule A Call
                                </button>
                            </form>
                        </div>
                    </section>
                </div>
            </section>
            <footer
                className="w-full bg-black text-white py-14 overflow-hidden px-4 md:px-0"
            >
                <div>
                    <h1 className="text-4xl text-center max-w-lg mx-auto font-semibold uppercase">
                        Have a <span className="text-secondary">project</span> in mind? Let
                        us work <span className="text-secondary">together</span>
                    </h1>
                    <div className="flex justify-center gap-8 mt-7">
                        <button className="bg-transparent border-[2.5px] border-white text-[16px] font-bold tracking-widest py-2 px-4 select-none hover:scale-105 active:scale-100">
                            See The Plans
                        </button>
                        <button className="bg-primary text-white text-[16px] font-bold tracking-widest py-2 px-4 select-none hover:scale-105 active:scale-100">
                            Book a call
                        </button>
                    </div>

                    <div className="max-w-7xl mx-auto">
                        <hr className="border border-white my-12" />

                        <div className="w-full flex flex-col md:flex-row md:justify-between">
                            <div className="flex gap-4 lg:gap-6">
                                {[{
                                    icon: "li.svg",
                                    link: "#",
                                }, {
                                    icon: "tw.svg",
                                    link: "#",
                                }, {
                                    icon: "ins.svg",
                                    link: "#",
                                }, {
                                    icon: "fab.svg",
                                    link: "#",
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
                            <div className="w-fit flex gap-4 lg:gap-8 whitespace-nowrap">
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

                    <div
                        className="pt-8"
                    >
                        <Marquee className="whitespace-nowrap overflow-hidden">{[1, 2, 3, 4, 5, 6].map((item, index) => (
                            <div className="mx-4"
                                key={index}>
                                <h1
                                    className={
                                        index % 2 == 0
                                            ? "text-6xl font-bold uppercase"
                                            : "text-6xl font-bold uppercase text-stroke-yellow"
                                    }
                                >
                                    Hypecut
                                </h1></div>
                        ))}</Marquee>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Landing;
