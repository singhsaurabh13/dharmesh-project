import React from 'react';
import bg_faq from '../assets/bg_faq.jpg';
import pic from '../assets/pashurambanner.jpg';
import pic1 from '../assets/bg_7.png';
import pic2 from '../assets/Abhi1.jpg';
import pic3 from '../assets/abhi2.jpg';
import pic4 from '../assets/abhi3.jpg';
import pic5 from '../assets/hom.jpg';
import pic6 from '../assets/Lakshmi.jpg';
import pic7 from '../assets/Maha.jpg';
import pic8 from '../assets/Maham.jpeg';
import pic9 from '../assets/laksmi.jpg';
import { motion } from 'framer-motion';

function Abhishekam() {
  const cards = [
    { 
      id: 1, 
      image: pic2, 
      title: "Ancient Archery", 
      location: "Location 1", 
      description: "Back side content for Card 1", 
      listItems: ["Item 1", "Item 2", "Item 3"]
    },
    { 
      id: 2, 
      image: pic3, 
      title: "Card 2 Title", 
      location: "Location 2", 
      description: "Back side content for Card 2", 
      listItems: ["Item A", "Item B", "Item C"]
    },
    { 
      id: 3, 
      image: pic4, 
      title: "Card 3 Title", 
      location: "Location 3", 
      description: "Back side content for Card 3", 
      listItems: ["Item X", "Item Y", "Item Z"]
    },
  ];

  const cards1 = [
    {
      title: 'Navagraha Homam / Shanti Homam',
      // price: '₹18,300.00',
      image: pic5
    },
    {
      title: 'Lakshmi Homam',
      price: '₹17,300.00',
      image: pic6,
    },
    {
      title: 'Saraswathi Homam',
      price: '₹16,300.00',
      image: pic7,
    },
    {
      title: 'Santhana Pasupatha Homa',
      price: '₹16,300.00',
      image: pic8,
    },
    {
      title: 'Mahalakshmi Homam',
      price: '₹15,300.00',
      image: pic9,
    },
  ];


  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat pt-2 "
      style={{ backgroundImage: `url(${bg_faq})` }}
    >
     <motion.div
  className="relative flex flex-col items-center justify-center py-10 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-20 bg-cover mt-8 sm:mt-10"
  style={{
    backgroundImage: `url(${pic})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '70vh', // Adjusted for a more mobile-friendly height
  }}
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  <div className="absolute inset-0 bg-black opacity-30" />
  
  {/* Content container */}
  <div className="relative z-10 text-center sm:text-left px-4 md:px-8 lg:px-16">
    {/* Title or other content goes here */}
  </div>
</motion.div>



<section
  className="py-10 bg-cover bg-center bg-no-repeat ml-5 mr-6 mt-8"
  style={{
    backgroundImage: `url(${pic1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <motion.h1
    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#a50f0f] mb-10 mx-auto md:mx-10 lg:mx-20 xl:ml-40 text-center xl:text-left"
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    Abhishekam Pooja
  </motion.h1>

  <div className="w-full md:w-4/5 lg:w-11/12 xl:w-3/4 mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
    {cards.map((card) => (
      <div
        key={card.id}
        className="relative w-full h-80 sm:h-96 lg:h-[450px] bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer group"
      >
        <h1 className="absolute top-2 left-2 z-10 bg-red-500 text-white text-sm px-2 py-1 rounded-md font-semibold">
          Offer Online
        </h1>

        <div className="absolute top-2 right-2 z-10 text-right space-y-1">
          {card.listItems.map((item, index) => (
            <p key={index} className="bg-gray-800 text-white text-xs px-2 py-1 rounded">
              {item}
            </p>
          ))}
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <img
            src={card.image}
            alt={card.title}
            className="object-cover w-full h-full transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

          <div className="absolute bottom-4 left-4 text-left text-white font-semibold space-y-1 z-10">
            <h3 className="text-2xl lg:text-3xl font-bold group-hover:text-white transition-colors duration-500">
              {card.title}
            </h3>
            <span className="text-lg group-hover:text-white transition-colors duration-500">
              {card.location}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

<section
  className="py-10 bg-cover bg-center bg-no-repeat ml-5 mr-6 mt-8"
  style={{
    backgroundImage: `url(${pic1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <motion.h1
    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#a50f0f] mb-10 mx-auto md:mx-10 lg:mx-20 xl:ml-40 text-center xl:text-left"
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    Deepotsavam Pooja
  </motion.h1>

  <div className="w-full md:w-4/5 lg:w-11/12 xl:w-3/4 mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
    {cards.map((card) => (
      <div
        key={card.id}
        className="relative w-full h-80 sm:h-96 lg:h-[450px] bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer group"
      >
        <h1 className="absolute top-2 left-2 z-10 bg-red-500 text-white text-sm px-2 py-1 rounded-md font-semibold">
          Offer Online
        </h1>

        <div className="absolute top-2 right-2 z-10 text-right space-y-1">
          {card.listItems.map((item, index) => (
            <p key={index} className="bg-gray-800 text-white text-xs px-2 py-1 rounded">
              {item}
            </p>
          ))}
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <img
            src={card.image}
            alt={card.title}
            className="object-cover w-full h-full transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

          <div className="absolute bottom-4 left-4 text-left text-white font-semibold space-y-1 z-10">
            <h3 className="text-2xl lg:text-3xl font-bold group-hover:text-white transition-colors duration-500">
              {card.title}
            </h3>
            <span className="text-lg group-hover:text-white transition-colors duration-500">
              {card.location}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

<section
  className="py-10 bg-cover bg-center bg-no-repeat ml-5 mr-6 mt-8"
  style={{
    backgroundImage: `url(${pic1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <motion.h1
    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#a50f0f] mb-10 mx-auto md:mx-10 lg:mx-20 xl:ml-40 text-center xl:text-left"
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    Archana
  </motion.h1>

  <div className="w-full md:w-4/5 lg:w-11/12 xl:w-3/4 mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
    {cards.map((card) => (
      <div
        key={card.id}
        className="relative w-full h-80 sm:h-96 lg:h-[450px] bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer group"
      >
        <h1 className="absolute top-2 left-2 z-10 bg-red-500 text-white text-sm px-2 py-1 rounded-md font-semibold">
          Offer Online
        </h1>

        <div className="absolute top-2 right-2 z-10 text-right space-y-1">
          {card.listItems.map((item, index) => (
            <p key={index} className="bg-gray-800 text-white text-xs px-2 py-1 rounded">
              {item}
            </p>
          ))}
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <img
            src={card.image}
            alt={card.title}
            className="object-cover w-full h-full transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

          <div className="absolute bottom-4 left-4 text-left text-white font-semibold space-y-1 z-10">
            <h3 className="text-2xl lg:text-3xl font-bold group-hover:text-white transition-colors duration-500">
              {card.title}
            </h3>
            <span className="text-lg group-hover:text-white transition-colors duration-500">
              {card.location}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

<section
  className="py-10 bg-cover bg-center bg-no-repeat ml-5 mr-6 mt-8"
  style={{
    backgroundImage: `url(${pic1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <motion.h1
    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#a50f0f] mb-10 mx-auto md:mx-10 lg:mx-20 xl:ml-40 text-center xl:text-left"
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
Sahasranama Pooja Archana
  </motion.h1>

  <div className="w-full md:w-4/5 lg:w-11/12 xl:w-3/4 mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
    {cards.map((card) => (
      <div
        key={card.id}
        className="relative w-full h-80 sm:h-96 lg:h-[450px] bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer group"
      >
        <h1 className="absolute top-2 left-2 z-10 bg-red-500 text-white text-sm px-2 py-1 rounded-md font-semibold">
          Offer Online
        </h1>

        <div className="absolute top-2 right-2 z-10 text-right space-y-1">
          {card.listItems.map((item, index) => (
            <p key={index} className="bg-gray-800 text-white text-xs px-2 py-1 rounded">
              {item}
            </p>
          ))}
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <img
            src={card.image}
            alt={card.title}
            className="object-cover w-full h-full transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

          <div className="absolute bottom-4 left-4 text-left text-white font-semibold space-y-1 z-10">
            <h3 className="text-2xl lg:text-3xl font-bold group-hover:text-white transition-colors duration-500">
              {card.title}
            </h3>
            <span className="text-lg group-hover:text-white transition-colors duration-500">
              {card.location}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

<section
  className="py-10 bg-cover bg-center bg-no-repeat ml-5 mr-6 mt-8"
  style={{
    backgroundImage: `url(${pic1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <motion.h1
    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#a50f0f] mb-10 mx-auto md:mx-10 lg:mx-20 xl:ml-40 text-center xl:text-left"
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    Special Sankalpa Pooja
  </motion.h1>

  <div className="w-full md:w-4/5 lg:w-11/12 xl:w-3/4 mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
    {cards.map((card) => (
      <div
        key={card.id}
        className="relative w-full h-80 sm:h-96 lg:h-[450px] bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer group"
      >
        <h1 className="absolute top-2 left-2 z-10 bg-red-500 text-white text-sm px-2 py-1 rounded-md font-semibold">
          Offer Online
        </h1>

        <div className="absolute top-2 right-2 z-10 text-right space-y-1">
          {card.listItems.map((item, index) => (
            <p key={index} className="bg-gray-800 text-white text-xs px-2 py-1 rounded">
              {item}
            </p>
          ))}
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <img
            src={card.image}
            alt={card.title}
            className="object-cover w-full h-full transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

          <div className="absolute bottom-4 left-4 text-left text-white font-semibold space-y-1 z-10">
            <h3 className="text-2xl lg:text-3xl font-bold group-hover:text-white transition-colors duration-500">
              {card.title}
            </h3>
            <span className="text-lg group-hover:text-white transition-colors duration-500">
              {card.location}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

<section
  className="py-10 bg-cover bg-center bg-no-repeat ml-5 mr-6 mt-8"
  style={{
    backgroundImage: `url(${pic1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <motion.h1
    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#a50f0f] mb-10 mx-auto md:mx-10 lg:mx-20 xl:ml-40 text-center xl:text-left"
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    Trayodashi Archana with Tulasi
  </motion.h1>

  <div className="w-full md:w-4/5 lg:w-11/12 xl:w-3/4 mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
    {cards.map((card) => (
      <div
        key={card.id}
        className="relative w-full h-80 sm:h-96 lg:h-[450px] bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer group"
      >
        <h1 className="absolute top-2 left-2 z-10 bg-red-500 text-white text-sm px-2 py-1 rounded-md font-semibold">
          Offer Online
        </h1>

        <div className="absolute top-2 right-2 z-10 text-right space-y-1">
          {card.listItems.map((item, index) => (
            <p key={index} className="bg-gray-800 text-white text-xs px-2 py-1 rounded">
              {item}
            </p>
          ))}
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <img
            src={card.image}
            alt={card.title}
            className="object-cover w-full h-full transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

          <div className="absolute bottom-4 left-4 text-left text-white font-semibold space-y-1 z-10">
            <h3 className="text-2xl lg:text-3xl font-bold group-hover:text-white transition-colors duration-500">
              {card.title}
            </h3>
            <span className="text-lg group-hover:text-white transition-colors duration-500">
              {card.location}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


<section
  className="py-10 bg-cover bg-center bg-no-repeat ml-5 mr-6 mt-8"
  style={{
    backgroundImage: `url(${pic1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <motion.h1
    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#a50f0f] mb-10 mx-auto md:mx-10 lg:mx-20 xl:ml-40 text-center xl:text-left"
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
  > Thomala Seva
  </motion.h1>

  <div className="w-full md:w-4/5 lg:w-11/12 xl:w-3/4 mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
    {cards.map((card) => (
      <div
        key={card.id}
        className="relative w-full h-80 sm:h-96 lg:h-[450px] bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer group"
      >
        <h1 className="absolute top-2 left-2 z-10 bg-red-500 text-white text-sm px-2 py-1 rounded-md font-semibold">
          Offer Online
        </h1>

        <div className="absolute top-2 right-2 z-10 text-right space-y-1">
          {card.listItems.map((item, index) => (
            <p key={index} className="bg-gray-800 text-white text-xs px-2 py-1 rounded">
              {item}
            </p>
          ))}
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <img
            src={card.image}
            alt={card.title}
            className="object-cover w-full h-full transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

          <div className="absolute bottom-4 left-4 text-left text-white font-semibold space-y-1 z-10">
            <h3 className="text-2xl lg:text-3xl font-bold group-hover:text-white transition-colors duration-500">
              {card.title}
            </h3>
            <span className="text-lg group-hover:text-white transition-colors duration-500">
              {card.location}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


<section
  className="py-10 bg-cover bg-center bg-no-repeat ml-5 mr-6 mt-8"
  style={{
    backgroundImage: `url(${pic1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <motion.h1
    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#a50f0f] mb-10 mx-auto md:mx-10 lg:mx-20 xl:ml-40 text-center xl:text-left"
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    Full Trayodoshi Pooja
  </motion.h1>

  <div className="w-full md:w-4/5 lg:w-11/12 xl:w-3/4 mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
    {cards.map((card) => (
      <div
        key={card.id}
        className="relative w-full h-80 sm:h-96 lg:h-[450px] bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer group"
      >
        <h1 className="absolute top-2 left-2 z-10 bg-red-500 text-white text-sm px-2 py-1 rounded-md font-semibold">
          Offer Online
        </h1>

        <div className="absolute top-2 right-2 z-10 text-right space-y-1">
          {card.listItems.map((item, index) => (
            <p key={index} className="bg-gray-800 text-white text-xs px-2 py-1 rounded">
              {item}
            </p>
          ))}
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <img
            src={card.image}
            alt={card.title}
            className="object-cover w-full h-full transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

          <div className="absolute bottom-4 left-4 text-left text-white font-semibold space-y-1 z-10">
            <h3 className="text-2xl lg:text-3xl font-bold group-hover:text-white transition-colors duration-500">
              {card.title}
            </h3>
            <span className="text-lg group-hover:text-white transition-colors duration-500">
              {card.location}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


<div
  className="flex flex-col overflow-x-auto px-4 py-8 "
  style={{
    backgroundImage: `url(${bg_faq})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Add an H1 heading */}
  <h1 className="text-5xl font-bold text-center mb-8 text-[#a50f0f]">Homam</h1>

  <div className="grid grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-6 min-w-max justify-items-center">
    {cards1.map((card, index) => (
      <div
        key={index}
        className="border border-gray-300 rounded-lg p-4 hover:shadow-xl transition-shadow w-60 bg-white"
      >
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h2 className="text-lg font-semibold mb-2 text-blue-700">{card.title}</h2>
        <div className="text-green-600 font-bold">{card.price}</div>
        {/* Add rating stars here if needed */}
      </div>
    ))}
  </div>

  <div className="grid grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-6 min-w-max justify-items-center mt-4">
    {cards1.map((card, index) => (
      <div
        key={index}
        className="border border-gray-300 rounded-lg p-4 hover:shadow-xl transition-shadow w-60 bg-white"
      >
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h2 className="text-lg font-semibold mb-2 text-blue-700">{card.title}</h2>
        <div className="text-green-600 font-bold">{card.price}</div>
        {/* Add rating stars here if needed */}
      </div>
    ))}
  </div>


  <div className="grid grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-6 min-w-max justify-items-center mt-4">
    {cards1.map((card, index) => (
      <div
        key={index}
        className="border border-gray-300 rounded-lg p-4 hover:shadow-xl transition-shadow w-60 bg-white"
      >
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h2 className="text-lg font-semibold mb-2 text-blue-700">{card.title}</h2>
        <div className="text-green-600 font-bold">{card.price}</div>
        {/* Add rating stars here if needed */}
      </div>
    ))}
  </div>


  <div className="grid grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-6 min-w-max justify-items-center mt-4">
    {cards1.map((card, index) => (
      <div
        key={index}
        className="border border-gray-300 rounded-lg p-4 hover:shadow-xl transition-shadow w-60 bg-white"
      >
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h2 className="text-lg font-semibold mb-2 text-blue-700">{card.title}</h2>
        <div className="text-green-600 font-bold">{card.price}</div>
        {/* Add rating stars here if needed */}
      </div>
    ))}
  </div>


</div>

    


    </div>
  );
}

export default Abhishekam;
