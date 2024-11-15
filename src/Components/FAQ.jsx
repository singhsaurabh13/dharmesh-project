import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dhanurVidyaImage from '../assets/bg_net.png'; // Add appropriate image
import bgImage from '../assets/bg_faq.jpg'; // Add your background image here


const faqs = [
  {
    question: "What is Dhanur Vidya?",
    answer:
      "Dhanur Vidya is the ancient art of warfare, focusing primarily on archery. It is considered one of the essential skills for warriors in ancient times.",
  },
  {
    question: "What types of weapons were used in Dhanur Vidya?",
    answer:
      "Apart from bows and arrows, warriors used swords, shields, spears, and maces, each playing a crucial role in ancient combat strategies.",
  },
  {
    question: "How was training conducted in ancient times?",
    answer:
      "Warriors were trained under strict guidance, often in secluded camps. Training focused on physical strength, precision, and mastering various weapons over years of practice.",
  },
];

function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setExpandedIndex((prevIndex) => (prevIndex === null ? 0 : (prevIndex + 1) % faqs.length));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="bg-run-white py-24 bg-cover bg-center text-black" 
      style={{ backgroundImage: `url(${bgImage})` }} // Add the background image here
    >
      <div className="font-bold flex flex-col gap-6 items-center text-maroon-600">
        <p className="text-2xl text-yellow-500 font-bold">Mastering Dhanur Vidya</p>
        <h1 className="text-5xl text-[#800000]">
          The <span className="text-maroon-600">Art of Warfare</span> in Ancient Times
        </h1>
      </div>

      <div className="flex md:flex-row justify-between items-center mx-5 mt-20">
        {/* FAQ Section (Left Side) */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-8 text-[#800000]">Frequently Asked Questions</h1>

          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 mb-4 p-4 rounded-lg bg-maroon-600 shadow-md"
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: expandedIndex === index ? 1 : 0.9,
                x: expandedIndex === index ? 0 : -10,
              }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="cursor-pointer text-lg font-semibold text-black flex justify-between items-center"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                {faq.question}
                <motion.div
                  className="ml-2"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.div>
              </div>

              {expandedIndex === index && (
                <motion.p
                  className="text-gray-500 mt-4"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Image Section (Right Side) */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img src={dhanurVidyaImage} alt="Dhanur Vidya" className=" object-contain mb-4" />
        </motion.div>
      </div>
    </div>
  );
}

export default FAQ;
