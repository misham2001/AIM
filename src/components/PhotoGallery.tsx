import React, { useState } from "react";

const PhotoGallery = () => {
  const slides = [
    "https://media-hosting.imagekit.io//dad89f2ae095427e/Im1.JPG?Expires=1833732071&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ThmvRoGc5a0cL3kEB9vK7eREswl8atH1O66MsRuNQ2M-d~H8LpZdxlqqy28NIPuKQWXgP9ZSuwYHzLCnPhfMtFCkFYDDcKRhovkPE6ueCilV3ARajU~pzAgMfeRRaHGDVDWLSZAyTanQaGtwO4V61bmZdVSKX3BTu-RQfDp9IoZpWmEqP3IvbRVksEXfyy~w5y~dnq1Qt7WIzmKHkHXairetU5FqhrI939aj89BDm65Q3pynp2lPAaNiW9MKiNTH~8y~YJ2iUVX4ADDoCiO6NKFb9pdhww86DCqUXMyOCQ~hCVkO0j8P~CGO1U5JByvrPC-J5DKWlEL-vUCl6ja4tA__",
    "https://media-hosting.imagekit.io//97c4f04716514f38/Im2.jpg?Expires=1833732214&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=lZdcbuVFdTS1hkVn-htGqAErvjQ~-Bndl564zb6Xbjs7EGWIur16c9xPqSPAH3jLyerV87ji5KbEOkY-FuP~zTo~NZsuzE9wlyy2vm2EVTPXC2OysjxjKb8I2MuIkFrfu6Nwgy6hIT3pQA3YbLC9l8FQ7AThsquP1BzTsH9W~JMViJisnMPF2YrKyrNj69x46E~JWzbW33la~irgk8coAI6yQdKtN6k96AA7e~fsVdRX3RCqccsT4cLmd23uYvM3NiHtYdROr90NL5hgCEnmOGV5VfcaHXuNvlIdpXCy~sNfOWzdGqWFDOTXFu~Ler-jllKBzBPF2exX3yaw7PxzIw__",
    "https://media-hosting.imagekit.io//83913edf0c554646/im3.jpg?Expires=1833732214&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=IJ3TC7QtWN7-uxAWOPFop4FDeOIL8PFg2aNhVdJeulSXpJ3QQRac9nEKpZ8dnIWiEQFs-RIkN~vUgr4bXMuQmT1OXIAbNDB935UtxP1zDquYDbaIXGtKNBVWb3EqEfyn~r4wMRcKalRnntR1QLKJLyeKDfMDcGxoeGXEAnhHTlAl-cQ1p1iqfj7cNgEBZ9a8js~TQqEr6AyPcyF8GO5OG0wcneBl1O77CNGzvNDOpm2ywuP2IbqPHRwTP6Q0La-hoKA62Bz66RjHXvsGabrfhqNnVQ3n3uqwhwZO~3c58sl87LVtHQX5N3feJZVy7COZ1kx7K5y~I3WiVFKgkKOYQg__",
    "https://media-hosting.imagekit.io//5f735a901d444a14/im5.jpg?Expires=1833732214&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=DpNEFYgwwYiSGfjYNdjnNML3OnX2WWCS1~3VdkoZJ2Nj5mxQnyH2nyScAxeqdsyyiGZndL-JVdvleobKwupL~Bwb-KarZ2uwK4ETCEanKxDg-FixIrlBLfcMQ~qcyRC6OKL0sPNXjgLtJY0b3cow2l0e3Wz4LbsrKlxTL3QfibUSqXtlUIXmNxDZZcS8mJALSHOqvSeQeb2hLV5MLGgF6i3Mccn9JMGcsxEUB3nL~8deE~Q3d1VloIFiwQOgFsTo0QcTYzJGvhkdX1aiFaXv~OO6dJxUootJEvJJmut1WzBwPfOmqCBns206FZ1NWuFB96MJ9JgfadmacUQ9BuItBA__",
    "https://media-hosting.imagekit.io//42885cedd6b94ec3/im6.jpg?Expires=1833732214&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=HZSzEMQbLVrW6BmS4es7Lgl6EbtioeiunqLVSvHjBLz91i1hjwQvndN5TlsMdiWiIqXgw2yuQdvaIQyRhf1FOfBHYw6eRyJdd-vVpbb0tXh0YpjwxwHMnXYGKPyCQwLQrQcr-c4qjrtVRMh6H5TjkJSGMd4Xo6P74wxE3d1uvx063Zjx1DoA4Rt-BZ3uLqhckjrVCXc87hrt-2VQqIFmOcKsrtH244eZZ~-hG~PqLcYoLYl19ZDLLexdqMQjPdyowAl4ivOHy9rqpSz5mc0uDxHQmH~kwPRstPAQRpWLRoLQ6rJOTduFb3uBTB1dNlTmmTbVLLREq6T5ZMwMUhpk~w__",
    "https://media-hosting.imagekit.io//42885cedd6b94ec3/im6.jpg?Expires=1833732214&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=HZSzEMQbLVrW6BmS4es7Lgl6EbtioeiunqLVSvHjBLz91i1hjwQvndN5TlsMdiWiIqXgw2yuQdvaIQyRhf1FOfBHYw6eRyJdd-vVpbb0tXh0YpjwxwHMnXYGKPyCQwLQrQcr-c4qjrtVRMh6H5TjkJSGMd4Xo6P74wxE3d1uvx063Zjx1DoA4Rt-BZ3uLqhckjrVCXc87hrt-2VQqIFmOcKsrtH244eZZ~-hG~PqLcYoLYl19ZDLLexdqMQjPdyowAl4ivOHy9rqpSz5mc0uDxHQmH~kwPRstPAQRpWLRoLQ6rJOTduFb3uBTB1dNlTmmTbVLLREq6T5ZMwMUhpk~w__",
    "https://media-hosting.imagekit.io//93f04fb50c3e4ec9/im4.jpg?Expires=1833732214&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=m8NPYmtY~Isw9qJ9w90hYUafo6z-U1MKD1Q90o1aMMpWNAzwF096o48Y4R7Sr0EaV73HnHVtxvnjJK~CNVP7h7Vy01vJjoIKw9X34~S2SpxS~ZxMWAT9fjl5Sle8CXFoRxXnWbh0NrkSFbYjg1kF0B6B1AAF4hMAq4FhVFQ5vMARLZMS5rQGKf85zrcEC~DKxZtYDkK8hMCfNeZhSyXn7b6UvoKn5iU9AbfF-UMM63WFDYOypHSc2lDyfw7LK4~vr908uwVIuWWYZlj9-V27WVxbJUZEi~cLRCpxTM2j2RE0SexE22Het~MR~6BU-C8-bJ11fOFeI6WWhUu2uwi2Gw__",
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
