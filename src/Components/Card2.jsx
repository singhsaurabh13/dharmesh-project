import React, { useState, useEffect } from "react";
import img from "../assets/pic7.jpg"; 
import man from "../assets/pic6.jpg"; 
import man1 from "../assets/pic5.jpg";
import bgImage from "../assets/background2.jpg"; // Background image

const images = [
  {
    src: img,
    title: "Master the Art of Dhanurvidya",
    description: "Learn the ancient science of archery and self-discipline.",
    subDescription: "Train under expert gurus and refine your skills with precision.",
  },
  {
    src: man,
    title: "Develop Mental and Physical Strength",
    description: "Dhanurvidya is more than just a martial art—it's a way of life.",
    subDescription: "Enhance focus, strength, and agility with our advanced programs.",
  },
  {
    src: man1,
    title: "Connect with Our Rich Heritage",
    description: "Explore the cultural and spiritual roots of Dhanurvidya.",
    subDescription: "Participate in traditional rituals and gain deeper insights into this revered practice.",
  },
];

const Card2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div 
      className="bg-fixed bg-cover py-16" 
      style={{ backgroundImage: `url(${bgImage})` }} // Setting the background image
    >
      {/* Heading Section */}
      <div className="text-center font-bold border-b border-gray-400 py-7 border-dotted mb-8">
        <h1 className="text-2xl md:text-4xl lg:text-5xl mx-auto text-white">
          Discover{" "}
          <span className="text-yellow-400">
            the power of ancient martial arts
          </span>{" "}
          and unlock your potential
        </h1>
      </div>

      <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[70vh] overflow-hidden flex md:flex-row-reverse items-center px-16 ">
        <div className="w-full md:w-1/2 h-full">  
          <img
            src={images[currentIndex].src}
            alt={`Carousel image ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start p-4 md:p-8 bg-opacity-90 text-gray-900 ml-12">
          <div className="flex flex-col items-start w-full text-white space-y-2 md:space-y-4">
            <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold">
              {images[currentIndex].title}
            </h1>

            <h1 className="text-sm md:text-xl lg:text-2xl font-medium text-gray-300 mt-2 leading-relaxed">
              {images[currentIndex].description}
            </h1>

            <h1 className="text-sm md:text-xl lg:text-2xl font-medium text-gray-300 mt-1">
              {images[currentIndex].subDescription}
            </h1>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="mt-7 px-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-xl transform transition-transform duration-500 hover:scale-105 p-4"
          >
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              className="w-full h-56 object-cover rounded-t-lg transition-transform duration-500 hover:scale-105"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-900">
                {image.title}
              </h2>
              <p className="text-sm text-gray-700 mt-2">
                {image.description}
              </p>
              <p className="text-sm text-gray-700 mt-1">
                {image.subDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card2;
