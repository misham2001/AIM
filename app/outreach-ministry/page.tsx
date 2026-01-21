'use client';

import { HeroSection } from '@/components/ui/hero-section-2';
import { Navbar } from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

export default function OutreachMinistryPage() {

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
                    slogan="Extending Love Beyond Our Walls"
                    title={
                        <>
                            Outreach
                            <br />
                            <span className="text-primary">Ministry</span>
                        </>
                    }
                    subtitle="Reaching out to communities with love, compassion, and the message of hope. Our outreach programs bring practical help and spiritual guidance to those in need."
                    backgroundImage="/Outreach.jpg"
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
                                About Our Outreach Ministry
                            </h2>
                            <div className="h-1 w-20 bg-primary mb-8"></div>
                            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                                <p>
                                    Our Outreach Ministry is dedicated to extending the love of Christ beyond
                                    the walls of our church. We believe that faith without action is incomplete,
                                    and we are committed to serving our community through practical acts of kindness
                                    and compassion.
                                </p>
                                <p>
                                    Through various programs and initiatives, we reach out to the marginalized,
                                    the hungry, the homeless, and those in need of spiritual guidance. Our goal
                                    is to be the hands and feet of Jesus in our community.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Programs Section */}
                <section id="programs" className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
                            Our Outreach Programs
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Food Distribution</h3>
                                <p className="text-neutral-600">
                                    Weekly food distribution programs providing groceries and meals to families in need.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Home Visits</h3>
                                <p className="text-neutral-600">
                                    Pastoral visits to homes for prayer, counseling, and spiritual support.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Bible Study Groups</h3>
                                <p className="text-neutral-600">
                                    Community Bible study groups meeting in neighborhoods for fellowship and learning.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Healthcare Camps</h3>
                                <p className="text-neutral-600">
                                    Free medical camps providing basic healthcare services to underserved communities.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Youth Programs</h3>
                                <p className="text-neutral-600">
                                    Mentorship and activities for young people to grow in faith and leadership.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Community Events</h3>
                                <p className="text-neutral-600">
                                    Special events and celebrations bringing the community together in fellowship.
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
