import { motion } from 'framer-motion';
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiCss, SiHtml5,
  SiJavascript, SiPython, SiFigma, SiCanva, SiMongodb,
  SiC, SiCplusplus
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';

const technologies = [
  { name: "React", icon: <SiReact size={32} /> },
  { name: "Next.js", icon: <SiNextdotjs size={32} /> },
  { name: "JavaScript", icon: <SiJavascript size={32} /> },
  { name: "HTML", icon: <SiHtml5 size={32} /> },
  { name: "CSS", icon: <SiCss size={32} /> },
  { name: "Tailwind", icon: <SiTailwindcss size={32} /> },
  { name: "Python", icon: <SiPython size={32} /> },
  { name: "Java", icon: <FaJava size={32} /> },
  { name: "C/C++", icon: <SiCplusplus size={32} /> },
  { name: "SQL", icon: <FaDatabase size={32} /> },
  { name: "MongoDB", icon: <SiMongodb size={32} /> },
  { name: "Figma", icon: <SiFigma size={32} /> },
  { name: "Canva", icon: <SiCanva size={32} /> }
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring", stiffness: 100, damping: 15
    }
  }
};

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-24 md:py-32 relative text-tyrian overflow-hidden selection:bg-citron selection:text-tyrian min-h-screen flex items-center justify-center bg-noise">

      {/* Background Soft Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] md:w-[60vw] md:h-[60vw] bg-citron/5 rounded-full blur-[150px] pointer-events-none -z-10"
        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">

        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-tyrian mb-4"
          >
            Stack Of Technology
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted/80 max-w-2xl mx-auto text-base sm:text-lg font-light"
          >
            The tools and frameworks I use to build modern applications.
          </motion.p>
        </div>

        {/* GLOWING CONTAINER */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-tyrian rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 border border-tyrian/30 shadow-[0_0_50px_rgba(90,15,59,0.15)] relative overflow-hidden group"
        >
          {/* Inner ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-tyrian/10 to-transparent pointer-events-none" />

          {/* GRID OF TECHNOLOGIES */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative z-10">
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center p-6 sm:p-8 bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/5 group/tech cursor-default transition-all duration-300 hover:border-citron/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(214,255,63,0.1)]"
              >
                <div className="text-white/60 group-hover/tech:text-citron mb-4 sm:mb-6 transition-colors duration-300 transform group-hover/tech:scale-110 group-hover/tech:drop-shadow-[0_0_10px_rgba(214,255,63,0.5)]">
                  {tech.icon}
                </div>
                <span className="text-sm sm:text-base font-medium tracking-wide text-white/50 group-hover/tech:text-white transition-colors duration-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TechStack;
