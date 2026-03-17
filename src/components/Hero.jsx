// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import heroImage from '../assets/IMG_6830.PNG';

const Hero = () => {
  // Stagger variants for the container
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  // Variants for individual text elements
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-12 flex items-center overflow-hidden bg-noise">
      {/* Background Shapes */}
      <motion.div 
        className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-citron/20 blur-3xl animate-float-slow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div 
        className="absolute bottom-10 left-[20%] w-96 h-96 rounded-full bg-tyrian/5 blur-3xl animate-float"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full gap-12 lg:gap-20 grid grid-cols-1 lg:grid-cols-2 items-center relative z-10">
        
        {/* Left: Portrait */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-1 lg:order-1 h-[50vh] lg:h-[80vh] w-full rounded-2xl overflow-hidden shadow-2xl shadow-tyrian/10 border-4 border-white mb-8 lg:mb-0"
        >
          <div className="absolute inset-0 bg-gray-200">
             <img src={heroImage} alt="Srijita Debnath" className="w-full h-full object-cover grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-700" />
          </div>
          
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-tyrian/40 to-transparent mix-blend-multiply rounded-2xl pointer-events-none" />
        </motion.div>

        {/* Right: Typography */}
        <motion.div 
          className="order-2 lg:order-2 flex flex-col justify-center text-center lg:text-left"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={item} className="text-sm uppercase tracking-[0.2em] text-tyrian font-semibold mb-4">
            Identity Verified.
          </motion.p>
          
          <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-6">
            Hi, I'm <br/>
            <span className="italic relative inline-block text-citron drop-shadow-md">
              <span className="relative z-10 text-tyrian mix-blend-normal">Srijita</span>
              <span className="absolute -inset-1 bg-citron scale-y-50 origin-bottom mix-blend-multiply z-0 px-2 rounded-sm skew-x-[-10deg]"></span>
            </span> <br className="hidden lg:block"/>
            Debnath
          </motion.h1>

          <motion.h2 variants={item} className="text-xl md:text-3xl font-sans font-light text-muted mb-6 lg:mb-8 max-w-lg mx-auto lg:mx-0">
            Creative <strong className="font-semibold text-tyrian">Frontend Developer</strong>
          </motion.h2>

          <motion.p variants={item} className="text-base md:text-lg text-muted/80 max-w-md leading-relaxed mb-8 lg:mb-10 mx-auto lg:mx-0">
            I build elegant, interactive, and aesthetic web experiences that combine design and technology with seamless motion.
          </motion.p>

          <motion.div variants={item}>
            <button className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-tyrian border-2 border-tyrian rounded-full overflow-hidden transition-all hover:text-citron">
              <span className="absolute inset-0 bg-tyrian transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Explore My Work</span>
            </button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
