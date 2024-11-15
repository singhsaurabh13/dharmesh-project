import React, { useState, useEffect } from "react";
import newbg from '../assets/bgnew2.jpg'; // Import your background image here
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';
import pic5 from '../assets/pic5.jpg';
import pic6 from '../assets/pic6.jpg';
import DHANUR_VIDYA from '../assets/DHANUR_VIDYA.png';
import KUNTHA_VIDYA from '../assets/KUNTHA_VIDYA.png';
import GADA_VIDYA from '../assets/GADA_VIDYA.png';
import BAHU_VIDYA from '../assets/BAHU_VIDYA.png';
import CHAKRA_VIDYA from '../assets/CHAKRA_VIDYA.png';
import KSHURIKA_VIDYA from '../assets/KSHURIKA_VIDYA.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';


const Septvidya = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { id: 1, image: pic1, data: "The ancient art of archery" },
    { id: 2, image: pic2, data: "Card 2 Data" },
    { id: 3, image: pic3, data: "Card 3 Data" },
    { id: 4, image: pic4, data: "Card 4 Data" },
    { id: 5, image: pic5, data: "Card 5 Data" },
    { id: 6, image: pic6, data: "Card 6 Data" },
  ];

  // Get the number of visible cards based on screen width
  const getVisibleCards = () => {
    if (window.innerWidth < 768) return 1; // Mobile: 1 card
    if (window.innerWidth < 1024) return 2; // Tablet: 2 cards
    return 3; // Desktop: 3 cards
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  useEffect(() => {
    const handleResize = () => setVisibleCards(getVisibleCards());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Automatic slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        (prevIndex + 1) % (cards.length - visibleCards + 1)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [visibleCards, cards.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex flex-row-reverse items-center overflow-hidden"
      style={{ backgroundImage: `url(${newbg})` }}
    >
      {/* Right Section with Carousel */}
      <div className="relative w-full md:w-3/5 lg:w-3/4 mb-8 overflow-hidden py- mt-56 mr-10 h-full rounded-lg">
          <Swiper
            modules={[Autoplay, Pagination]} 
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 }, // 2 cards on tablet and larger screens
            }}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            loop={true}
            className="w-full"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-80 sm:h-96 lg:h-[450px] bg-white shadow-lg rounded-lg cursor-pointer transform transition-transform duration-500 hover:scale-105">
                  {/* Front side of the card */}
                  <div
                    className="absolute w-full h-full transition-opacity duration-500"
                    style={{
                      backgroundImage: `url(${card.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          
        </div>


      {/* Left Section with Icons and Text */}
      <div className="w-1/2 md:w-2/5 p-8 text-gray-500  fade-in ">
        <h1 className="ml-20 text-3xl font-bold animate-pulse text-yellow-800 ">Sapt Vidya</h1>
        <div className="grid grid-cols-2 gap-8 mt-8">
          {/* First Section with 3 Icons */}
          <div className="flex flex-col items-start mt-6">
            {/* Icon 1 */}
            <div className="flex flex-col items-start group">
              <div className="w-16 h-18">
                <img src={DHANUR_VIDYA} alt="Dhanur Vidya" className="transform transition-transform duration-300 ease-in-out group-hover:scale-110" />
              </div>
              <h1 className="text-[15px] font-bold mt-2">DHANUR VIDYA</h1>
              <p className="mt-2 text-[13px] w-32">The ancient art of archery</p>
            </div>
            {/* Repeat for other icons */}
            {/* Icon 2 */}
            <div className="flex flex-col items-start group mt-10">
              <div className="w-16 h-16">
                <img src={KUNTHA_VIDYA} alt="Dhanur Vidya" className="transform transition-transform duration-300 ease-in-out group-hover:scale-110" />
              </div>
              <h1 className="text-[15px] font-bold mt-2">KUNTHA VIDYA</h1>
              <p className="mt-2 text-[13px] w-32">the ancient art of spear</p>
            </div>
            {/* Icon 3 */}
            <div className="flex flex-col items-start group mt-6 ">
              <div className="w-16 h-16">
                <img src={BAHU_VIDYA} alt="Dhanur Vidya" className="transform transition-transform duration-300 ease-in-out group-hover:scale-110" />
              </div>
              <h1 className="text-[15px] font-bold mt-z">BAHU VIDYA</h1>
              <p className="mt-2 text-[13px] w-32">the ancient art of sword welding</p>
            </div>
          </div>

          {/* Second Section with 3 Icons */}
          <div className="flex flex-col items-start space-y-">
            {/* Icon 1 */}
            <div className="flex flex-col items-start group">
              <div className="w-16 h-15">
                <img src={KSHURIKA_VIDYA} alt="Dhanur Vidya" className="transform transition-transform duration-300 ease-in-out group-hover:scale-110" />
              </div>
              <h1 className="text-[15px] font-bold mt-2">KSHURIKA VIDYA</h1>
              <p className="mt-2 text-[13px] w-32">The art of self defense</p>
            </div>
            {/* Repeat for other icons */}
            {/* Icon 2 */}
            <div className="flex flex-col items-start group mt-4">
              <div className="w-16 h-16">
                <img src={GADA_VIDYA} alt="Dhanur Vidya" className="transform transition-transform duration-300 ease-in-out group-hover:scale-110" />
              </div>
              <h1 className="text-[15px] font-bold mt-9">GADA VIDYA</h1>
              <p className="mt-2 text-[13px] w-32">the ancient art of mace</p>
            </div>
            {/* Icon 3 */}
            <div className="flex flex-col items-start group mt-4">
              <div className="w-16 h-16">
                <img src={CHAKRA_VIDYA} alt="Dhanur Vidya" className="transform transition-transform duration-300 ease-in-out group-hover:scale-110" />
              </div>
              <h1 className="text-[15px] font-bold mt-2">CHAKRA VIDYA</h1>
              <p className="mt-2 text-[13px] w-32">The ancient art of disc</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Septvidya;
