'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageContentSectionProps {
    image: string;
    title: string;
    description: string;
    buttonText?: string;
    detailedContent: {
        title: string;
        content: string;
        points?: string[];
        images?: string[]; // Array of images for the slider
    };
    imagePosition?: 'left' | 'right';
}

export default function ImageContentSection({
    image,
    title,
    description,
    buttonText = 'Learn More',
    detailedContent,
    imagePosition = 'left'
}: ImageContentSectionProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const modalImages = detailedContent.images || [image];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % modalImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + modalImages.length) % modalImages.length);
    };

    return (
        <>
            <div className="w-full py-16 bg-gradient-to-br from-gray-50 to-white">
                <div className="bg-white container mx-auto px-4 py-12 rounded-2xl shadow-lg">
                    <div className={`flex flex-col ${imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
                        {/* Image Side */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                                <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-1/2 space-y-6">
                            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                                {title}
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {description}
                            </p>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-300"
                            >
                                <span className="relative z-10">{buttonText}</span>
                                <svg
                                    className="relative z-10 w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Popup with Image Slider */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
                    <div className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden bg-white rounded-3xl shadow-2xl transform animate-slideUp">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200 z-20"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Modal Content - Split Layout */}
                        <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
                            {/* Left Side - Image Slider */}
                            <div className="w-full lg:w-1/2 relative bg-gray-900 flex items-center justify-center">
                                <div className="relative w-full h-[300px] lg:h-[600px]">
                                    <Image
                                        src={modalImages[currentSlide]}
                                        alt={`Slide ${currentSlide + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Slider Controls */}
                                {modalImages.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevSlide}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                                        >
                                            <ChevronLeft className="w-6 h-6 text-gray-800" />
                                        </button>
                                        <button
                                            onClick={nextSlide}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                                        >
                                            <ChevronRight className="w-6 h-6 text-gray-800" />
                                        </button>

                                        {/* Slide Indicators */}
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                            {modalImages.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setCurrentSlide(index)}
                                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide
                                                        ? 'bg-white w-8'
                                                        : 'bg-white/50 hover:bg-white/75'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Right Side - Content */}
                            <div className="w-full lg:w-1/2 overflow-y-auto p-8 lg:p-12">
                                <h3 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                                    {detailedContent.title}
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    {detailedContent.content}
                                </p>

                                {detailedContent.points && detailedContent.points.length > 0 && (
                                    <div className="space-y-4">
                                        <h4 className="text-xl font-semibold text-gray-800 mb-4">Key Highlights:</h4>
                                        <ul className="space-y-3">
                                            {detailedContent.points.map((point, index) => (
                                                <li key={index} className="flex items-start">
                                                    <svg
                                                        className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-1"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    <span className="text-gray-700">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out;
                }
                .animate-slideUp {
                    animation: slideUp 0.3s ease-out;
                }
            `}</style>
        </>
    );
}
