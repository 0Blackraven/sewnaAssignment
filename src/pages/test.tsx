import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

const fashionImages = [
  {
    url: 'https://images.unsplash.com/photo-1670132718453-70321d9ecf20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBlZGl0b3JpYWx8ZW58MXx8fHwxNzYyMjE5MTczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'large',
    position: { top: '5%', left: '65%' }
  },
  {
    url: 'https://images.unsplash.com/photo-1606837731745-2598533fac7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwZmFzaGlvbnxlbnwxfHx8fDE3NjIxODYwODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'medium',
    position: { top: '10%', left: '20%' }
  },
  {
    url: 'https://images.unsplash.com/photo-1718964313173-c327cd8a8020?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjIyNTgwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'small',
    position: { top: '35%', left: '15%' }
  },
  {
    url: 'https://images.unsplash.com/photo-1641528710940-e14cb87e8208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGRyZXNzJTIwbW9kZWx8ZW58MXx8fHwxNzYyMjY2MDgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'medium',
    position: { top: '25%', left: '45%' }
  },
  {
    url: 'https://images.unsplash.com/photo-1614172745174-d76736beb78b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcnVud2F5JTIwbW9kZWx8ZW58MXx8fHwxNzYyMjIyODk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'large',
    position: { top: '50%', left: '70%' }
  },
  {
    url: 'https://images.unsplash.com/photo-1761084490272-c81f4ededf54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhuaWMlMjBmYXNoaW9uJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyMjY2MDgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'small',
    position: { top: '60%', left: '25%' }
  },
  {
    url: 'https://images.unsplash.com/photo-1652360136442-944207f66c29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBmYXNoaW9uJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYyMjY2MDgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'medium',
    position: { top: '70%', left: '55%' }
  },
  {
    url: 'https://images.unsplash.com/photo-1670132718453-70321d9ecf20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBlZGl0b3JpYWx8ZW58MXx8fHwxNzYyMjE5MTczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    size: 'small',
    position: { top: '15%', left: '80%' }
  }
];

const sizeMap = {
  small: 'w-24 h-32',
  medium: 'w-32 h-40',
  large: 'w-40 h-52'
};

export default function App() {
  const [hoveredSide, setHoveredSide] = useState<'designer' | 'client' | null>(null);

  return (
    <div className="h-screen w-full overflow-hidden relative">
      {/* Logo - Fixed at top */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-8 left-8 z-50"
      >
        <h1 className="text-[#22C55E] text-3xl cursor-pointer">sewna.</h1>
      </motion.div>

      {/* Split Screen Container */}
      <div className="h-full flex flex-col md:flex-row">
        
        {/* LEFT SIDE - I am a designer (Dark) */}
        <motion.div
          className="relative flex-1 bg-black overflow-hidden cursor-pointer group"
          onMouseEnter={() => setHoveredSide('designer')}
          onMouseLeave={() => setHoveredSide(null)}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ flex: 1.05 }}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1704729105381-f579cfcefd63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZGVzaWduZXIlMjBzdHVkaW8lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMjY2MDc5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Designer workspace"
              className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500 group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 group-hover:from-black/40 group-hover:via-black/20 group-hover:to-black/40 transition-all duration-500" />
          </div>

          {/* Decorative Elements */}
          <motion.div
            animate={{
              scale: hoveredSide === 'designer' ? 1.2 : 1,
              opacity: hoveredSide === 'designer' ? 0.15 : 0.08
            }}
            transition={{ duration: 0.5 }}
            className="absolute top-10 right-10 w-64 h-64 bg-[#22C55E] rounded-full blur-3xl"
          />

          {/* Content */}
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
                <Sparkles className="w-12 h-12 text-[#22C55E] mx-auto mb-4" />
                <h2 className="text-white text-6xl mb-6">
                  I am a designer
                </h2>
                <p className="text-gray-300 text-xl mb-8 max-w-lg mx-auto">
                  Join our platform and connect with clients looking for your creative expertise
                </p>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group/btn px-10 py-4 bg-white text-black rounded-full flex items-center gap-3 mx-auto hover:bg-[#22C55E] hover:text-white transition-all shadow-2xl"
              >
                <span className="text-lg">Join as Designer</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </motion.button>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 flex items-center gap-6 justify-center text-gray-400"
              >
                <div className="text-center">
                  <p className="text-2xl text-white">500+</p>
                  <p className="text-sm">Active Designers</p>
                </div>
                <div className="w-px h-12 bg-gray-600" />
                <div className="text-center">
                  <p className="text-2xl text-white">$2M+</p>
                  <p className="text-sm">Earned</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Hover Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredSide === 'designer' ? 1 : 0 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm"
          >
            Click to continue →
          </motion.div>
        </motion.div>

        {/* Divider Line */}
        <div className="w-px md:w-1 bg-gradient-to-b from-transparent via-gray-300 to-transparent relative z-20" />

        {/* RIGHT SIDE - I need a designer (Light) */}
        <motion.div
          className="relative flex-1 bg-white overflow-hidden cursor-pointer group"
          onMouseEnter={() => setHoveredSide('client')}
          onMouseLeave={() => setHoveredSide(null)}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ flex: 1.05 }}
        >
          {/* Scattered Fashion Images */}
          <div className="absolute inset-0">
            {fashionImages.map((img, index) => (
              <motion.div
                key={index}
                className={`absolute ${sizeMap[img.size as keyof typeof sizeMap]} rounded-lg overflow-hidden shadow-lg`}
                style={{
                  top: img.position.top,
                  left: img.position.left,
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
                  src={img.url}
                  alt={`Fashion ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Decorative gradient orbs */}
          <motion.div
            animate={{
              scale: hoveredSide === 'client' ? 1.2 : 1,
              opacity: hoveredSide === 'client' ? 0.1 : 0.05
            }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-10 left-10 w-72 h-72 bg-[#22C55E] rounded-full blur-3xl"
          />

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center px-8 text-center z-10 bg-white/80 backdrop-blur-sm">
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
                <Sparkles className="w-12 h-12 text-[#22C55E] mx-auto mb-4" />
                <h2 className="text-black text-6xl mb-6">
                  I need a designer
                </h2>
                <p className="text-gray-700 text-xl mb-8 max-w-lg mx-auto">
                  Find talented designers ready to bring your vision to life
                </p>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group/btn px-10 py-4 bg-[#22C55E] text-white rounded-full flex items-center gap-3 mx-auto hover:bg-black transition-all shadow-2xl"
              >
                <span className="text-lg">Hire a Designer</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </motion.button>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 flex items-center gap-6 justify-center text-gray-600"
              >
                <div className="text-center">
                  <p className="text-2xl text-black">2,400+</p>
                  <p className="text-sm">Projects Done</p>
                </div>
                <div className="w-px h-12 bg-gray-300" />
                <div className="text-center">
                  <p className="text-2xl text-black">98%</p>
                  <p className="text-sm">Satisfaction</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Hover Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredSide === 'client' ? 1 : 0 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-black/60 text-sm"
          >
            Click to continue →
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Info Bar */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-200 px-8 py-4 z-40"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>Trusted by 500+ companies worldwide</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#22C55E] transition-colors">About</a>
            <a href="#" className="hover:text-[#22C55E] transition-colors">How it Works</a>
            <a href="#" className="hover:text-[#22C55E] transition-colors">Contact</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
