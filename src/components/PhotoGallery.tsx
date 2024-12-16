import { useState, useEffect, useCallback, useRef } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const PhotoGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const images = [
    {
      id: 1,
      url: "images.unsplash.com/photo-1682687220067-dced9a881b56",
      alt: "Modern Architecture"
    },
    {
      id: 2,
      url: "images.unsplash.com/photo-1682687221038-404670f8439c",
      alt: "Urban Landscape"
    },
    {
      id: 3,
      url: "images.unsplash.com/photo-1682687220199-d0124f48f95b",
      alt: "City Skyline"
    }
  ];

  const handleKeyDown = useCallback((e: { key: string }) => {
    if (e.key === "Escape") setIsModalOpen(false);
    if (e.key === "ArrowLeft") navigateImages("prev");
    if (e.key === "ArrowRight") navigateImages("next");
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isModalOpen, handleKeyDown]);

  const navigateImages = (direction: string) => {
    if (direction === "next") {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-center pt-8 text-3xl md:text-4xl font-sans font-bold">Photo Booth</h1>

      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-8">
        {images.map((image, index) => (
          <div
            key={image.id}
            onClick={() => {
              setCurrentImageIndex(index);
              setIsModalOpen(true);
            }}
            className="cursor-pointer transform transition-transform duration-300 hover:scale-105"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48 md:h-64 lg:h-72">
                <img
                  src={`https://${image.url}`}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src =
                      "https://images.unsplash.com/photo-1682687220199-d0124f48f95b";
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">Image {index + 1}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal View */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={handleClickOutside}
        >
          <div
            ref={modalRef}
            className="bg-white rounded-lg w-full max-w-3xl relative animate-fadeIn"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 text-gray-600 hover:text-gray-800 z-10"
              aria-label="Close modal"
            >
              <FiX size={24} />
            </button>

            <div className="relative h-56 md:h-72 lg:h-[70vh]">
              <img
                src={`https://${images[currentImageIndex].url}`}
                alt={images[currentImageIndex].alt}
                className="w-full h-full object-contain"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src =
                    "https://images.unsplash.com/photo-1682687220199-d0124f48f95b";
                }}
              />

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImages("prev")}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
                aria-label="Previous image"
              >
                <FiChevronLeft size={24} />
              </button>
              <button
                onClick={() => navigateImages("next")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
                aria-label="Next image"
              >
                <FiChevronRight size={24} />
              </button>
            </div>

            {/* Footer */}
            <div className="p-4 border-t">
              <p className="text-center text-gray-600">
                Image {currentImageIndex + 1} of {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
