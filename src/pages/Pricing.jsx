import DownPlans from "../components/DownPlans";
import Plans from "../components/Plans";

export default function Pricing() {
    return (
        <>
            <section>
                <section>
                    <div className="px-4 lg:px-0">
                        <div className="py-12">
                            <h3 className="text-center font-bold">Pricing Plans</h3>
                            <h1 className="text-center font-semibold uppercase text-2xl md:text-3xl max-w-lg mx-auto mt-5">
                                <span className="text-primary">no</span> setup cost or any other <span className="text-primary">hidden fees</span>.
                            </h1>
                            <p className="max-w-xl text-center font-[300] mx-auto mt-6">
                                Try our basic plan risk free for 30 days. Switch plans or cancel any time.
                            </p>
                        </div>

                        <Plans />
                    </div>
                </section>

                <DownPlans />
            </section>
        </>
    )
}
