
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Events } from './components/Events';
import { PrayerRequest } from './components/PrayerRequest';
import Footer from './components/Footer';
import PhotoGallery from './components/PhotoGallery';
import { TextParallaxContentExample } from './components/TextParallaxContentExample';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="events" className="">
          <Events />
        </section>
        <section id="photoGallery" className="py-16">
          <PhotoGallery/>
        </section>
        <section id="" className="py-16">
          <Gallery/>
        </section>
        <section id="" className="bg-gray-10  0">
          <TextParallaxContentExample/>
        </section>
        <section id="prayer-request" className="bg-gray-50 ">
          <PrayerRequest />
        </section>
      
        <section id="footer" className="">
          <Footer/>
        </section>
      </main>
    </div>
  );
}

export default App;