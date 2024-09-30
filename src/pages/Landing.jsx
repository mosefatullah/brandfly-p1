import Marquee from "react-fast-marquee";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import { Splide } from "@splidejs/react-splide";
import Plans from './../components/Plans';
import DownPlans from './../components/DownPlans';
import Counts from './../components/Counts';
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Landing() {
    const [userFeedbacks, setFeedbacks] = useState([
        {
            active: true,
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
        }, {
            active: false,
            user: {
                picture: "rec-user1.png",
                name: "Ahmad Han",
                position: "Managing Director",
            },
            comment:
                "Their animated explainer video for our new product went viral and boosted sales way beyond expectations. Highly recommend!",
            views: "25 Million+",
            followers: "120000+",
            cover: "rec2.png",
        }, {
            active: false,
            user: {
                picture: "rec-user1.png",
                name: "Mehmed Ali",
                position: "CEO",
            },
            comment:
                "Their animated explainer video for our new product went viral and boosted sales way beyond expectations. Highly recommend!",
            views: "45 Million+",
            followers: "154500+",
            cover: "rec3.png",
        }
    ])
    const getActiveFeedback = () => userFeedbacks.find(feedback => feedback.active);
    const getActiveFeedbackIndex = () => userFeedbacks.findIndex(feedback => feedback.active);

    const nextFeedback = () => {
        const currentIndex = getActiveFeedbackIndex();
        userFeedbacks[currentIndex].active = false;
        if (currentIndex === userFeedbacks.length - 1) {
            userFeedbacks[0].active = true;
        } else {
            userFeedbacks[currentIndex + 1].active = true;
        }
        setFeedbacks([...userFeedbacks]);
    };

    const prevFeedback = () => {
        const currentIndex = getActiveFeedbackIndex();
        userFeedbacks[currentIndex].active = false;
        if (currentIndex === 0) {
            userFeedbacks[userFeedbacks.length - 1].active = true;
        } else {
            userFeedbacks[currentIndex - 1].active = true;
        }
        setFeedbacks([...userFeedbacks]);
    };

    const getPrevFeedback = () => {
        const currentIndex = getActiveFeedbackIndex();
        if (currentIndex === 0) {
            return userFeedbacks[userFeedbacks.length - 1];
        } else {
            return userFeedbacks[currentIndex - 1];
        }
    };

    const getNextFeedback = () => {
        const currentIndex = getActiveFeedbackIndex();
        if (currentIndex === userFeedbacks.length - 1) {
            return userFeedbacks[0];
        } else {
            return userFeedbacks[currentIndex + 1];
        }
    };

    const goToIndexOnFeedback = (index) => {
        userFeedbacks.forEach((feedback, i) => {
            feedback.active = i === index;
        });
        setFeedbacks([...userFeedbacks]);
    };

    useEffect(() => {
        setInterval(() => {
            prevFeedback();
        }, 5000);
    }, []);


    return (
        <>
            <section>
                <div className="px-8 w-ful pb-32 xl:pb-20 xl:min-h-[85vh] xl:max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 lg:gap-4 lg:items-center pt-18 xl:pt-0">
                    <div className="lg:max-w-3xl lg:pe-56 xl:pe-0">
                        <h1 className="text-2xl md:text-3xl xl:text-[42px] leading-tight lg:leading-[2.7rem] font-bold uppercase">
                            Transform Your Footages Into Professional-Grade And Catchy Videos
                        </h1>
                        <p className="py-4 text-sm md:text-[24px] font-medium leading-5">
                            Quick Turnaround And Exceptional Quality Guaranteed
                        </p>

                        <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-6 whitespace-nowrap">
                            <Link to="/pricing"><button className="h-full bg-primary text-white text-xs md:text-[18px] font-bold uppercase tracking-widest py-2.5 md:py-2 px-6 hover:bg-primary/70 transition-all select-none hover:scale-105 active:scale-100">
                                See the Pricing
                            </button></Link>
                            <Link to="/about-us"><button className="h-full bg-transparent border-[2.5px] border-black text-xs md:text-[18px] font-bold uppercase tracking-widest py-2.5 px-6 hover:bg-primary hover:text-white transition-all select-none hover:scale-105 active:scale-100">
                                Watch How It Works
                            </button></Link>
                        </div>
                    </div>
                    <div className="relative ms-[33%] mx-auto lg:me-0 lg:ms-auto">
                        <img
                            src="/images/up.svg"
                            alt="Image"
                            className="w-[220px] h-auto mb-8 relative ms-4 mb-[105%] ms-[-82%]"
                        />
                        <div className="w-[300px] aspect-video border-2 border-black absolute right-[58%] bottom-[10%] hover:scale-[1.25] transition-all">
                            <img src="/images/hero-img-2.svg" alt="Image" className="w-full h-full" />
                            <img
                                src="/images/play-black.svg"
                                alt="Play"
                                className="h-auto absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
                            />
                        </div>
                        <div className="w-full max-w-[180px] aspect-square border-2 border-white absolute bottom-[28%] right-[40%] z-10 hover:scale-[1.25] transition-all">
                            <img src="/images/hero-img-1.svg" alt="Image" className="w-full h-full" />
                            <img
                                src="/images/play.svg"
                                alt="Play"
                                className="h-auto absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
                            />
                        </div>
                        <div className="w-full max-w-[160px] aspect-[9/16] border-2 border-black absolute bottom-[19%] right-0 hover:scale-[1.25] transition-all">
                            <img src="/images/hero-img-3.svg" alt="Image" className="w-full h-full" />
                            <img
                                src="/images/play-black.svg"
                                alt="Play"
                                className="h-auto absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
                            />
                        </div>
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

                <Counts />

                <section className="p-8 pb-16">
                    <h1 className="text-3xl uppercase font-medium text-white w-full max-w-xl mx-auto text-center">
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
                                className="flex flex-col gap-4 text-white h-full hover:scale-105 transition-all"
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
                                        ? "text-4xl md:text-6xl font-bold uppercase"
                                        : "text-4xl md:text-6xl font-bold uppercase text-stroke-red"
                                }
                            >
                                Process
                            </h1></div>
                    ))}</Marquee>
                </div>

                <h1 className="px-4 mt-12 max-w-md mx-auto text-xl md:text-3xl text-center uppercase font-bold">
                    Get Your Video Done In These{" "}
                    <span className="text-primary">5 Easy Steps</span>
                </h1>

                <section className="px-4 max-w-3xl mx-auto mt-8 flex flex-wrap gap-4 lg:gap-y-8 justify-center">
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
                            <p className="text-lg font-semibold uppercase">
                                {item.titleComponent}
                            </p>
                        </div>
                    ))}
                </section>

                <p className="px-4 mt-12 max-w-3xl mx-auto text-center font-[300] text-typography text-sm">
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
                                        ? "text-4xl md:text-6xl font-bold uppercase"
                                        : "text-4xl md:text-6xl font-bold uppercase text-stroke-red"
                                }
                            >
                                Our Services
                            </h1></div>
                    ))}</Marquee>
                </div>

                <section className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 mt-12 p-4 sm:p-8 lg:p-0">
                    <div>
                        <h1 className="text-xl md:text-3xl uppercase font-bold">
                            The exclusive<br /><span className="text-primary">services</span> you
                            are<br /> going to <span className="text-primary">get</span>
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
                                        className="w-[20px] h-[20px] transition-all hover:scale-[1.25]"
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
                    <div className="border-[2.5px] border-black p-8 h-fit">
                        <h1 className="text-2xl font-semibold leading-6">
                            <span className="text-primary">Repurpose</span> Longform Content
                        </h1>
                        <hr className="my-4 border-b-[2.5px] border-b-black" />
                        <p className="text-sm font-[300]">
                            Repurpose new or existing longform content i.e podcasts of YouTube
                            Videos into clips for TikTok, Reels or YouTube Shorts. Each clip
                            produced counts as 1 monthly edit credit.
                        </p>

                        <h1 className="text-2xl font-semibold leading-6 mt-8">
                            Grow Faster With A <span className="text-primary">CTA</span>
                        </h1>
                        <hr className="my-4 border-b-[2.5px] border-b-black" />
                        <p className="text-sm font-[300]">
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

                        <div className="flex flex-wrap gap-2 w-full max-w-lg mt-6">
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
                                        ? "text-4xl md:text-6xl font-bold uppercase"
                                        : "text-4xl md:text-6xl font-bold uppercase text-stroke-yellow"
                                }
                            >
                                Portfolio
                            </h1></div>
                    ))}</Marquee>
                </div>

                <section className="py-12 px-4">
                    <h1 className="text-center font-medium uppercase text-xl md:text-3xl max-w-2xl mx-auto">
                        Some of Our Previous{" "}
                        <span className="text-secondary">Selected Works</span> That We Did
                        for Our Clients
                    </h1>
                    <p className="max-w-lg text-center font-[300] mx-auto mt-6">
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
                                <div className="w-full bg-white text-typography p-2 md:p-4">
                                    <div className=" text-smmd:text-lg font-medium border-[3px] border-black px-4 py-0.5 w-fit mx-auto uppercase">
                                        {item.title}
                                    </div>
                                </div>

                                <img
                                    src="/images/play.svg"
                                    alt=""
                                    className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:scale-[1.25] transition-all"
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
                                <div className="w-full bg-white text-typography p-2 md:p-4 whitespace-nowrap">
                                    <div className="text-xs md:text-sm font-medium border-[3px] border-black px-4 py-0.5 w-fit mx-auto uppercase">
                                        {item.title}
                                    </div>
                                </div>

                                <img
                                    src="/images/play.svg"
                                    alt=""
                                    className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:scale-[1.25] transition-all"
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
                                    ? "text-4xl md:text-6xl font-bold uppercase"
                                    : "text-4xl md:text-6xl font-bold uppercase text-stroke-yellow"
                            }
                        >
                            Reviews
                        </h1></div>
                ))}</Marquee>
                </div>

                <section className="py-12">
                    <div className="px-4">
                        <h1 className="text-center font-semibold uppercase text-xl md:text-3xl max-w-lg mx-auto mt-5">
                            Some inspirational <span className="text-secondary">stories</span>{" "}
                            of our <span className="text-secondary">previous clients</span>
                        </h1>
                        <p className="text-lg text-center font-[300] mt-6">
                            Convince your visitors with dear user guidance and a strong
                            concept.
                        </p>
                    </div>

                    <div className="px-4 pt-12 pb-6 overflow-hidden flex justify-center items-center gap-8 transition-all duration-300">
                        <div className="max-w-[200px] rounded-lg relative hidden md:block">
                            <img src={"/images/" + getPrevFeedback().cover} alt="Cover" className="w-full opacity-75" />
                            <button className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] hover:scale-110 transition-all" onClick={prevFeedback}><img src="/images/go-left.svg" alt="Play" className="w-auto h-[55px]" /></button>
                        </div>
                        {[
                            getActiveFeedback()
                        ].map((r, i) => (
                            <div className="max-w-2xl rounded-2xl pb-0.5 bg-[#413f3f] h-fit" key={i}>
                                <div className="flex flex-col md:flex-row gap-8 px-6 py-8 border border-white/50 rounded-2xl">
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
                                                <div className="font-[100]">
                                                    <h2 className="font-semibold">{r.user.name}</h2>
                                                    <p>{r.user.position}</p>
                                                </div>
                                            </div>

                                            <p className="py-8 font-medium text-lg">
                                                "{r.comment}"
                                            </p>
                                        </div>
                                        <div className="flex gap-8 font-[100]">
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
                                            className="max-w-[250px] md:max-w-auto md:min-w-[200px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="max-w-[200px] rounded-lg relative hidden md:block">
                            <img src={"/images/" + getNextFeedback().cover} alt="Cover" className="w-full opacity-75" />
                            <button className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] hover:scale-110 transition-all" onClick={nextFeedback}><img src="/images/go-right.svg" alt="Play" className="w-auto h-[55px]" /></button>
                        </div>
                    </div>

                    <div className="flex justify-center gap-1.5">
                        {
                            userFeedbacks.map((item, index) => (
                                <div key={index} className={"rounded-full cursor-pointer" + (index === getActiveFeedbackIndex() ? " bg-primary w-[28px] h-[12px]" : " bg-white w-[10px] h-[10px] hover:scale-110 transition-all")} onClick={() => goToIndexOnFeedback(index)}></div>
                            ))
                        }
                    </div>
                </section>

                <section className="pt-12">
                    <div className="px-4">
                        <h1 className="text-center font-semibold uppercase text-2xl md:text-3xl max-w-lg mx-auto">
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
                                            ? "text-4xl md:text-6xl font-bold uppercase"
                                            : "text-4xl md:text-6xl font-bold uppercase text-stroke-red"
                                    }
                                >
                                    Pricing
                                </h1></div>
                        ))}</Marquee>
                    </div>

                    <div className="px-4 lg:px-0">
                        <div className="pb-8 pt-12">
                            <h1 className="text-center font-semibold uppercase text-2xl md:text-3xl max-w-sm mx-auto">
                                create your <span className="text-primary">video</span> pick a
                                plan <span className="text-primary">later</span>
                            </h1>
                            <p className="max-w-xl text-center font-[300] mx-auto mt-6">
                                Choose the plan that’s right for your business. Whether you’re
                                just getting started with your first ever video or well down the
                                path to pro contents, we’re got you covered
                            </p>
                        </div>

                        <Plans />
                    </div>
                </section>

                <DownPlans />
            </section>
        </>
    );
}

export default Landing;
