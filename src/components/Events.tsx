import Card from "./Card/Card";
import React, { useState } from "react";

export function Events() {
  const events = [

    {
      title: 'Youth Meeting',
      date: 'Every Sunday',
      time: '2:00 PM',
      description: 'Special gathering for young people to grow in faith.'
    },
    {
      title: 'Out Reach',
      date: 'Every Sunday',
      time: '5:00 PM',
      place: 'Perumbakkam',
      description: ''
    },
    {
      title: 'Dawn prayer',
      date: 'Every Morning',
      time: '5:45 AM',
      description: ''
    },
    {
      title: 'Wednesday Prayer',
      date: 'Every Wednesday',
      time: '7:00 PM',
      description: 'Special gathering to grow in faith.'
    },
    {
      title: 'Vigil prayer',
      date: 'Every Friday',
      time: '10:00 PM',
      description: ''
    },
    {
      title: 'Bible Study',
      date: 'Every Wednesday',
      time: '7:00 PM',
      description: 'Dive deep into God\'s word with our community.'
    },
  ];

  const slides = [
      "/src/Assert/Im1.jpg",
      "/src/Assert/Im2.jpg",
      "/src/Assert/Im3.jpg",
      "/src/Assert/Im4.jpg",
      "/src/Assert/Im5.jpg",
      "/src/Assert/Im6.jpg",
      // "/src/Assert/Im1.jpg",
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
    <div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="origin-bottom-left whitespace-nowrap text-4xl font-black uppercase leading-tight sm:text-5xl md:text-6xl md:leading-[1.1] lg:text-2xl lg:leading-[1.1] xl:text-4xl xl:leading-[1.1]"
        >Our schedule
        </h2>

        <div className="flex justify-center pt-10"><Card /></div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
              <p className="text-blue-600 mb-2">{event.date} at {event.time}</p>
              <p className="text-black">
                {event.place}</p>
              <p className="text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </div>


      <div className="relative w-full  lg:max-w-6xl mx-auto mt-6">
        <h1 className="text-2xl font-semibold">Photo Gallery</h1>
        <div className="overflow-hidden rounded-lg">
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
    </div>

  );
}