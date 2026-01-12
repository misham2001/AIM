'use client';

import { useState, useEffect } from "react";
import Image from "next/image";

const PhotoGallery = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(3);
    const [slidePercentage, setSlidePercentage] = useState(100 / 3);

    const slides = [
        {
            id: 1,
            image: '/landscape/IMG_20251213_194954.jpg',
        },
        {
            id: 2,
            image: '/landscape/IMG_20251214_183952.jpg',
        },
        {
            id: 3,
            image: '/landscape/IMG-20251116-WA0053.jpg',
        },
        {
            id: 4,
            image: '/landscape/IMG-20251214-WA0003.jpg',
        },
        {
            id: 5,
            image: '/landscape/IMG-20250816-WA0027.jpg',
        },
        {
            id: 6,
            image: '/landscape/IMG_20251214_182206.jpg',
        },
        {
            id: 7,
            image: '/landscape/IMG_20251214_183928.jpg',
        },
        {
            id: 8,
            image: '/landscape/IMG-20251116-WA0049.jpg',
        },
        {
            id: 9,
            image: '/landscape/IMG_20251214_192607.jpg',
        },
        {
            id: 10,
            image: '/landscape/IMG_20251214_201710.jpg',
        }
    ];

    const updateVisibleSlides = () => {
        if (window.innerWidth < 768) {
            setVisibleSlides(1);
            setSlidePercentage(100);
        } else {
            setVisibleSlides(3);
            setSlidePercentage(100 / 3);
        }
    };

    useEffect(() => {
        updateVisibleSlides();
        window.addEventListener('resize', updateVisibleSlides);
        return () => window.removeEventListener('resize', updateVisibleSlides);
    }, []);

    const next = () => {
        if (currentSlide < slides.length - visibleSlides) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prev = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto px-4 py-12">
                <div className="relative">
                    <div className="relative overflow-hidden rounded-lg shadow-xl bg-white">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * slidePercentage}%)` }}
                        >
                            {slides.map((slide) => (
                                <div
                                    key={slide.id}
                                    className="w-full md:w-1/3 flex-shrink-0 px-2 py-4"
                                >
                                    <div className="rounded-lg overflow-hidden shadow-md h-full">
                                        <div className="relative bg-gray-200 h-48 md:h-64">
                                            <Image
                                                src={slide.image}
                                                alt={`Church landscape ${slide.id}`}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={prev}
                        disabled={currentSlide === 0}
                        className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10 -ml-4 ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={next}
                        disabled={currentSlide >= slides.length - visibleSlides}
                        className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10 -mr-4 ${currentSlide >= slides.length - visibleSlides ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;
