import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Counter = ({ value }) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        gsap.set(element, { innerHTML: 0 });

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                gsap.to(element, {
                    innerHTML: value,
                    duration: 2,
                    snap: { innerHTML: 1 },
                    ease: 'power1.inOut',
                    modifiers: {
                        innerHTML: (val) => Math.floor(val)
                    }
                });
                observer.disconnect();
            }
        }, { threshold: 0.1 });

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [value]);

    return <span ref={ref} className="counter"></span>;
};

export default Counter;
