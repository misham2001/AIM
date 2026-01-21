import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/components/Hero';
import { Events } from '@/app/components/Events';
import { PrayerRequest } from '@/app/components/PrayerRequest';
import Footer from '@/app/components/Footer';
import PhotoGallery from '@/app/components/PhotoGallery';
import Gallery from '@/app/components/Gallery';
import { MinistryGallery } from '@/app/components/MinistryGallery';


export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main>
                <section id="home">
                    <Hero />
                </section>
                <section id="events">
                    <Events />
                </section>
                <section id="photoGallery" className="pt-10">
                    <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight bg-gradient-to-r from-cyan-400 via-blue-600 to-pink-500 bg-clip-text text-transparent md:text-5xl lg:text-6xl">Photo Gallery</h1>
                    <PhotoGallery />
                </section>
                <section className="pb-32">
                    <Gallery />
                </section>

                <section>
                    <MinistryGallery />
                </section>
                <section id="prayer-request" className="bg-gray-50">
                    <PrayerRequest />
                </section>
                <section id="footer">
                    <Footer />
                </section>
            </main>
        </div>
    );
}
