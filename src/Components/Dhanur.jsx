import React from 'react'
import { motion } from 'framer-motion';
import pic from '../assets/banner4.png';
import pic1 from '../assets/pic6.jpg';
import pic2 from '../assets/line2.png';
import bg_faq from '../assets/bg_faq.jpg';

function Dhanur() {
  return (
    <>
      <div
      className="py-8 mt-1"
      style={{
        backgroundImage: `url(${bg_faq})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Background with semi-transparent overlay */}
      <motion.div
        className="relative flex flex-col lg:flex-row py-20 px-5 lg:px-20 bg-cover mt-10 "
        style={{
          backgroundImage: `url(${pic})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          height: '60vh',
        }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="p-6 lg:p-10 max-w-6xl mx-auto"
      >
       
        {/* Title Animation */}
        <div className="flex flex-col items-center lg:items-start">
  <motion.h1
    className="text-4xl font-bold text-center lg:text-left text-[#a50f0f]"
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    ORIGIN
  </motion.h1>

  <motion.img
    src={pic2}
    alt="Guru Ji"
    className="h-56 mt-4 shadow-lg rounded-lg"
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.6 }}
  />
</div>


        {/* Image with Animation */}
        <motion.img
          src={pic1}
          alt="Guru Ji"
          className="float-right w-full lg:w-1/3 h-auto mb-6 lg:ml-6 shadow-lg rounded-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Paragraph Animations */}
        <motion.p
          className="text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
         <strong>Sri Sri Sri Vibhakar Uday Tiwari</strong>, also known as Vardi Uday Kumar, is a distinguished master of Dhanurveda, the ancient Indian martial art of archery and warfare. Residing at the foothills of Lord Venkateshwara in Tirupati, Andhra Pradesh, Guru Ji's expertise in this discipline is unparalleled, making him a revered figure in the preservation and teaching of traditional combat techniques. As a spiritual master and devoted follower of Lord Parashurama, the sixth avatar of Vishnu, Guru Ji embodies the principles of bravery, discipline, and devotion.

        </motion.p>

        <motion.p
          className="text-gray-700 mt-5 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
        <b>Guru Ji</b>’s spiritual journey is deeply intertwined with his devotion to <strong>Lord Parashurama</strong>. He is well-versed in performing Yagams (Vedic fire rituals) and other sacred ceremonies, following the traditional practices of the Vaikhanasa Agama Shastra. These rituals are conducted with the utmost reverence and precision, reflecting his deep spiritual knowledge and commitment. Through these sacred practices, Guru Ji aims to invoke divine blessings and promote spiritual upliftment among his followers.
        </motion.p>

        {/* Second Image with Animation */}
        <motion.img
          src={pic1}
          alt="Guru Ji"
          className="float-left w-full lg:w-1/3 h-auto mt-8 mb-6 lg:mr-6 shadow-lg rounded-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* More Paragraphs */}
        <motion.p
          className="text-gray-700 mt-5 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
        <b> Guru Ji</b> spreads the divine name of Hari Nama in the form of Parashurama, especially relevant in the current age of Kaliyuga. His teachings and practices aim to revive and honour the ancient traditions associated with Parashurama, promoting spiritual growth and awareness among his disciples and followers. He emphasizes the timeless values embodied by Lord Parashurama, such as righteousness, strength, and humility, encouraging his students to integrate these virtues into their daily lives.
        </motion.p>

        <motion.p
          className="text-gray-700 mt-5 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
         Beyond martial arts, Guru Ji’s teachings encompass a holistic approach to personal development. He emphasizes the importance of physical strength, mental discipline, and spiritual enlightenment. His guidance helps students achieve a balanced life, integrating the virtues of martial and spiritual wisdom. Guru Ji’s approach ensures that his disciples not only excel in physical combat but also grow as well-rounded individuals with a strong moral foundation.
        </motion.p>

        <motion.p
          className="text-gray-700 mt-5 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
      Guru Ji’s dedication extends to preserving the rich cultural heritage of India. By teaching <b>Dhanurveda </b>and performing traditional rituals, he ensures that these ancient practices continue to thrive and inspire future generations. His work not only keeps the traditions alive but also adapts them to the contemporary world, making them accessible and relevant. Guru Ji actively engages in cultural preservation efforts, participating in seminars, workshops, and community events to spread awareness about India’s rich martial and spiritual legacy.

        </motion.p>
        <motion.p
          className="text-gray-700 mt-5 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
     <motion.p
          className="text-gray-700 mt-5 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
   Guru Ji's influence is profound, touching the lives of many who seek knowledge and spiritual guidance. His efforts in reviving the practices of Dhanurveda and promoting the worship of Lord Parashurama create a bridge between the ancient and modern worlds, fostering a deeper understanding and appreciation of India's spiritual and martial legacy. Through his teachings and example, Guru Ji inspires a new generation to embrace their cultural heritage with pride and dedication, ensuring that the wisdom of the past continues to illuminate the path of the future.

        </motion.p>

        </motion.p>
      </motion.div>

      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 lg:p-10 max-w-6xl mx-auto"
      >
      <motion.h1
          className="text-4xl font-bold mb-6  text-[#a50f0f] text-center lg:text-left"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Guru Sankalpa
        </motion.h1>
        <motion.img
          src={pic1}
          alt="Guru Ji"
          className="float-right w-full lg:w-1/3 h-auto mb-6 lg:ml-6 shadow-lg rounded-lg"
          initial={{ scale: 0.0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.p
          className="text-gray-700 leading-relaxed text-justify"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
      <b>Isodhan</b>’s mission is to develop the Gurukul system globally, integrating the ancient art of Dhanurveda to cultivate fearless individuals who walk a spiritual path. By reviving the traditional Gurukul education model, Isodhan aims to provide holistic training that combines physical prowess, mental discipline, and spiritual enlightenment
        </motion.p>

        <motion.h1
  className="text-3xl font-bold mb- text-black text-center lg:text-left py-9"
  initial={{ y: -100, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ type: "spring", stiffness: 100, damping: 40 }}
>
Core Objectives:
</motion.h1>

<motion.h3
  className="text-xl font-semibold mb-6 text-black text-center lg:text-left"
  initial={{ y: -100, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ type: "spring", stiffness: 100, damping: 40 }}
>
. Revival of Dhanurveda:
</motion.h3>


<motion.p
          className="text-gray-700 mt leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
     <b> Isodhan</b> seeks to reintroduce and preserve Dhanurveda, the ancient Indian martial art, teaching students the skills and values that made it a revered practice in Vedic times. Through rigorous training, students will learn archery, weaponry, and combat techniques, empowering them to become adept warriors

        </motion.p>
        <motion.h3
  className="text-xl font-semibold mb-4 text-black text-center lg:text-left mt-6"
  initial={{ y: -100, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ type: "spring", stiffness: 100, damping: 40 }}
>
 . Cultivating Fearlessness:
</motion.h3>


<motion.p
          className="text-gray-700  leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1.0 }}
        >
 By mastering Dhanurveda, students develop not just physical strength, but also mental resilience and confidence. This fearless mindset prepares them to face life's challenges with courage and determination, embodying the warrior spirit.


        </motion.p>

<motion.h3
  className="text-xl font-semibold mb-6 text-black text-center lg:text-left mt-6"
  initial={{ scale: 0, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.6, ease: "backOut" }}
>
 . Spiritual Development:
</motion.h3>



<motion.p
          className="text-gray-700 mt leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
 Isodhan emphasizes the importance of spiritual growth alongside physical training. The teachings are deeply rooted in Vedic traditions and rituals, helping students to cultivate a profound spiritual connection and understanding. This dual focus ensures that they grow into well-rounded individuals with strong ethical foundations.
        </motion.p>
        <motion.h3
  className="text-xl font-semibold mb-6 text-black text-center lg:text-left mt-5"
  initial={{ y: -100, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ type: "spring", stiffness: 100, damping: 40 }}
>
. Global Reach:
</motion.h3>


<motion.p
          className="text-gray-700 mt leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
    The mission extends beyond regional boundaries, aiming to establish Gurukuls around the world. This global approach ensures that the teachings of Dhanurveda and the Gurukul system can benefit a diverse and widespread audience, promoting peace, discipline, and spiritual wisdom universally.

        </motion.p>

        <motion.h1
          className="text-2xl font-bold mt-6 text-black text-center lg:text-left"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
        Vision for the Future:
        </motion.h1>

        <motion.img
          src={pic1}
          alt="Guru Ji"
          className="float-right w-full lg:w-1/3 h-auto mb-6 lg:ml-6 shadow-lg rounded-lg"
          initial={{ scale: 0.0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.p
          className="text-gray-700 mt-6 leading-7 text-justify "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
 <b> Isodhan </b>envisions a world where the ancient knowledge of Dhanurveda and the Gurukul system is accessible to all, fostering a generation of fearless, spiritually enlightened individuals. By blending tradition with modernity, Isodhan aims to create a harmonious balance, nurturing leaders who are not only strong and skilled but also compassionate and wise.

        </motion.p>


        <motion.p
          className="text-gray-700 mt-2 leading-7 text-justify "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
Through its dedicated efforts, Isodhan is not just preserving a rich cultural heritage, but also inspiring a new era of holistic 
education and personal development.


        </motion.p>

        <motion.h1
          className="text-4xl font-bold mt-14  text-[#a50f0f] text-center lg:text-left"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
    Associated centres 
        </motion.h1>
        <motion.img
          src={pic1}
          alt="Guru Ji"
          className="float-left w-full lg:w-1/3 h-auto mt-6 mr-4  shadow-lg rounded-lg"
          initial={{ scale: 0.0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.p
          className="text-gray-700 mt-6 leading-7 text-justify "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
<b>Ramanarayanam Temple</b>, a sacred abode of spirituality and cultural enrichment, is nestled in the heart of our vibrant community and has been a symbol of devotion, service, and cultural heritage for generations. Dedicated to Lord Rama, the temple serves as a haven for seekers of spiritual solace and cultural experiences. Its unique association with <b>ISODHAN</b> for Dhanurvidya classes offers training in the ancient Indian martial art, focusing on preserving and promoting traditional skills and discipline. This association provides instruction in archery and traditional martial arts, helping participants learn age-old techniques and practices while emphasizing physical fitness and mental discipline to develop physical strength and mental resilience. Additionally, the program fosters cultural understanding and appreciation of the historical significance of Dhanurvidya

        </motion.p>

        <motion.h1
          className="text-3xl font-semibold mt-14 text- text-[#a50f0f] text-center lg:text-left"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
Upcoming projects 
        </motion.h1>


<motion.h1
  className="text-4xl font-bold mt-6 text-[#f31f6f] text-center lg:text-left ml-12"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  {Array.from("Sri Parashurama Devalaya").map((char, index) => (
    <motion.span
      key={index}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.05 }}
    >
      {char}
    </motion.span>
  ))}
</motion.h1>


<motion.img
          src={pic1}
          alt="Guru Ji"
          className="float-right w-full lg:w-1/3 h-auto mt-6 lg:ml-6 shadow-lg rounded-lg"
          initial={{ scale: 0.0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

<motion.p
          className="text-gray-700 mt-6 leading-7 text-justify "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
The <b>Parashurama Temple</b> and  <b>Dhanurveda Gurukul</b> project in Tirupati is a unique and ambitious initiative aimed at reviving and promoting the ancient Indian martial arts and archery traditions described in the Dhanurveda, one of the four upavedas associated with the Yajurveda.he program fosters cultural understanding and appreciation of the historical significance of Dhanurvidya

        </motion.p>
<motion.p
          className="text-gray-700 mt-6 leading-7 text-justify "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
The project starts with the establishment of the Parashurama Temple, dedicated to the sixth avatar of Vishnu, known for his valor and martial prowess. This temple will be constructed in the  full stone with traditional statues based on ancient Shilpashastra, serving as a cultural and spiritual centre and promoting the values and traditions associated with Parashurama.

        </motion.p>
<motion.p
          className="text-gray-700 mt-6 leading-7 text-justify "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
Following the temple, the Dhanurveda Gurukul will be established, providing a traditional residential school environment where students live and learn under the guidance of skilled gurus. The Gurukul will focus on holistic education, encompassing spiritual, physical, and intellectual development, with a special emphasis on martial arts and archery. This initiative not only seeks to preserve an important aspect of India's cultural heritage but also offers a unique educational experience, promoting physical, intellectual, and spiritual growth.

        </motion.p>
<motion.p
          className="text-gray-700 mt-6 leading-7 text-justify "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
Additionally, the project aims to spread the Hari Nama, the holy name of the Lord, throughout the world by venerating Parashurama, the sixth form of Lord Vishnu in the Dashavatara. 

        </motion.p>
<motion.p
          className="text-gray-700 mt-6 leading-7 text-justify "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
Located in the significant pilgrimage city of Tirupati, known for the famous Venkateswara Temple, this project leverages the city's existing religious and cultural infrastructure. It aims to attract tourists, scholars, and martial arts enthusiasts, thereby raising awareness about India's rich martial traditions and contributing to the local economy and community development. This is the world’s first Dhanurveda Gurukul with a Parashurama Temple, symbolizing a harmonious blend of spiritual and physical training.


        </motion.p>









     

      </motion.div>


    </div>

    
    </>
  )
}

export default Dhanur
