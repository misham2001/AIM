'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <nav className="bg-white shadow-lg fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Left side - Church logo and name */}
                    <div className="flex items-center">
                        <button onClick={() => scrollToSection('home')} className="flex items-center space-x-2">
                            <div className="flex items-center">
                                <Image src="/logo.png" alt="logo" width={64} height={64} className="rounded-2xl object-contain" />
                            </div>
                            <span className="text-xl font-bold text-gray-900">Ashwas Church of God</span>
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a onClick={() => scrollToSection('events')} className="group relative inline-block p-2.5 outline-none no-underline bg-gradient-to-br from-purple-500 to-red-500 text-lg text-transparent bg-clip-text tracking-wide focus:outline-none transition-all duration-300 transform hover:from-gray-700 hover:to-gray-700 cursor-pointer">
                            <span className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-br from-purple-500 to-red-500 opacity-0 transition-all duration-300 transform -translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0" aria-hidden="true" />
                            Events
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-br from-purple-500 to-red-500 opacity-0 transition-all duration-300 transform translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0" aria-hidden="true" />
                        </a>

                        <a onClick={() => scrollToSection('prayer-request')} className="group relative inline-block p-2.5 outline-none no-underline bg-gradient-to-br from-purple-500 to-red-500 text-lg text-transparent bg-clip-text tracking-wide focus:outline-none transition-all duration-300 transform hover:from-gray-700 hover:to-gray-700 cursor-pointer">
                            <span className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-br from-purple-500 to-red-500 opacity-0 transition-all duration-300 transform -translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0" aria-hidden="true" />
                            Prayer Request
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-br from-purple-500 to-red-500 opacity-0 transition-all duration-300 transform translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0" aria-hidden="true" />
                        </a>

                        <a href="/photo-gallery" className="group relative inline-block p-2.5 outline-none no-underline bg-gradient-to-br from-purple-500 to-red-500 text-lg text-transparent bg-clip-text tracking-wide focus:outline-none transition-all duration-300 transform hover:from-gray-700 hover:to-gray-700 cursor-pointer">
                            <span className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-br from-purple-500 to-red-500 opacity-0 transition-all duration-300 transform -translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0" aria-hidden="true" />
                            Photo Gallery
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-br from-purple-500 to-red-500 opacity-0 transition-all duration-300 transform translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0" aria-hidden="true" />
                        </a>

                    </div>

                    {/* Mobile Menu Button and Logo */}
                    <div className="md:hidden flex items-center space-x-3">
                        <Image src="/logo.png" alt="logo" width={48} height={48} className="rounded-lg object-contain" />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <button onClick={() => scrollToSection('events')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600">
                            Events
                        </button>
                        <button onClick={() => scrollToSection('prayer-request')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600">
                            Prayer Request
                        </button>
                        <a href="/photo-gallery" className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600">
                            Photo Gallery
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
