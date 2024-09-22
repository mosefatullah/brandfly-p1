
function Landing() {
    return (
        <>
            <div id="banner-of-header" className="w-full bg-[#ef1d25] text-white text-[14px] tracking-widest font-medium uppercase py-1.5 flex items-center gap-4 whitespace-nowrap">
                {
                    ["Free First Video", "7 Days Free Trial", "100% Money-Back Guarantee"].map((item, index) => (
                        <div key={index} className="flex items-center gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width={13} height={13} className="fill-[#fcde02]"><path d="M192 32c17.7 0 32 14.3 32 32l0 135.5 111.5-66.9c15.2-9.1 34.8-4.2 43.9 11s4.2 34.8-11 43.9L254.2 256l114.3 68.6c15.2 9.1 20.1 28.7 11 43.9s-28.7 20.1-43.9 11L224 312.5 224 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-135.5L48.5 379.4c-15.2 9.1-34.8 4.2-43.9-11s-4.2-34.8 11-43.9L129.8 256 15.5 187.4c-15.2-9.1-20.1-28.7-11-43.9s28.7-20.1 43.9-11L160 199.5 160 64c0-17.7 14.3-32 32-32z" /></svg> {item}
                        </div>
                    ))
                }
            </div>
            <div id="navbar" className="w-full py-8">
                <div className="w-full max-w-6xl flex justify-between items-center mx-auto">
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
            </div>
        </>
    )
}

export default Landing
