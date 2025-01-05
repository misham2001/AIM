import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
// Type definition for a card
interface Card {
  id: number;
  title: string;
  description: string;
  mainImage: string;
  additionalImages: string[];
}

const PhotoGallery: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const cards: Card[] = [
    {
      id: 1,
      title: "Mountain Retreat",
      description: "Luxurious mountain cabin with panoramic views.",
      mainImage: "images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
      additionalImages: [
        "images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
        "images.unsplash.com/photo-1542718610-a1d656d1884c",
        "images.unsplash.com/photo-1586375300773-8384e3e4916f",
      ],
    },
    {
      id: 2,
      title: "Beachfront Villa",
      description: "Elegant villa with direct beach access.",
      mainImage: "images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      additionalImages: [
        "images.unsplash.com/photo-1520250497591-112f2f40a3f4",
        "images.unsplash.com/photo-1510414842594-a61c69b5ae57",
        "images.unsplash.com/photo-1507525428034-b723cf961d3e",
      ],
    },
    {
      id: 3,
      title: "Shrismas",
      description: "Modern city living at its finest.",
      mainImage: "images.unsplash.com/photo-1505873242700-f289a29e1e0f",
      additionalImages: [
        "images.unsplash.com/photo-1505873242700-f289a29e1e0f",
        "images.unsplash.com/photo-1522708323590-d24dbb6b0267",
        "images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      ],
    },
  ];

  const handleCardClick = (card: Card) => {
    setSelectedCard(card);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    if (selectedCard) {
      setCurrentImageIndex((prev) =>
        prev === selectedCard.additionalImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedCard) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedCard.additionalImages.length - 1 : prev - 1
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") handleCloseModal();
    if (e.key === "ArrowRight") handleNextImage();
    if (e.key === "ArrowLeft") handlePrevImage();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={() => handleCardClick(card)}
            onKeyDown={(e) => e.key === "Enter" && handleCardClick(card)}
            tabIndex={0}
            role="button"
            aria-label={`View details for ${card.title}`}
          >
            <img
              src={`https://${card.mainImage}`}
              alt={card.title}
              className="w-full h-48 object-cover"
              onError={(e) =>
                ((e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1560518883-ce09059eeffa")
              }
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCard && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleCloseModal}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-lg p-4 max-w-4xl w-full mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              onClick={handleCloseModal}
              aria-label="Close modal"
            >
              <FiX size={24} />
            </button>

            {/* Modal Title */}
            <h2 className="text-2xl font-bold mb-4">{selectedCard.title}</h2>

            {/* Image Viewer */}
            <div className="relative">
              <img
                src={`https://${selectedCard.additionalImages[currentImageIndex]}`}
                alt={`${selectedCard.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-96 object-cover rounded-lg"
                onError={(e) =>
                  ((e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1560518883-ce09059eeffa")
                }
              />

              {/* Navigation Buttons */}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
                onClick={handlePrevImage}
                aria-label="Previous image"
              >
                <BsChevronLeft size={24} />
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
                onClick={handleNextImage}
                aria-label="Next image"
              >
                <BsChevronRight size={24} />
              </button>
            </div>

            {/* Image Dots */}
            <div className="flex justify-center mt-4">
              {selectedCard.additionalImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 mx-1 rounded-full ${
                    currentImageIndex === index
                      ? "bg-blue-500"
                      : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
