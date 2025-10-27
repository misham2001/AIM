import { useState, useEffect } from "react";

import Scroll from "../Assert/Image/Scroll.jpg";
import Scroll1 from "../Assert/Image/Scroll1.jpg";
import Scroll2 from "../Assert/Image/Scroll2.jpg";

export function Hero() {
  const images = [
    Scroll,
    Scroll1,
    Scroll2,
    "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="container mx-auto px-4 relative pt-16">
      <div
        className="h-[650px] bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url("${images[currentIndex]}")`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Welcome to Ashwas Church of God</h1>
            <p className="text-xl mb-8">Join us in worship and fellowship</p>
          </div>
        </div>
      </div>
    </div>
  );
}
