import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const InfiniteShow = ({ list, format }) => {

    /* Infinite Loop Slideshow */

    const infiniteShow = useRef(null);

    useEffect(() => {
        const infiniteShow = gsap.timeline({ repeat: -1 });
        const slides = document.querySelectorAll('.infinite-show__slide');

        slides.forEach((slide, index) => {
            infiniteShow.fromTo(
                slide,
                { autoAlpha: 0 },
                { autoAlpha: 1, duration: 1, delay: index * 2 }
            );
        });
    }, []);



    return (
        <div className="infinite-show flex" ref={infiniteShow}>
            {list.map((item, index) => (
                <div key={index} className="infinite-show__slide">
                    {format(item)}
                </div>
            ))}
        </div>
    );
};

export default InfiniteShow;
