import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import image7 from '../assets/pashurambanner2.jpg';
import image2 from '../assets/pashurambanner.jpg';
import pic1 from '../assets/Abhi1.jpg';
import pic from '../assets/abhi2.jpg';
import pic3 from '../assets/abhi3.jpg';
import pic4 from '../assets/pic4.jpg';
import pic5 from '../assets/pic5.jpg';
import pic6 from '../assets/pic6.jpg';
import bgImage from '../assets/bg_faq.jpg';

const PashuramjAbhisheak = () => {
  const cards = [
    { id: 1, image: pic1, title: "Ancient Archery", location: "Location 1", description: "Back side content for Card 1" },
    { id: 2, image: pic, title: "Card 2 Title", location: "Location 2", description: "Back side content for Card 2" },
    { id: 3, image: pic3, title: "Card 3 Title", location: "Location 3", description: "Back side content for Card 3" },
    { id: 4, image: pic4, title: "Card 4 Title", location: "Location 4", description: "Back side content for Card 4" },
    { id: 5, image: pic5, title: "Card 5 Title", location: "Location 5", description: "Back side content for Card 5" },
    { id: 6, image: pic6, title: "Card 6 Title", location: "Location 6", description: "Back side content for Card 6" },
  ];

  return (
    <div className="bg-cover bg-center text-black" style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Heading Section */}
      <div className="text-center py-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black uppercase tracking-wide hover:text-yellow-400">
          Pashuram Abhishekam
        </h1>
      </div>

      {/* Swiper Section */}
      <Swiper
        modules={[Pagination, Autoplay]} 
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet-custom',
          bulletActiveClass: 'swiper-pagination-bullet-active-custom',
        }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="mb-12"
      >
        {[image7, image2].map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[450px] object-cover sm:h-[300px] md:h-[400px] lg:h-[450px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex flex-wrap md:flex-nowrap w-full">
        {/* Left Section with Text */}
        <div className="w-full md:w-2/5 lg:w-1/3 p-8 text-gray-500">
          <h1 className="text-3xl font-bold animate-pulse text-yellow-800">
            Rituals and Offerings
          </h1>
          <p className="leading-8 mt-10">
            To allow devotees to be touched by the grace of Lord Parashurama, unique rituals designed to support individuals at every stage of life—from birth to death, and everything in between—are conducted at his sacred abode. These ceremonies are crafted to invoke the blessings of Lord Parashurama, the eternal warrior-sage, and to ensure his protection, strength, and wisdom throughout a devotee's journey in life.
          </p>
        </div>

        {/* Right Section with Cards */}
        <div className="relative w-full md:w-3/5 lg:w-2/3 mb-8 overflow-hidden py- mt-1">
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
                    <div className="flex flex-col h-full justify-between p-4">
                      <div className="flex justify-between items-start">
                        <span className="bg-green-500 text-white px-2 py-1 text-sm">
                          OFFER ONLINE
                        </span>
                        <div className="flex flex-col text-white rounded-lg ">
                          <ul className="text-sm leading-9">
                            <li className="bg-[#bc4034] rounded-lg px-2 mb-1">List Item 1</li>
                            <li className="bg-[#bc4034] rounded-lg px-2 mb-1">List Item 2</li>
                            <li className="bg-[#bc4034] rounded-lg px-2">List Item 3</li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex flex-col mt-4">
                        <h3 className="text-4xl font-extrabold text-white">{card.title}</h3>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xl text-white">{card.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Link
            to="/rituals" 
            className="text-4xl mt-7 font-semibold bg-[#bc4034] text-white px-2 py-2 inline-block hover:bg-[#ee580c] hover:text-white transition-colors duration-300 ease-in-out"
          >
            Explore All Rituals
          </Link>
        </div>
        
      </div>

      
    </div>
  );
};

export default PashuramjAbhisheak;
