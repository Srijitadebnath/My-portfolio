// eslint-disable-next-line no-unused-vars
import { useState, useRef, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: "NestoRia Hostel",
    description: "A modern and interactive website demo for NestoRia Hostel. Features smooth animations, responsive layouts, and a seamless user experience for exploring accommodations.",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop",
    tech: ["React.js", "Vite", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Srijitadebnath/hostel-website", // Add your GitHub repo link here
    live: "https://hostel-website-delta.vercel.app/" // Add your live website link here
  },
  {
    title: "Personalized Fitness Platform",
    description: "A comprehensive digital fitness experience tailored for individualized workout plans and seamless progress tracking. Coming soon with dynamic animations and personalized dashboards.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    tech: ["React.js", "Tailwind CSS", "Node.js"],
    github: "#",
    live: "#",
    liveSoon: true
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.95
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.95
      };
    }
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = projects.length - 1;
      if (nextIndex >= projects.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const project = projects[currentIndex];

  return (
    <section id="projects" className="bg-tyrian py-24 relative selection:bg-citron selection:text-tyrian overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Background soft noise for the section wrapper */}
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-5xl md:text-6xl font-serif text-citron mb-4">Selected Works</h2>
          <p className="text-background/80 text-lg md:text-xl font-light max-w-xl">
            Swipe or use arrows to navigate through the featured projects carousel.
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-4">
          <button
            onClick={() => paginate(-1)}
            className="w-14 h-14 rounded-full border border-citron/30 flex items-center justify-center text-citron hover:bg-citron hover:text-tyrian transition-all group"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="w-14 h-14 rounded-full border border-citron/30 flex items-center justify-center text-citron hover:bg-citron hover:text-tyrian transition-all group"
          >
            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="relative w-full max-w-5xl mx-auto px-4 md:px-6 h-[550px] md:h-[500px] flex items-center justify-center mt-6 md:mt-0">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.3 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute w-[calc(100%-2rem)] md:w-full h-full bg-[#FDFCF8] border border-tyrian/20 shadow-2xl rounded-2xl md:rounded-[2rem] overflow-hidden flex flex-col md:flex-row cursor-grab active:cursor-grabbing"
          >
            {/* Info Side */}
            <div className="w-full md:w-5/12 p-6 md:p-10 flex flex-col justify-center bg-[#FDFCF8] h-[55%] md:h-full relative z-20">
              <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[10px] md:text-xs font-mono tracking-wider text-background bg-tyrian px-2 md:px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              <h3 className="text-xl md:text-2xl lg:text-3xl font-serif text-tyrian mb-2 md:mb-4">{project.title}</h3>

              <p className="text-muted leading-relaxed font-light mb-auto mt-2 text-sm md:text-base line-clamp-3 md:line-clamp-none">
                {project.description}
              </p>

              <div className="flex items-center gap-4 md:gap-6 mt-4 md:mt-auto text-sm md:text-base">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium text-tyrian hover:text-citron transition-colors border-b border-tyrian hover:border-citron pb-1 group pointer-events-auto">
                  <Github size={18} className="group-hover:-translate-y-1 transition-transform" /> Code
                </a>
                {project.liveSoon ? (
                    <span className="inline-flex items-center gap-2 font-medium text-tyrian hover:text-citron transition-colors border-b border-tyrian hover:border-citron pb-1 group pointer-events-auto cursor-not-allowed opacity-70">
                      <ExternalLink size={18} className="group-hover:-translate-y-1 transition-transform group-hover:translate-x-1" /> Live Soon
                    </span>
                 ) : (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium text-tyrian hover:text-citron transition-colors border-b border-tyrian hover:border-citron pb-1 group pointer-events-auto">
                      <ExternalLink size={18} className="group-hover:-translate-y-1 transition-transform group-hover:translate-x-1" /> Live Demo
                    </a>
                 )}
              </div>
            </div>

            {/* Image Side */}
            <div className="w-full md:w-7/12 h-[45%] md:h-full group overflow-hidden relative border-t md:border-t-0 md:border-l border-tyrian/10 flex items-center justify-center">
              <div className="absolute inset-0 bg-tyrian/20 group-hover:bg-transparent transition-colors duration-1000 z-10 pointer-events-none" />
              
              {project.liveSoon && (
                <div className="absolute inset-0 z-20 bg-background/60 backdrop-blur-[2px] flex items-center justify-center pointer-events-none transition-all duration-500">
                  <span className="font-serif text-3xl md:text-4xl text-[#FDFCF8] px-8 py-4 border border-[#FDFCF8]/30 rounded-2xl bg-tyrian/40 shadow-2xl backdrop-blur-md transform -rotate-2 scale-95 group-hover:scale-100 transition-transform duration-500">
                    Will Be Live Soon
                  </span>
                </div>
              )}

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 origin-center drag-none pointer-events-none"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Pagination Dots */}
        <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-3">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex
                  ? 'bg-citron scale-125 shadow-[0_0_10px_rgba(214,255,63,0.8)]'
                  : 'bg-citron/20 hover:bg-citron/50'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
