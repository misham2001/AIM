
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Events } from './components/Events';
import { PrayerRequest } from './components/PrayerRequest';
import { Contact } from './components/Contact';
import Footer from './components/Footer';
import PhotoGallery from './components/PhotoGallery';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="events" className="py-16">
          <Events />
        </section>
        <section id="photoGallery" className="py-16">
          <PhotoGallery/>
        </section>
        <section id="prayer-request" className="bg-gray-50 py-16">
          <PrayerRequest />
        </section>
        <section id="contact" className="py-16">
          <Contact />
        </section>
        <section id="footer" className="">
          <Footer/>
        </section>
      </main>
    </div>
  );
}

export default App;