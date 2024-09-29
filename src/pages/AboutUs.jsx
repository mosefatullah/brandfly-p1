
import Marquee from 'react-fast-marquee';
import Counts from './../components/Counts';
export default function AboutUs() {
    const services = [{
        title: "Dividual Creators",
        image: "serv1.png",
        description: "Whether you're an influencer, podcaster, traveler, or vlogger, we tailor our editing services to meet your specific needs. From short-form content like TikToks and reels to long-form YouTube videos, we ensure your videos are polished and professional.",
        tags: ["Influencer", "Podcaster", "Vlogger", "You Name It"],
    }, {
        title: "Project-Based Editing",
        image: "serv2.png",
        description: "Need editing for a specific project? We offer flexible, project-based editing services that deliver top-notch results, no matter the scope or complexity of your project.",
        tags: ["Project-Based", "Flexible"]
    }, {
        title: "Monthly Subscription",
        image: "serv3.png",
        description: "Monthly Subscription: For creators with ongoing content needs, our monthly subscription packages provide unlimited video edits, ensuring you always have fresh, high-quality content ready to share.",
        tags: ["Creators", "Long Time Projects", "Unlimited Video "]
    }, {
        title: "Single Edit Services",
        image: "serv4.png",
        description: "Just need one video edited? Our single edit service is perfect for creators who require occasional editing support, delivering quick turnaround times without compromising on quality.",
        tags: ["Single Video", "Unique"]
    }, {
        title: "Agency Partnerships",
        image: "serv5.png",
        description: "We also collaborate with other agencies that need reliable video editing services for their clients. Our team seamlessly integrates with your workflow to deliver exceptional video content on time, every time.",
        tags: ["Agency", "Flexible Time"]
    }, {
        title: "Anything not Mentioned?",
        image: "serv6.png",
        description: "Bring your questions, no matter how quirky, and let’s have fun together! Your curiosity is the spice of our day. So don’t hesitate just fire away your questions.",
        button: {
            text: "Let's Talk",
            link: "#"
        },
    }]
    return (
        <>
            <section className='pt-8 pb-12'>
                <div className='text-center'>
                    <h3 className='text-3xl font-semibold'>Welcome To HypeCut</h3>
                    <h1 className='mt-5 font-bold text-4xl lg:text-[75px] lg:leading-[4.3rem] uppercase max-w-3xl mx-auto'>
                        your <span className='text-primary'>premier</span> video editing <span className='text-primary'>agency</span>
                    </h1>
                    <p className='mt-5 max-w-3xl mx-auto text-[22px] font-gothic'>Dedicated to transforming your raw footage into compelling visual stories. We specialize in editing videos for a diverse range of clients including influencers, podcasters, travelers, vloggers, and more.</p>
                </div>

                <div className="overflow-hidden relative">
                    <Marquee>{["aut-1.png", "aut-2.png", "aut-3.png", "aut-4.png", "aut-5.png", "aut-2.png", "aut-3.png"].map((item, index) => (
                        <div key={index} className='mx-3'><img key={index} src={`/images/${item}`} alt="author" className="h-[200px] md:max-h-[231px] lg:max-h-[300px] mt-12 object-cover" /></div>
                    ))}</Marquee>
                    <div className="absolute bottom-3 left-[50%] transform -translate-x-1/2 flex items-center text-sm font-medium uppercase tracking-widest border-[2.5px] border-black whitespace-nowrap hidden lg:flex cursor-pointer gap-[1px] bg-white z-10">
                        <div
                            className="transition-all duration-300 select-none active:scale-100 group"
                        >
                            <p className="py-1.5 px-5 group-hover:scale-105">Services</p>
                        </div>
                        <div
                            className="transition-all duration-300 select-none active:scale-100 group"
                        >
                            <p className="py-1.5 px-5 group-hover:scale-105">Pricing</p>
                        </div>
                        <button
                            className="transition-all duration-300 select-none active:scale-100 bg-primary text-white group"
                        >
                            <p className="py-1.5 px-5 group-hover:scale-105">Let's Talk</p>
                        </button>
                    </div>
                </div>
            </section>
            <section className="bg-black text-white w-full px-8 py-8 mb-4">
                <div className="flex flex-col lg:flex-row lg:justify-between gap-4 xl:max-w-7xl mx-auto py-4 pb-6">
                    <div className='max-w-[929px] mt-4'>
                        <h1 className='text-3xl md:text-[40px] leading-tight'>At HypeCut, we understand the unique challenges faced by individual creators or agency who struggle with the time-consuming task of video editing.</h1>
                        <p className='mt-4 text-lg font-gothic'>Our mission is to provide high-quality, efficient, and creative editing solutions that help you focus on what you do best, creating amazing content.</p>
                    </div>
                    <div className='flex-1 flex flex-col justify-end lg:items-end gap-4'>
                        <div>
                            <div className='flex ps-3'>
                                {["dummy1.svg", "dummy2.svg", "dummy3.svg"].map((item, index) => (
                                    <img key={index} src={`/images/${item}`} alt="dummy" className="w-20 h-20 rounded-full border-2 border-black -ml-4" />
                                ))}
                            </div>
                            <div className="w-fit bg-[#FDE104] px-4 py-2 text-black font-semibold mt-4">Your Success Allies</div>
                        </div>
                    </div>
                </div>
                <Counts px />
            </section>
            <section className='px-4 py-12'>
                <div className='text-center'>
                    <h1 className='font-bold text-[42px] uppercase max-w-3xl mx-auto'>Explore our <span className='text-primary'>services</span></h1>
                    <p className='mt-1.5 max-w-3xl mx-auto text-[22px] font-gothic'>Something about our services in a few words so that someone can get rough idea about what they are gonna experience next.</p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 max-w-7xl mx-auto p-8'>
                    {services.map((i, index) => (
                        <div key={index} className='border border-black p-4 max-w-[416px] pb-12 hover:scale-105 transition-all'>
                            <div>
                                <img src={`/images/${i.image}`} alt={i.title} className='w-full' />
                            </div>
                            <div className='mt-8'>
                                <h1 className='text-primary font-bold text-[34px] leading-tight'>{i.title}</h1>
                                <p className='my-4 max-w-3xl mx-auto text-[22px] font-gothic mb-8 leading-tight tracking-wide'>{i.description}</p>
                                <div className='flex flex-wrap gap-4'>
                                    {i?.tags?.map((tag, index) => (
                                        <div key={index} className='hover:scale-105 active:scale-100 transition-all bg-[#EEF2F5] rounded-full text-black text-[14px] font-semibold uppercase px-4 py-1.5'>{tag}</div>
                                    ))}
                                </div>
                                {i.button && (
                                    <button className="bg-primary text-white text-[16px] font-bold tracking-widest py-2 px-12 select-none hover:scale-105 active:scale-100 font-gothic mt-5 rounded-full">
                                        {i.button.text}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="bg-black text-white w-full px-8 py-16">
                <div className="max-w-5xl mx-auto">
                    <div className='flex flex-col lg:flex-row gap-4 lg:justify-between'>
                        <div>
                            <h1 className='font-bold text-[42px] uppercase md:max-w-xs leading-tight'>Together we are <span className='text-secondary'>strong</span></h1>
                        </div>
                        <div className='max-w-xl'>
                            <p className='text-xl font-[100] tracking-wide'>
                                <b className='font-semibold'>At HypeCut, we are passionate about storytelling and dedicated to help you bring your wildest vision into life.</b>
                                <br /><br />
                                With our professional editing team, cutting-edge tools, and commitment to excellence, your videos will stand out and captivate your audience.
                                <br /><br />
                                Ready to elevate your content? Contact us today to learn more about how HypeCut can help you create stunning videos that leave a lasting impact
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-4 lg:justify-between mt-14'>
                        <div className='flex gap-2'>
                            <img src='/images/nazif.png' alt='CEO' className='w-[70px] h-[70px] rounded-full' />
                            <div>
                                <h1 className='font-semibold text-[24px]'>Nazif Yealmy</h1>
                                <p className='text-[18px] font-[100] tracking-widest font-gothic'>Founder & CEO</p>
                            </div>
                        </div>
                        <div className='max-w-xl'>
                            <p className='text-xl font-[100] tracking-wide'>
                                <b className='font-semibold'>At HypeCut, we are passionate about storytelling and dedicated to help you bring your wildest vision into life.</b>
                                <br /><br />
                                With our professional editing team, cutting-edge tools, and commitment to excellence, your videos will stand out and captivate your audience.
                                <br /><br />
                                Ready to elevate your content? Contact us today to learn more about how HypeCut can help you create stunning videos that leave a lasting impact
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='px-8 py-14'>
                <div className='flex flex-col lg:flex-row gap-4 lg:gap-8 max-w-5xl mx-auto lg:items-center'>
                    <div>
                        <h1 className='font-bold text-[42px] uppercase max-w-3xl mx-auto'><span className='text-primary'>Join</span> our team</h1>
                        <img src='/images/join-team.png' alt='Join' className='w-full mt-8' />
                    </div>

                    <div>
                        <b className='max-w-3xl mx-auto text-xl font-gothic'>Are you a video editing wizard with a passion for storytelling?</b>
                        <p className='my-5 max-w-3xl mx-auto text-xl font-gothic'>We're on the hunt for talented individuals to join our dynamic team. Hypecut is more than just a workplace; it's a creative hub where your skills can shine.</p>
                        <button className="bg-primary text-white text-lg font-bold tracking-widest py-3 px-5 select-none hover:scale-105 active:scale-100 font-gothic mt-5">
                            See Open Positions
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
