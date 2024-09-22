
function Landing() {
    return (
        <>
            <header id="header" className="w-full bg-[#ef1d25] text-white text-[14px] tracking-widest font-medium uppercase py-1.5 flex items-center gap-4 whitespace-nowrap">
                {
                    ["Free First Video", "7 Days Free Trial", "100% Money-Back Guarantee"].map((item, index) => (
                        <div key={index} className="flex items-center gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width={13} height={13} className="fill-[#fcde02]"><path d="M192 32c17.7 0 32 14.3 32 32l0 135.5 111.5-66.9c15.2-9.1 34.8-4.2 43.9 11s4.2 34.8-11 43.9L254.2 256l114.3 68.6c15.2 9.1 20.1 28.7 11 43.9s-28.7 20.1-43.9 11L224 312.5 224 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-135.5L48.5 379.4c-15.2 9.1-34.8 4.2-43.9-11s-4.2-34.8 11-43.9L129.8 256 15.5 187.4c-15.2-9.1-20.1-28.7-11-43.9s28.7-20.1 43.9-11L160 199.5 160 64c0-17.7 14.3-32 32-32z" /></svg> {item}
                        </div>
                    ))
                }
            </header>
            <nav id="navbar" className="w-full">
                <div className="w-full xl:max-w-7xl flex justify-between items-center mx-auto p-8">
                    <div id="navbar-logo">
                        <img src="/images/logo.png" alt="Hypecut Logo" className="w-auto h-[37px]" />
                    </div>

                    <div id="navbar-menu">
                        <ul className="flex items-center gap-8 text-sm font-medium uppercase tracking-widest border-[2.5px] border-black">
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
                <div className="px-8 w-full xl:max-w-7xl mx-auto grid grid-cols-2 gap-4 items-center">
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
                <section className="flex gap-4 overflow-hidden pt-14 pb-8">
                    {["company1.png", "company2.png", "company3.png", "company4.png", "company5.png", "company6.png", "company7.png"].map((item, index) => (
                        <img key={index} src={`/images/${item}`} alt="Company Logo" className="w-auto h-[50px] mx-4" />
                    ))
                    }
                </section>

                <section className="w-full xl:max-w-7xl mx-auto p-8 grid grid-cols-3 gap-6">
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
                            <div key={index} className="flex flex-col gap-4 text-white bg-white/20 rounded-xl p-8">
                                <p className="text-5xl font-bold">{item.count}</p>
                                <p className="text-2xl text-[#fcde02] font-medium uppercase mt-6">{item.title}</p>
                                <p className="text-lg font-[300]">{item.description}</p>
                            </div>
                        ))
                    }</section>

                <section className="p-8">
                    <h1 className="text-3xl uppercase font-medium text-white w-full max-w-xl mx-auto text-center">
                        <span className="text-[#fcde02]">Exclusive Benefits</span> You Will Get By Working <span className="text-[#fcde02]">With Us</span>
                    </h1>

                    <div className="w-full max-w-4xl mx-auto grid grid-cols-3 gap-6 gap-y-12 mt-12">
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
                                    description: "Our team is always ready to assist you with any questions or concerns"
                                }, {
                                    icon: "icon5.png",
                                    title: "Free Resources",
                                    description: "If you're not satisfied with our service, we will refund your money"
                                }, {
                                    icon: "icon6.png",
                                    title: "Ready for Social",
                                    description: "We use secure payment gateways to ensure your payment is safe"
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
        </>
    )
}

export default Landing
