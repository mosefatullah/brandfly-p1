import { useState } from "react";

export default function Plans() {
    const [pricingCheck, setPricingCheck] = useState(false);
    const [pricingRadio, setPricingRadio] = useState("plan-radio-1");

    const plans = [
        {
            name: "plan-radio-1", value: [
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
                    per: "mo",
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
                    per: "mo",
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
                    per: "mo",
                    term: "* Contact us for personalized pricing and services",
                },
            ]
        },
        {
            name: "plan-radio-2", value: [
                {
                    title: "Basic",
                    subtle:
                        "Display stars in Google organic search result and showcase.",
                    features: [
                        "Unlimited video edits every month",
                        "1 active videos at a time",
                        "2-4 business days turnaround",
                        "Dedicated video editor",
                        "Royalty-free music, footage, and assets"
                    ],
                    cost: 6999,
                    discount: 6299,
                    per: "mo",
                },
                {
                    title: "Starter",
                    subtle:
                        "Display stars in Google organic search result and showcase.",
                    features: [
                        "Unlimited video edits every month",
                        "2 active videos at a time",
                        "2-4 business days turnaround",
                        "Dedicated video editor team",
                        "Royalty-free music, footage, and assets"
                    ],
                    cost: 9999,
                    discount: 7999,
                    per: "mo",
                },
                {
                    title: "Premium",
                    subtle:
                        "Display stars in Google organic search result and showcase.",
                    features: [
                        "Unlimited video edits every month",
                        "3 active videos at a time",
                        "2-4 business days turnaround",
                        "Dedicated video editor team",
                        "Royalty-free music, footage, and assets"
                    ],
                    cost: 3500,
                    discount: 2625,
                    per: "mo",
                    term: "* Contact us for personalized pricing and services",
                },
            ]
        },
        {
            name: "plan-radio-3", value: [
                {
                    title: "Basic",
                    subtle:
                        "Display stars in Google organic search result and showcase.",
                    features: [
                        "Unlimited video edits every month",
                        "1 active videos at a time",
                        "1-2 business days turnaround",
                        "Dedicated video editor",
                        "Royalty-free music, footage, and assets"
                    ],
                    cost: 1500,
                    discount: 1350,
                    per: "mo",
                },
                {
                    title: "Starter",
                    subtle:
                        "Display stars in Google organic search result and showcase.",
                    features: [
                        "Unlimited video edits every month",
                        "2 active videos at a time",
                        "1-2 business days turnaround",
                        "Dedicated video editor team",
                        "Royalty-free music, footage, and assets"
                    ],
                    cost: 1900,
                    discount: 1650,
                    per: "mo",
                },
                {
                    title: "Premium",
                    subtle:
                        "Display stars in Google organic search result and showcase.",
                    features: [
                        "Unlimited video edits every month",
                        "3 active videos at a time",
                        "2-4 business days turnaround",
                        "Dedicated video editor team",
                        "Royalty-free music, footage, and assets"
                    ],
                    cost: 2800,
                    discount: 2100,
                    per: "mo",
                    term: "* Contact us for personalized pricing and services",
                },
            ]
        },
        {
            name: "plan-radio-4", value: [
                {
                    title: "TikTok / Reel / YouTube Short",
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
                    cost: 200,
                    per: "video"
                },
                {
                    title: "Long-Form Video Edit",
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
                    cost: 750,
                    per: "video"
                },
            ]
        }
    ];
    const currentPlans = plans.filter(({ name }) => pricingRadio == name)[0]?.value;
    return (
        <>
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
                        checked={pricingCheck}
                        onChange={(e) => setPricingCheck(e.currentTarget.checked)}
                        className="sr-only peer"
                    />
                    <div className="relative w-12 py-3 border-2 border-primary peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-primary after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
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

            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:justify-between gap-4 py-12">
                <div className="lg:me-6">
                    <h1 className="font-bold uppercase text-2xl md:text-3xl md:max-w-[200px]">
                        Pick Your <span className="text-primary">Plan</span>
                    </h1>

                    <div className="my-8">
                        {[
                            {
                                id: "plan-radio-1",
                                label: "Monthly Video Editing Service"
                            },
                            {
                                id: "plan-radio-2",
                                label: "Unlimited Long-Form Video"
                            },
                            {
                                id: "plan-radio-3",
                                label: "Unlimited Reels/Tiktok/Shorts"
                            },
                            {
                                id: "plan-radio-4",
                                label: "Single Video Edits"
                            },
                        ].map((p, i) => (
                            <div className="flex items-center my-2 whitespace-nowrap" key={i}>
                                <input
                                    type="radio"
                                    className={
                                        "w-4 h-4 checked:bg-primary text-primary" + (pricingRadio == p.id && " font-semibold")
                                    }
                                    id={p.id}
                                    checked={pricingRadio == p.id}
                                    onChange={() => setPricingRadio(p.id)}
                                />
                                <label
                                    htmlFor={p.id}
                                    className={"ms-2 font-medium" + (pricingRadio == p.id && " text-primary font-semibold")}
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
                {
                    currentPlans?.map((p, i) => (
                        <div
                            key={i}
                            className="border-[2.5px] border-black p-4 flex flex-col justify-between bg-white lg:max-w-xs"
                        >
                            <div>
                                <h1 className="font-semibold uppercase text-3xl text-primary">
                                    {p.title}
                                </h1>

                                <p className="mt-4 font-semibold">{p.subtle}</p>

                                <ul className="ms-4 mt-6 list-disc font-[300]">
                                    {p.features.map((f, ii) => (
                                        <li key={ii} className="my-2">
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-12 text-center">
                                <p className="text-2xl" hidden={!p.discount}>
                                    <del>${p.cost}</del>
                                </p>
                                <div className="flex gap-0.5 justify-center items-end">
                                    <p className="text-3xl font-bold text-primary">
                                        ${p.discount || p.cost}
                                    </p>
                                    <p className="font-semibold text-lg">/{p.per}</p>
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
        </>
    )
}