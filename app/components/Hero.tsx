'use client';

import { useState, useEffect } from "react";

export function Hero() {
    const images = [
        "/Scroll.jpg",
        "/Scroll1.jpg",
        "/Scroll2.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="w-full relative pt-16">
            <div
                className="h-[650px] w-full bg-cover bg-center transition-all duration-1000"
                style={{
                    backgroundImage: `url("${images[currentIndex]}")`,
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <div className="relative h-full flex items-end justify-center pb-12">
                    <div className="text-center text-white px-4">
                        <h1 className="text-5xl font-bold mb-4">Welcome to Ashwas Church of God</h1>
                        <p className="text-xl mb-8">Join us in worship and fellowship</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
