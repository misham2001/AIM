import { useState, useEffect } from "react";

const PhotoGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [slidePercentage, setSlidePercentage] = useState(100 / 3);

  const slides = [
    { 
      id: 1, 
      image: 'https://picsum.photos/id/10/800/600', 
    },
    { 
      id: 2, 
      image: 'https://picsum.photos/id/11/800/600', 
    },
    { 
      id: 3, 
      image: 'https://picsum.photos/id/12/800/600', 
    },
    { 
      id: 4, 
      image: 'https://picsum.photos/id/13/800/600', 
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

  // const goTo = (index: number) => {
  //   if (index <= slides.length - visibleSlides) {
  //     setCurrentSlide(index);
  //   } else {
  //     setCurrentSlide(slides.length - visibleSlides);
  //   }
  // };

  const handleImageError = (slide: typeof slides[0]) => {
    slide.image = 'https://picsum.photos/id/20/800/600';
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
                    <div className="bg-gray-200 h-48 md:h-64 flex items-center justify-center">
                      <img 
                        src={slide.image} 
                        className="w-full h-full object-cover"
                        onError={() => handleImageError(slide)}
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
            className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10 -ml-4 ${
              currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={next}
            disabled={currentSlide >= slides.length - visibleSlides}
            className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10 -mr-4 ${
              currentSlide >= slides.length - visibleSlides ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* <div className="flex justify-center mt-4 space-x-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goTo(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;

