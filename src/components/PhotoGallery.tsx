import React, { useState } from "react";

const PhotoGallery = () => {
  const slides = [
    "https://media-hosting.imagekit.io//dad89f2ae095427e/Im1.JPG?Expires=1833732071&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ThmvRoGc5a0cL3kEB9vK7eREswl8atH1O66MsRuNQ2M-d~H8LpZdxlqqy28NIPuKQWXgP9ZSuwYHzLCnPhfMtFCkFYDDcKRhovkPE6ueCilV3ARajU~pzAgMfeRRaHGDVDWLSZAyTanQaGtwO4V61bmZdVSKX3BTu-RQfDp9IoZpWmEqP3IvbRVksEXfyy~w5y~dnq1Qt7WIzmKHkHXairetU5FqhrI939aj89BDm65Q3pynp2lPAaNiW9MKiNTH~8y~YJ2iUVX4ADDoCiO6NKFb9pdhww86DCqUXMyOCQ~hCVkO0j8P~CGO1U5JByvrPC-J5DKWlEL-vUCl6ja4tA__",
    "/src/Assert/Im2.jpg",
    "/src/Assert/Im3.jpg",
    "/src/Assert/Im4.jpg",
    "/src/Assert/Im5.jpg",
    "/src/Assert/Im6.jpg",
    "/src/Assert/Im1.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 3;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : slides.length - slidesToShow));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < slides.length - slidesToShow ? prev + 1 : 0));
  };

  return (
    <div className="relative w-full  lg:max-w-6xl mx-auto mt-6">
      <h1 className="text-2xl font-semibold">Photo Gallery</h1>
      <div className="overflow-hidden rounded-lg mt-4">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex-none lg:w-1/3 px-1">
              <div className="flex justify-center items-center h-80">
                <a href="">
                  <img
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-72 object-cover rounded-lg"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute inset-y-0 start-0 flex items-center justify-center w-10 h-full text-gray-800"
      >
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6"></path>
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute inset-y-0 end-0 flex items-center justify-center w-10 h-full text-gray-800"
      >
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </button>
    </div>
  );
};

export default PhotoGallery;
