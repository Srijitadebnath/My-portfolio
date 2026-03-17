import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  // Variants for the mobile menu container
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        when: "afterChildren",
        staggerChildren: 0.1, // Stagger in reverse when closing if desired, but "afterChildren" handles the wait
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Variants for individual mobile links
  const linkVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[60] px-6 py-4 glass"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className={`font-serif text-2xl font-bold italic tracking-tighter relative z-[70] transition-colors duration-300 ${isOpen ? 'text-citron' : 'text-tyrian'}`}>
            Srijita.
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-tyrian transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-4 relative z-[70]">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center space-x-2 bg-tyrian text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all shadow-lg shadow-tyrian/20"
            >
              <Download size={16} />
              <span>Download CV</span>
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button 
              className={`md:hidden p-2 relative z-[70] transition-colors duration-300 ${isOpen ? 'text-citron' : 'text-tyrian'}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Staggered Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[55] bg-tyrian/95 backdrop-blur-3xl flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8 text-center">
              {links.map((link) => (
                <motion.a
                  key={link.name}
                  variants={linkVariants}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-5xl italic text-citron hover:text-tyrian hover:drop-shadow-md transition-all"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.button 
                variants={linkVariants}
                className="mt-8 flex items-center space-x-2 bg-tyrian text-white px-8 py-4 rounded-full text-lg font-medium shadow-xl shadow-tyrian/30"
              >
                <Download size={20} />
                <span>Download CV</span>
              </motion.button>
            </div>
            
            <motion.div variants={linkVariants} className="absolute bottom-12 text-muted font-light text-sm">
              © 2026 Srijita Debnath
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
