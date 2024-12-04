import { useState, useEffect, useCallback, useRef } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const PhotoGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement | null>(null); // Define the type of modalRef

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
    if (e.key === "Escape") {
      setIsModalOpen(false);
    } else if (e.key === "ArrowLeft") {
      navigateImages("prev");
    } else if (e.key === "ArrowRight") {
      navigateImages("next");
    }
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
    <div className="bg-gray-100 ">
        <h1 className="text-center pt-10 text-4xl font-sans"> Photo Booth </h1>
   
        <div className="flex  justify-around">
            
            <div className=" p-8 flex items-center justify-center ">
            <div
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer transform transition-transform duration-300 hover:scale-105"
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === "Enter" && setIsModalOpen(true)}
            >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm">
                <div className="relative h-64">
                    <img
                    src={`https://${images[0].url}`}
                    alt={images[0].alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        const img = e.target as HTMLImageElement; 
                        img.src = "https://images.unsplash.com/photo-1682687220199-d0124f48f95b";
                        img.alt = "Fallback Image";
                    }}
                    />
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Image Gallery</h3>
                    <p className="text-gray-600">Click to view more images</p>
                </div>
                </div>
            </div>

            {isModalOpen && (
                <div
                className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                onClick={handleClickOutside}
                >
                <div
                    ref={modalRef}
                    className="bg-white rounded-lg max-w-4xl w-full relative animate-fadeIn"
                >
                    <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute right-4 top-4 text-gray-600 hover:text-gray-800 z-10"
                    aria-label="Close modal"
                    >
                    <FiX size={24} />
                    </button>

                    <div className="relative h-[60vh]">
                    <img
                        src={`https://${images[currentImageIndex].url}`}
                        alt={images[currentImageIndex].alt}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                        const img = e.target as HTMLImageElement; // Fix casting issue
                        img.src = "https://images.unsplash.com/photo-1682687220199-d0124f48f95b";
                        img.alt = "Fallback Image";
                        }}
                    />

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

                    <div className="p-4 border-t">
                    <p className="text-center text-gray-600">
                        Image {currentImageIndex + 1} of {images.length}
                    </p>
                    </div>
                </div>
                </div>
            )}
            </div>

            <div className="flex items-center justify-center">
            <div
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer transform transition-transform duration-300 hover:scale-105"
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === "Enter" && setIsModalOpen(true)}
            >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm">
                <div className="relative h-64">
                    <img
                    src={`https://${images[0].url}`}
                    alt={images[0].alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        const img = e.target as HTMLImageElement; // Fix casting issue
                        img.src = "https://images.unsplash.com/photo-1682687220199-d0124f48f95b";
                        img.alt = "Fallback Image";
                    }}
                    />
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Image Gallery</h3>
                    <p className="text-gray-600">Click to view more images</p>
                </div>
                </div>
            </div>

            {isModalOpen && (
                <div
                className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                onClick={handleClickOutside}
                >
                <div
                    ref={modalRef}
                    className="bg-white rounded-lg max-w-4xl w-full relative animate-fadeIn"
                >
                    <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute right-4 top-4 text-gray-600 hover:text-gray-800 z-10"
                    aria-label="Close modal"
                    >
                    <FiX size={24} />
                    </button>

                    <div className="relative h-[60vh]">
                    <img
                        src={`https://${images[currentImageIndex].url}`}
                        alt={images[currentImageIndex].alt}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                        const img = e.target as HTMLImageElement; // Fix casting issue
                        img.src = "https://images.unsplash.com/photo-1682687220199-d0124f48f95b";
                        img.alt = "Fallback Image";
                        }}
                    />

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

                    <div className="p-4 border-t">
                    <p className="text-center text-gray-600">
                        Image {currentImageIndex + 1} of {images.length}
                    </p>
                    </div>
                </div>
                </div>
            )}
            </div>
        </div>
    </div>
  );
};

export default PhotoGallery;
