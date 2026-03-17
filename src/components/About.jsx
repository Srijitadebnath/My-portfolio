import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const DecryptedText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let iterations = 0;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    const interval = setInterval(() => {
      setDisplayText(text.split('').map((letter, index) => {
        if(index < iterations) return text[index];
        return letters[Math.floor(Math.random() * 26)];
      }).join(''));
      
      if(iterations >= text.length) clearInterval(interval);
      iterations += 1 / 3;
    }, 30);
    
    return () => clearInterval(interval);
  }, [isInView, text]);

  return <span ref={ref} className="font-mono text-sm tracking-widest text-tyrian">{displayText}</span>;
}

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 border-l-4 border-citron pl-6"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-tyrian mb-4">About Me</h2>
          
          <div className="flex flex-col gap-1 mb-8 opacity-70">
            <DecryptedText text="Accessing Developer Profile..." />
            <DecryptedText text="Identity Verified." />
            <DecryptedText text="Frontend Engineer Ready." />
          </div>

          <p className="text-lg md:text-xl text-muted font-light leading-relaxed mb-6">
            I'm a frontend developer who enjoys transforming ideas into beautiful and interactive digital experiences. I focus on building interfaces that are visually distinctive, smooth, and thoughtfully designed.
          </p>
          
          <p className="text-lg md:text-xl text-muted font-light leading-relaxed mb-6">
            Currently, I am pursuing my <strong className="font-semibold text-tyrian">B.Tech in Computer Science and Engineering</strong> at <strong className="font-semibold text-tyrian">UPES (2024–2028)</strong>, specializing in <strong className="font-semibold text-tyrian">Artificial Intelligence and Machine Learning (AI/ML)</strong>. This academic foundation fuels my passion for blending intelligent algorithms with intuitive user interfaces.
          </p>
          
          <p className="text-lg md:text-xl text-muted font-light leading-relaxed mb-6">
            My approach combines <strong className="font-semibold text-tyrian">clean code, creative design, and engaging motion</strong> to create web applications that feel alive.
          </p>

          <p className="text-lg md:text-xl text-muted font-light leading-relaxed">
            I enjoy experimenting with animation, layout systems, and new web technologies to push the boundaries of modern UI design.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
