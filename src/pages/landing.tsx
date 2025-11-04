import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion";
import { useState } from "react";
import {Star , ArrowRight } from "lucide-react";

const imageSet = [
    {
        src: "./fashion1.jpg",
        size: 'large',
        position: { top: '5%', left: '65%' }
    },
    {
        src: "./fashion2.jpg",
        size: 'medium',
        position: { top: '10%', left: '20%' }
    },
    {
        src: "./fashion3.jpg",
        size: 'small',
        position: { top: '35%', left: '15%' }
    },
    {
        src: "./fashion4.jpg",
        size: 'medium',
        position: { top: '25%', left: '45%' }
    },
    {
        src: "./fashion5.jpg",
        size: 'large',
        position: { top: '50%', left: '70%' }
    },
    {
        src: "./fashion6.jpg",
        size: 'small',
        position: { top: '60%', left: '25%' }
    },
    {
        src: "./fashion7.jpg",
        size: 'medium',
        position: { top: '70%', left: '55%' }
    },
    {
        src: "./fashion8.jpg",
        size: 'small',
        position: { top: '15%', left: '80%' }
    },
];

const sizeMap = {
  small: 'md:w-24 w-10 md:h-32 h-14',
  medium: 'md:w-32 w-14 md:h-40 h-20',
  large: 'md:w-40 md:h-52 w-20 h-25'
};

export function Landing() { 
  const [hoveredSide, setHoveredSide] = useState<'designer' | 'client' | null>(null);
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full overflow-hidden relative">

      <div className="h-full flex flex-col md:flex-row">
        
        <motion.div
          className="relative flex-1 bg-black overflow-hidden cursor-pointer group"
          onMouseEnter={() => setHoveredSide('designer')}
          onMouseLeave={() => setHoveredSide(null)}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ flex: 1.05 }}
        >
          <div className="absolute inset-0">
            <img
              src="./amDeveloperBackground.jpg"
              alt="Designer workspace"
              className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-br from-black/60 via-black/40 to-black/60 group-hover:from-black/40 group-hover:via-black/20 group-hover:to-black/40 transition-all duration-500" />
          </div>

          <motion.div
            animate={{
              scale: hoveredSide === 'designer' ? 1.2 : 1,
              opacity: hoveredSide === 'designer' ? 0.15 : 0.08
            }}
            transition={{ duration: 0.5 }}
            className="absolute top-10 right-10 w-64 h-64 bg-[#22C55E] rounded-full blur-3xl"
          />

          <div className="relative h-full flex flex-col items-center justify-center px-8 text-center z-10">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.div
                animate={{
                  y: hoveredSide === 'designer' ? -10 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="mb-6"
              >
                <Star className="md:w-12 md:h-12 w-7 h-7 text-[#22C55E] mx-auto md:mb-4" />
                <h2 className="text-white md:text-6xl text-2xl md:mb-6 mb-3">
                  I am a designer
                </h2>
                <p className="text-gray-300 md:text-xl text-sm mb-8 max-w-lg mx-auto">
                  Join our platform and connect with clients looking for your creative expertise
                </p>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group/btn px-10 py-4 bg-none text-white border rounded-full flex items-center md:gap-3 mx-auto hover:bg-[#22C55E] hover:text-white transition-all shadow-2xl hover:border-0"
                onClick={()=>navigate('/login')}
              >
                <span className="md:text-lg text-sm">Join as Designer</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        <div className="w-px md:w-1 bg-linear-to-b from-transparent via-gray-300 to-transparent relative z-20" />

        <motion.div
          className="relative flex-1 bg-white overflow-hidden cursor-pointer group"
          onMouseEnter={() => setHoveredSide('client')}
          onMouseLeave={() => setHoveredSide(null)}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ flex: 1.05 }}
        >
          <div className="absolute inset-0">
            {imageSet.map((image, index) => (
              <motion.div
                key={index}
                className={`absolute ${sizeMap[image.size as keyof typeof sizeMap]} rounded-lg overflow-hidden shadow-lg`}
                style={{
                  top: image.position.top,
                  left: image.position.left,
                  transform: `rotate(${Math.random() * 20 - 10}deg)`
                }}
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  rotate: hoveredSide === 'client' ? Math.random() * 10 - 5 : Math.random() * 20 - 10
                }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.6,
                  type: "spring"
                }}
                whileHover={{ 
                  scale: 1.1, 
                  zIndex: 50,
                  rotate: 0,
                  transition: { duration: 0.3 }
                }}
              >
                <img
                  src={image.src}
                  alt={`${index + 1}`}
                  className="w-full h-full md:object-cover"
                />
              </motion.div>
            ))}
          </div>
          <motion.div
            animate={{
              scale: hoveredSide === 'client' ? 1.2 : 1,
              opacity: hoveredSide === 'client' ? 0.1 : 0.05
            }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-10 left-10 w-72 h-72 bg-[#22C55E] rounded-full blur-3xl"
          />
          <div className="relative h-full flex flex-col items-center justify-center px-8 text-center z-10 bg-white/80 md:backdrop-blur-sm">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.div
                animate={{
                  y: hoveredSide === 'client' ? -10 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="mb-6"
              >
                <Star fill="currentColor" color="[#22C55E]" className="md:w-12 w-6 md:h-12 h-6 text-[#22C55E] mx-auto mb-4" />
                <h2 className="text-black md:text-6xl text-2xl  md:mb-6 mb-3">
                  I need a designer
                </h2>
                <p className="text-gray-700 md:text-xl text-sm mb-8 max-w-lg mx-auto">
                  Find talented designers ready to bring your vision to life
                </p>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group/btn px-10 py-4 bg-[#22C55E] text-white rounded-full flex items-center md:gap-3 mx-auto hover:bg-black transition-all shadow-2xl"
                onClick={()=>navigate('/waitlist')}
              >
                <span className="md:text-lg text-sm">Hire a Designer</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}