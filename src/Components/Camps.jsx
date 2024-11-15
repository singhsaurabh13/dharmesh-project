import React, { useState, useEffect } from "react";
import img1 from "../assets/pic1.jpg"; 
import img2 from "../assets/pic2.jpg"; 
import img3 from "../assets/pic3.jpg"; 
import logo4 from '../assets/logo4.jpg';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';
import pic5 from '../assets/pic5.jpg';
import pic6 from '../assets/pic6.jpg';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import bgImage from '../assets/bg12.png'; // Add your background image here
import bgImage1 from '../assets/bg_c.jpg'; // Add your background image here
import { motion } from 'framer-motion';


const contentData = [
  {
    title: "Ancient Weapons: The Sword",
    subTitle: "A Symbol of Power and Honor",
    description: "The sword has been a symbol of power for centuries, representing honor and valor in battle.",
    image: img1,
    list: ["Forged in Fire", "Symbol of Authority", "Used in Combat"],
  },
  {
    title: "The Bow: Mastering Dhanur",
    subTitle: "The Art of Archery",
    description: "Archery is an ancient skill that combines precision and strength, making it a revered art form.",
    image: img2,
    list: ["Precision and Strength", "Focus and Balance", "Mastered by the Elite"],
  },
  {
    title: "The Shield: Protecting the Brave",
    subTitle: "A Guardian in Battle",
    description: "Shields were essential for protection in combat, showcasing the artistry and craftsmanship of their makers.",
    image: img3,
    list: ["Defense in Battle", "Craftsmanship", "Symbol of Protection"],
  },
];

const Camps = () => {
  const [contentIndex, setContentIndex] = useState(0); 
  const [currentContent, setCurrentContent] = useState(contentData[contentIndex]);
  
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    { id: 1, image: pic1, data: "The ancient art of archery", details: "Long-range combat" },
    { id: 2, image: pic2, data: "Swordsmanship", details: "Close-combat mastery" },
    { id: 3, image: pic3, data: "Shield Defense", details: "Protecting warriors" },
    { id: 4, image: pic4, data: "Combat Strategies", details: "Tactical advantages" },
    { id: 5, image: pic5, data: "Warrior Training", details: "Strength and skill" },
    { id: 6, image: pic6, data: "Armor and Protection", details: "Survival in battle" },
  ];

  const getVisibleCards = () => {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2; 
    return 3; 
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  useEffect(() => {
    const handleResize = () => setVisibleCards(getVisibleCards());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentContent(contentData[contentIndex]);
  }, [contentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex(prevIndex =>
        (prevIndex + 1) % (cards.length - visibleCards + 1)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [visibleCards, cards.length]);

  const handleDotClick = (index) => {
    setCarouselIndex(index);
  };

  return (
    <>
    <div className=" bg-cover bg-center py-16 overflow-hidden"
    
    
     style={{ backgroundImage: `url(${bgImage})` }} >
      <div className="flex justify-between w-screen">
        <img src={logo4} alt="Logo" className="w-40 h-16 object-cover ml-28" />
        <h1 className="text-black text-4xl font-bold mb-8 mr-96">Our Camps</h1>
      </div>

        <h1 className=" text-center font-bold text-4xl mt-9 text-[#800000] ">DHANURVEDA CAMP</h1>
        <div className="flex justify-evenly py-12 space-x-6">
  {/* Card 1 */}
  <motion.div
    className="bg-white shadow-lg rounded-lg w-96 h-auto p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <img src={pic4} alt="Camp 1" className="w-full h-48 object-cover rounded-lg" />
    <h1 className="mt-10 mb-3 text-center text-xl font-semibold text-black">Dhanurvidya's Camp</h1>
    <p className="text-gray-600 mt- text-center leading-relaxed flex-grow">
      Explore the ancient art of archery. Learn the techniques and disciplines
      that warriors once mastered to defend kingdoms.
    </p>
    <button className="bg-gray-500 py-2 px-4 rounded-md text-white hover:bg-gray-900 mx-auto block ">
      Learn More
    </button>
  </motion.div>

  {/* Card 2 */}
  <motion.div
    className="bg-white shadow-lg rounded-lg w-96 h-auto p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <img src={pic2} alt="Camp 2" className="w-full h-48 object-cover rounded-lg" />
    <h1 className="mt-10 mb-3 text-center text-xl font-semibold text-black">Gada Vidya Camp</h1>
    <p className="text-gray-600  text-center leading-relaxed flex-grow">
      Dive into the practice of wielding the powerful mace, a symbol of strength and valor in ancient battles.
    </p>
    <button className="bg-gray-500 py-2 px-4 rounded-md text-white hover:bg-gray-900 mx-auto block ">
      Learn More
    </button>
  </motion.div>

  {/* Card 3 */}
  <motion.div
    className="bg-white shadow-lg rounded-lg w-96 h-auto p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    <img src={pic3} alt="Camp 3" className="w-full h-48 object-cover rounded-lg" />
    <h1 className="mt-10 mb-3 text-black text-center text-xl font-semibold">Khadga Vidya Camp</h1>
    <p className="text-gray-600  text-center leading-relaxed flex-grow">
      Learn the fine art of swordsmanship, honing your skills in close combat with traditional weaponry.
    </p>
    <button className="bg-gray-500 py-2 px-4 rounded-md text-white hover:bg-gray-900 mx-auto block mt-4">
      Learn More
    </button>
  </motion.div>
</div>


</div>

<div
  className="w-full py-16 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${bgImage1})` }}
>
  <div className="text-center flex flex-col gap-4 text-black">
    <p className="text-4xl font-bold ml-4 mr-4 mt-5 text-[#800000] leading-10">
      "धनुर् गृहीत्वा उपनिषदं महास्त्रं शरं ह्युपासा निशितं सन्धयीत। <br />
   <span className="">   आयम्य तद्भावगतं स्वमेतत् तत् तत्त्वमस्य लक्ष्यं सधनम् हि विद्धि॥"</span>
    </p>
  </div>

  <div className="w-full md:w-3/5 mb-8 md:mb-0 overflow-hidden py-3 mt-12 mx-auto">
    <div
      className="flex transition-transform duration-500 ease-in-out"
      style={{ transform: `translateX(-${carouselIndex * (100 / visibleCards)}%)` }}
    >
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`relative w-full h-[450px] lg:h-[500px] rounded-lg shadow-xl overflow-hidden flex-shrink-0 transform hover:scale-105 transition-transform duration-300 ease-in-out ${index !== cards.length - 1 ? 'mr-4' : ''}`}
          style={{ flex: `0 0 ${100 / visibleCards}%` }}
          onMouseEnter={() => setHoveredCard(card.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {hoveredCard === card.id && (
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white p-6 text-center z-10 fade-in rounded-lg">
              <p className="text-xl font-semibold mb-2">{card.data}</p>
              <p className="text-4xl font-bold">{card.details}</p>
            </div>
          )}
          <img src={card.image} alt={`Card ${card.id}`} className="w-full h-full object-cover rounded-lg" />
        </div>
      ))}
    </div>

    {/* Dots for Navigation */}
    <div className="flex justify-center mt-4 space-x-2">
      {Array.from({ length: Math.max(cards.length - visibleCards + 1, 1) }).map((_, index) => (
        <button
          key={index}
          onClick={() => handleDotClick(index)}
          className={`h-3 w-3 rounded-full transition-colors duration-300 ease-in-out ${carouselIndex === index ? 'bg-white' : 'bg-gray-400'}`}
        />
      ))}
    </div>
  </div>
</div>

      </>
    
  );
};

export default Camps;
