

"use client"


import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils"; // Helper for conditional classes
import Event1Image from "/assets/1.jpg";
import Event2Image from "../../app/public/assets/event-gallery/event-gallery-2.jpg";
import Event3Image from "../../app/public/assets/event-gallery/event-gallery-3.jpg";
import Event4Image from "../../app/public/assets/event-gallery/event-gallery-4.jpg";
import Event5Image from "../../app/public/assets/event-gallery/event-gallery-5.jpg";
import Event6Image from "../../app/public/assets/event-gallery/event-gallery-6.jpg";
import Event7Image from "../../app/public/assets/event-gallery/event-gallery-7.jpg";
import Event8Image from "../../app/public/assets/event-gallery/event-gallery-8.jpg";
import Event9Image from "../../app/public/assets/event-gallery/event-gallery-9.jpg";

// Define your image type and data array for gallery images
interface ImageData {
  src: string;
  alt: string;
}

const galleryImages: ImageData[] = [
  { src: "/assets/1.jpg", alt: "Gallery Image 1" },
  { src: "/assets/2.jpg", alt: "Gallery Image 2" },
  { src: "/assets/3.jpg", alt: "Gallery Image 3" },
  { src: "/assets/4.jpg", alt: "Gallery Image 4" },
  { src: "/assets/5.jpg", alt: "Gallery Image 5" },
  { src: "/assets/6.jpg", alt: "Gallery Image 6" },
  { src: "/assets/7.jpg", alt: "Gallery Image 7" },
  { src: "/assets/8.jpg", alt: "Gallery Image 8" },
  { src: "/assets/9.jpg", alt: "Gallery Image 9" },
];

export default function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null); // Selected image state
  const modalRef = useRef<HTMLDivElement | null>(null); // Ref for modal

  // Automatically slide images to the left every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 3000); // Adjust the interval time as needed
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  // Get the 5 images to display with the centered image highlighted
  const visibleImages = [
    galleryImages[(currentIndex - 2 + galleryImages.length) % galleryImages.length],
    galleryImages[(currentIndex - 1 + galleryImages.length) % galleryImages.length],
    galleryImages[currentIndex],
    galleryImages[(currentIndex + 1) % galleryImages.length],
    galleryImages[(currentIndex + 2) % galleryImages.length],
  ];

  // Handle image click to open the modal
  const handleImageClick = (image: ImageData) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // Use useCallback to memoize the handleOutsideClick function
  const handleOutsideClick = useCallback((e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  }, []); // Memoize this function, no dependencies as modalRef doesn't change

  // Add and remove event listener for clicking outside
  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isModalOpen, handleOutsideClick]); // Ensure handleOutsideClick is referenced correctly

  return (
    <div className="flex flex-col items-center" id="gallery">
      <h2 className="text-3xl font-bold text-black text-center mb-0 mt-12">Our Story in <span className="text-black">Frames</span></h2>
      <div className="h-1 w-16 bg-red-500 mt-2 mb-6 mx-auto"></div>
      <div className="relative w-full max-w-6xl flex overflow-hidden justify-center">
        <div className="flex transition-transform duration-500 ease-in-out">
          {visibleImages.map((image, index) => {
            const isCenter = index === 2; // Center image is the third in visibleImages array
            return (
              <div
                key={index}
                className={cn(
                  "flex-shrink-0 transition-all duration-500 ease-in-out",
                  isCenter ? "w-80 h-42 border-4 border-red-500" : "mt-6 w-60 h-32 border-none opacity-80 p-2"
                )}
                onClick={() => handleImageClick(image)} // Click to open modal
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={isCenter ? 192 : 128}
                  height={isCenter ? 192 : 128}
                  className="object-cover w-full cursor-pointer" // Add cursor-pointer for better UX
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Indicator Dots */}
      <div className="flex space-x-2 mt-4">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-2 h-2 mb-4 mt-2 rounded-full border-2",
              index === currentIndex
                ? "bg-red-500 border-red-500"
                : "bg-white border-gray-300"
            )}
          />
        ))}
      </div>

      {/* Modal for larger image view */}
      {isModalOpen && selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div
            ref={modalRef}
            className="relative max-w-3xl max-h-[90%]  bg-white rounded-md"
          >
            <button
              className="absolute top-2 right-2 text-white font-bold text-xl"
              onClick={closeModal}
            >
              ×
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={600} // Adjust size for larger view
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}