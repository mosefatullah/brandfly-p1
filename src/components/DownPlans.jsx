import { useState } from "react";


export default function DownPlans() {
    const [formRadio, setFormRadio] = useState("form-youtube");
    return (
        <>
            <section className="bg-black bg-[url('/images/underpricing.png')] text-white bg-cover w-full pb-12 rounded-t-3xl -mt-[280px] pt-[300px] px-4 text-center">
                <h1 className="uppercase text-3xl md:text-4xl font-bold max-w-md mx-auto">
                    Can't find any{" "}
                    <span className="text-secondary">suitable package?</span>
                </h1>

                <p className="text-lg max-w-lg mx-auto my-5">
                    If you cant find any suitable package here you can always ask for a
                    quote by reaching us out. We are here 24/7
                </p>

                <button className="block mx-auto bg-primary text-white text-lg font-semibold py-2 px-8 mt-10 select-none hover:scale-105 active:scale-100 cursor-pointer transition-all">
                    Get a Quote
                </button>
            </section>

            <div className="px-4 md:px-0">
                <section className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto pt-14">
                    <div>
                        <h1 className="uppercase text-3xl md:text-4xl font-bold">
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
                                    className="px-4 py-2.5 border-2 border-black/50 placeholder:text-typography/80"
                                    placeholder="Name"
                                />
                                <input
                                    type="tel"
                                    className="px-4 py-2.5 border-2 border-black/50 placeholder:text-typography/80"
                                    placeholder="Phone Number"
                                />
                            </div>
                            <input
                                type="tel"
                                className="px-4 py-2.5 border-2 border-black/50 placeholder:text-typography/80"
                                placeholder="Email"
                            />
                            <h2 className="font-semibold">I Want Video Editing for</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {["Youtube", "Instagram", "Other"].map((s, i) => (
                                    <label
                                        htmlFor={`form-${s.toLowerCase()}`}
                                        key={i}
                                        className={
                                            "px-4 py-2.5 border-2 border-black/50 placeholder:text-typography/80 flex gap-2 items-center select-none hover:scale-105 active:scale-100" +
                                            (formRadio == `form-${s.toLowerCase()}` &&
                                                " bg-primary !border-primary text-white")
                                        }
                                    >
                                        <input
                                            type="radio"
                                            id={`form-${s.toLowerCase()}`}
                                            className="checked:bg-white text-primary"
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
                                className="px-4 py-2.5 border-2 border-black/50 placeholder:text-typography/80"
                                placeholder="Your Text"
                            ></textarea>

                            <button className="block mx-auto bg-primary text-white text-lg font-semibold py-1.5 px-6 mt-4 select-none hover:scale-105 active:scale-100">
                                Schedule A Call
                            </button>
                        </form>
                    </div>
                </section>
            </div></>
    )
}
