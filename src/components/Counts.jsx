import { useEffect } from 'react';
import SlotCounter from './../components/SlotCounter';
import { fadeUp } from '../utils/FadeUp';

export default function Counts() {
    useEffect(() => {
        fadeUp();
    }, []);
    return (
        <>
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
                            <p className="text-5xl font-bold transition-all group-hover:scale-95"><SlotCounter value={item.count} />{item.sign}</p>
                            <p className="text-2xl text-secondary font-medium uppercase mt-6 transition-all group-hover:scale-95">
                                {item.title}
                            </p>
                            <p className="text-lg font-[300] transition-all group-hover:scale-95">{item.description}</p></div>
                    </div>
                ))}
            </section>
        </>
    )
}
