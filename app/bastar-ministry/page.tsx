'use client';

import { HeroSection } from '@/components/ui/hero-section-2';
import { Navbar } from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

export default function BasarMinistryPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="pt-20">
                <HeroSection
                    logo={{
                        url: "/logo.png",
                        alt: "Ashwas Church of God",
                        text: "Ashwas Church of God"
                    }}
                    slogan="Serving the Bastar Tribal Community"
                    title={
                        <>
                            Bastar Ministry
                            <br />
                            <span className="text-primary">& Outreach</span>
                        </>
                    }
                    subtitle="Since 1893, Christian missionaries have been serving the Bastar region, bringing education, healthcare, and spiritual guidance to remote tribal communities. Our mission continues this legacy of compassion, transforming lives through faith, hope, and action."
                    backgroundImage="/ministry.jpg"
                    contactInfo={{
                        website: "ashwaschurch.org",
                        phone: "+91 XXX XXX XXXX",
                        address: "Bastar, Chhattisgarh, India"
                    }}
                />

                {/* About Section */}
                <section id="about" className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                                Our Mission in Bastar
                            </h2>
                            <div className="h-1 w-20 bg-primary mb-8"></div>
                            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                                <p>
                                    The Bastar region, located in Chhattisgarh, India, is home to diverse tribal
                                    communities with rich cultural heritage. Our ministry is dedicated to serving
                                    these communities through education, healthcare, and community development
                                    while respecting their traditions and values.
                                </p>
                                <p>
                                    We work tirelessly to bring positive change to remote areas where access
                                    to basic services is limited. Through our outreach programs, we provide
                                    educational support, medical camps, and spiritual guidance to those in need.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Programs Section */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
                            Our Programs
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Education</h3>
                                <p className="text-neutral-600">
                                    Providing educational support and resources to children in remote tribal villages.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Healthcare</h3>
                                <p className="text-neutral-600">
                                    Medical outreach programs bringing essential healthcare to underserved communities.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Community</h3>
                                <p className="text-neutral-600">
                                    Building strong community foundations through sustainable development programs.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Spiritual Growth</h3>
                                <p className="text-neutral-600">
                                    Nurturing spiritual growth through fellowship, worship, and pastoral care.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Back to Home */}
                <section className="py-12 bg-white">
                    <div className="container mx-auto px-4 text-center">
                        <Link
                            href="/"
                            className="inline-flex items-center px-6 py-3 bg-neutral-900 text-white rounded-md hover:bg-neutral-800 transition-colors"
                        >
                            ← Back to Home
                        </Link>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
}
