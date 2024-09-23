import Marquee from "react-fast-marquee";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

function Landing() {
    const textTrigger1 = useRef(null);
    const textTrigger2 = useRef(null);
    const text1 = useRef(null);
    const text2 = useRef(null);

    const makeMove = (element, trigger) => {
        gsap.to(element, {
            x: 200,
            scrollTrigger: {
                trigger: trigger,
                start: "top bottom",
                end: "+=1000",
                scrub: 0.5
            },
        });
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        makeMove(text1.current, textTrigger1.current);
        makeMove(text2.current, textTrigger2.current);
    }, []);

    return (
        <>
            <header id="header" className="w-full bg-[#ef1d25] text-white text-[14px] tracking-widest font-medium uppercase py-1.5 whitespace-nowrap">
                <Marquee>
                    {
                        ["Free First Video", "7 Days Free Trial", "100% Money-Back Guarantee", "Free First Video", "7 Days Free Trial", "100% Money-Back Guarantee"].map((item, index) => (
                            <div key={index} className="flex items-center gap-4 mx-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width={13} height={13} className="fill-[#fcde02]"><path d="M192 32c17.7 0 32 14.3 32 32l0 135.5 111.5-66.9c15.2-9.1 34.8-4.2 43.9 11s4.2 34.8-11 43.9L254.2 256l114.3 68.6c15.2 9.1 20.1 28.7 11 43.9s-28.7 20.1-43.9 11L224 312.5 224 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-135.5L48.5 379.4c-15.2 9.1-34.8 4.2-43.9-11s-4.2-34.8 11-43.9L129.8 256 15.5 187.4c-15.2-9.1-20.1-28.7-11-43.9s28.7-20.1 43.9-11L160 199.5 160 64c0-17.7 14.3-32 32-32z" /></svg> {item}
                            </div>
                        ))
                    }</Marquee>
            </header>
            <nav id="navbar" className="w-full">
                <div className="w-full xl:max-w-7xl flex justify-between items-center mx-auto p-8">
                    <div id="navbar-logo">
                        <img src="/images/logo.png" alt="Hypecut Logo" className="w-auto h-[37px]" />
                    </div>

                    <div id="navbar-menu">
                        <ul className="items-center gap-8 text-sm font-medium uppercase tracking-widest border-[2.5px] border-black whitespace-nowrap hidden lg:flex">
                            {
                                ["Home", "Pricing", "About Us"].map((item, index) => (
                                    <li key={index} className={(index == 0 && "text-white bg-[#ef1d25]")}><p className="py-1.5 px-5">{item}</p></li>
                                ))
                            }
                        </ul>
                    </div>

                    <div id="navbar-action">
                        <button className="bg-[#ef1d25] text-white text-[14px] font-medium uppercase tracking-widest py-1.5 px-4 border-[2.5px] border-black">Book a Demo</button>
                    </div>
                </div>
            </nav>
            <section id="hero" className="min-h-[90vh] pt-8 pb-20">
                <div className="px-8 w-full xl:max-w-7xl mx-auto grid lg:grid-cols-2 gap-4 items-center">
                    <div>
                        <h1 className="text-[42px] leading-tight font-bold uppercase">Transform Your Footages Into Professional-Grade And Catchy Videos</h1>
                        <p className="py-4 text-[24px] font-medium">Quick Turnaround And Exceptional Quality Guaranteed</p>

                        <div className="flex gap-4 mt-5">
                            <button className="bg-[#ef1d25] text-white text-[18px] font-bold uppercase tracking-widest py-2 px-6">See the Pricing</button>
                            <button className="bg-transparent border-[2.5px] border-black text-[18px] font-bold uppercase tracking-widest py-2 px-6">Watch How It Works</button>
                        </div>
                    </div>
                    <div>
                        <img src="/images/hero-cover.png" alt="Hero Image" className="w-full h-auto" />
                    </div>
                </div>
            </section>
            <section className="w-full bg-black -mt-7 rounded-t-2xl">
                <section className="flex gap-4 overflow-hidden whitespace-nowrap pt-14 pb-8">
                    {["company1.png", "company2.png", "company3.png", "company4.png", "company5.png", "company6.png", "company7.png"].map((item, index) => (
                        <img key={index} src={`/images/${item}`} alt="Company Logo" className="w-auto h-[50px] mx-4" />
                    ))
                    }
                </section>

                <section className="w-full xl:max-w-7xl mx-auto p-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        [
                            {
                                count: "45+",
                                title: "Clients",
                                description: "We served our clients well enough to get these number of clients."
                            },
                            {
                                count: "160+",
                                title: "Projects",
                                description: "We served our clients well enough to get these number of clients."
                            },
                            {
                                count: "100%",
                                title: "Commitment",
                                description: "We served our clients well enough to get these number of clients."
                            }
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col gap-4 text-white bg-white/20 rounded-xl p-8 hover:bg-white/15">
                                <p className="text-5xl font-bold">{item.count}</p>
                                <p className="text-2xl text-[#fcde02] font-medium uppercase mt-6">{item.title}</p>
                                <p className="text-lg font-[300]">{item.description}</p>
                            </div>
                        ))
                    }</section>

                <section className="p-8 pb-16">
                    <h1 className="text-3xl uppercase font-bold text-white w-full max-w-xl mx-auto text-center">
                        <span className="text-[#fcde02]">Exclusive Benefits</span> You Will Get By Working <span className="text-[#fcde02]">With Us</span>
                    </h1>

                    <div className="w-full max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12 mt-12">
                        {
                            [
                                {
                                    icon: "icon1.png",
                                    title: "Unlimited Editing and Revisions",
                                    description: "No hidden fees. Perfect your content with endless revisions, all within one package"
                                },
                                {
                                    icon: "icon2.png",
                                    title: "Fast Turnaround Time",
                                    description: "Stay agile with 1-2 day turnaround for your first draft. Professional results, faster."
                                },
                                {
                                    icon: "icon3.png",
                                    title: "Strategic Insights",
                                    description: "Blend video expertise with market trends. Craft content that resonates and drives result."
                                }, {
                                    icon: "icon4.png",
                                    title: "Dedicated Editors",
                                    description: "Your own video professional, ready for real-time chats and aligned with your brand."
                                }, {
                                    icon: "icon5.png",
                                    title: "Free Resources",
                                    description: "Enhance your videos with stock footage, music, and graphics at no extra cost."
                                }, {
                                    icon: "icon6.png",
                                    title: "Ready for Social",
                                    description: "Tailored videos for Instagram reels, Tiktok content, Facebook stories, and more. Stand out on every platform."
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex flex-col gap-4 text-white h-full">
                                    <img src={`/images/${item.icon}`} alt="Icon" className="w-fit h-[50px] -ml-2" />
                                    <p className="text-2xl font-medium leading-7 py-3">{item.title}</p>
                                    <p className="text-lg font-[300]">{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </section>
            <section className="py-8" ref={textTrigger1}>
                <div className="w-full overflow-hidden">
                    <div className="flex gap-8 justify-center pt-4 whitespace-nowrap" ref={text1}>
                        {
                            [1, 2, 3, 4, 5, 6].map((item, index) => (
                                <h1 className={index % 2 == 0 ? "text-6xl font-bold uppercase" : "text-6xl font-bold uppercase text-stroke"} key={index}>Process</h1>
                            ))
                        }
                    </div>
                </div>

                <h1 className="mt-12 max-w-md mx-auto text-3xl text-center uppercase font-bold">Get Your Video Done In These <span className="text-[#ef1d25]">5 Easy Steps</span></h1>

                <section className="max-w-3xl mx-auto mt-8 flex flex-wrap gap-4 justify-center">
                    {
                        [{
                            icon: "img1.png",
                            titleComponent: <><span className="text-[#ef1d25]">1. Create</span> Your Video</>
                        }, {
                            icon: "img2.png",
                            titleComponent: <>2. Discovery <span className="text-[#ef1d25]">Call</span></>
                        }, {
                            icon: "img3.png",
                            titleComponent: <><span className="text-[#ef1d25]">3. Upload</span> the Video</>
                        }, {
                            icon: "img4.png",
                            titleComponent: <>4. We Do the <span className="text-[#ef1d25]">Edits</span></>
                        }, {
                            icon: "img5.png",
                            titleComponent: <>5. Get Your <span className="text-[#ef1d25]">Video</span></>
                        }].map((item, index) => (
                            <div key={index} className="flex flex-col gap-4 items-center w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)]">
                                <img src={`/images/${item.icon}`} alt="Icon" className="w-auto h-[200px] object-contain" />
                                <p className="text-lg font-medium uppercase">{item.titleComponent}</p>
                            </div>
                        ))
                    }
                </section>


                <p className="mt-12 max-w-3xl mx-auto text-center text-gray-500 text-sm">Beim Discovery Call schauen wir erstmal, ob es denn auch klick macht zwischen uns. D.h. wir lernen uns ein wenig besser kennen. Eine vertrauensvolle Zusammenarbeit ist mir wichtig. Denn sie macht nicht nur mehr Spaß, sondern führt auch zu einem erfolgreichem Ergebnis.</p>
            </section>
            <section className="py-8" ref={textTrigger2}>
                <div className="w-full overflow-hidden">
                    <div className="flex gap-8 justify-center pt-4 whitespace-nowrap" ref={text2}>
                        {
                            [1, 2, 3, 4, 5].map((item, index) => (
                                <h1 className={index % 2 == 1 ? "text-6xl font-bold uppercase" : "text-6xl font-bold uppercase text-stroke"} key={index}>Our Services</h1>
                            ))
                        }
                    </div>
                </div>

                <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 mt-12 p-4 sm:p-8 lg:p-0">
                    <div>
                        <h1 className="text-3xl uppercase font-bold">The exclusive <span className="text-[#ef1d25]">services</span> you are going to <span className="text-[#ef1d25]">get</span></h1>
                        <p className="font-medium mt-5 text-lg">Captivate Your Audience By:</p>
                        <div className="ps-6 mt-4">{
                            [{
                                icon: "ic1.svg",
                                title: "Eye Catching Visual",
                            }, {
                                icon: "ic2.svg",
                                title: "Emojis, Gifs, Images",
                            }, {
                                icon: "ic3.svg",
                                title: "Video Stabilization",
                            }, {
                                icon: "ic4.svg",
                                title: "Trending Music + Foley Sounds Effects",
                            }, {
                                icon: "ic5.svg",
                                title: "Trending Content",
                            }, {
                                icon: "ic6.svg",
                                title: "Trimming + Cut the Fluff"
                            }, {
                                icon: "ic7.svg",
                                title: "Subtitling + Captions"
                            }, {
                                icon: "ic8.svg",
                                title: "Zooms + Pans + Cuts + Transitions"
                            }, {
                                icon: "ic9.svg",
                                title: "Call to Action Enhancement"
                            }].map((item, index) => (
                                <div key={index} className="flex gap-4 mt-2.5">
                                    <img src={`/images/${item.icon}`} alt="Icon" className="w-auto w-[20px] h-[20px]" />
                                    <p className="text-sm">{item.title}</p>
                                </div>
                            ))
                        }</div>
                        <p className="text-sm mt-4">Our edits will follow any style and format you want for proven success. If you require a different style please <span className="text-[#ef1d25] font-medium">message us</span> or <span className="text-[#ef1d25] font-medium">book a call</span> before ordering.</p>
                    </div>
                    <div className="border-2 border-black p-8 h-fit">
                        <h1 className="text-2xl font-medium leading-6"><span className="text-[#ef1d25]">Repurpose</span> Longform Content</h1>
                        <hr className="my-4 border-[1px] border-black" />
                        <p className="text-sm">Repurpose new or existing longform content i.e podcasts of YouTube Videos into clips for TikTok, Reels or YouTube Shorts. Each clip produced counts as 1 monthly edit credit.</p>
 
                        <h1 className="text-2xl font-medium leading-6 mt-8">Grow Faster With A <span className="text-[#ef1d25]">CTA</span></h1>
                        <hr className="my-4 border-[1px] border-black" />
                        <p className="text-sm">Repurpose new or existing longform content i.e podcasts of YouTube Videos into clips for TikTok, Reels or YouTube Shorts. Each clip produced counts as 1 monthly edit credit.</p>

                        <button className="bg-[#ef1d25] text-white text-[14px] font-medium uppercase tracking-widest py-1.5 px-4 mt-7">Order Edit</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Landing
