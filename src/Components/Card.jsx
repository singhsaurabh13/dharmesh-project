import React from "react";
import pic5  from '../assets/pic5.jpg';

const Card = () => {
  const cards = [
    {
      id: 1,
      image: pic5,
      title: "Card Title 1",
      description: "This is a description for the first card. It provides some additional information about the card."
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300",
      title: "Card Title 2",
      description: "This is a description for the second card. It provides some additional information about the card."
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300",
      title: "Card Title 3",
      description: "This is a description for the third card. It provides some additional information about the card."
    }
  ];

  return (
    <section className="container mx-auto px-5 lg:px-0 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
            <div className="overflow-hidden rounded-t-lg">
              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              {/* Heading */}
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              {/* Paragraph */}
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
