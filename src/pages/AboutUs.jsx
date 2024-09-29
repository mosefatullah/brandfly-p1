
import Counts from './../components/Counts';
export default function AboutUs() {
    return (
        <>
            <section className='py-8'>
                <div className='text-center'>
                    <h3 className='text-3xl font-semibold'>Welcome To HypeCut</h3>
                    <h1 className='mt-5 font-bold text-[75px] leading-[4.3rem] uppercase max-w-3xl mx-auto'>
                        your <span className='text-primary'>premier</span> video editing <span className='text-primary'>agency</span>
                    </h1>
                    <p className='mt-5 max-w-3xl mx-auto text-lg font-gothic'>Dedicated to transforming your raw footage into compelling visual stories. We specialize in editing videos for a diverse range of clients including influencers, podcasters, travelers, vloggers, and more.</p>
                </div>

            </section>
            <section className="bg-black text-white w-full px-4 py-8 mb-4">
                <div className="flex flex-col md:flex-row md:justify-between gap-4 xl:max-w-7xl mx-auto p-4 pb-6">
                    <div className='max-w-[929px] mx-4 mt-4'>
                        <h1 className='text-[40px] leading-tight'>At HypeCut, we understand the unique challenges faced by individual creators or agency who struggle with the time-consuming task of video editing.</h1>
                        <p className='mt-4 text-lg font-gothic'>Our mission is to provide high-quality, efficient, and creative editing solutions that help you focus on what you do best, creating amazing content.</p>
                    </div>
                    <div className='flex-1 flex flex-col justify-end items-end gap-4'>
                        <div>
                            <div className='flex'>
                                {["dummy1.svg", "dummy2.svg", "dummy3.svg"].map((item, index) => (
                                    <img key={index} src={`/images/${item}`} alt="dummy" className="w-20 h-20 rounded-full border-2 border-black -ml-4" />
                                ))}
                            </div>
                            <div className="w-fit bg-[#FDE104] px-4 py-2 text-black font-semibold mt-4">Your Success Allies</div>
                        </div>
                    </div>
                </div>
                <Counts />
            </section>
            <section className='p-4'>
                <div className='text-center'>
                    <h1 className='font-bold text-[42px] uppercase max-w-3xl mx-auto'>Explore our <span className='text-primary'>services</span></h1>
                    <p className='mt-1.5 max-w-3xl mx-auto text-lg font-gothic'>Something about our services in a few words so that someone can get rough idea about what they are gonna experience next.</p>
                </div>
            </section>
            <section className="bg-black text-white w-full px-4 py-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime beatae nihil vitae minima debitis quisquam deleniti necessitatibus reprehenderit eum, consectetur accusamus animi quibusdam laborum rerum inventore quas, autem, nobis mollitia?
            </section>
            <section className='px-4 py-12'>
                <div className='flex flex-col lg:flex-row gap-4 lg:gap-8 max-w-4xl mx-auto lg:items-center'>
                    <div>
                        <h1 className='font-bold text-[42px] uppercase max-w-3xl mx-auto'><span className='text-primary'>Join</span> our team</h1>
                        <img src='/images/join-team.png' alt='Join' className='w-full mt-8' />
                    </div>

                    <div>
                        <b className='max-w-3xl mx-auto text-lg font-gothic'>Are you a video editing wizard with a passion for storytelling?</b>
                        <p className='my-5 max-w-3xl mx-auto text-lg font-gothic'>We're on the hunt for talented individuals to join our dynamic team. Hypecut is more than just a workplace; it's a creative hub where your skills can shine.</p>
                        <button className="bg-primary text-white text-[16px] font-bold tracking-widest py-2.5 px-4 select-none hover:scale-105 active:scale-100 font-gothic mt-5">
                            See Open Positions
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
