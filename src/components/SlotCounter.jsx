import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Counter = ({ value }) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Initialize GSAP to set the innerHTML to 0
        gsap.set(element, { innerHTML: 0 });

        // Create an intersection observer
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                // Animate the counting
                const duration = 2; // Duration of the counting animation
                const startValue = 0;
                const endValue = value;

                gsap.to(element, {
                    innerHTML: endValue,
                    duration: duration,
                    snap: { innerHTML: 1 }, // Snap to whole numbers
                    ease: 'power1.inOut',
                    modifiers: {
                        innerHTML: (val) => Math.floor(val) // Ensure innerHTML is an integer
                    }
                });

                // Stop observing after starting
                observer.disconnect();
            }
        }, { threshold: 0.1 });

        observer.observe(element);

        return () => {
            observer.disconnect(); // Cleanup observer on unmount
        };
    }, [value]);

    return <span ref={ref} className="counter"></span>;
};

export default Counter;
