import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const SERVICE_ID = 'service_nxawc6c';
    const TEMPLATE_ID = 'template_750rrc6';
    const PUBLIC_KEY = 'hrMpTzxfdBpL74r9G';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setIsSuccess(true);
        formRef.current.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      })
      .catch(() => {
        setError("Failed to send the message. Please try again later.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative text-tyrian overflow-hidden selection:bg-citron selection:text-tyrian min-h-screen flex items-center justify-center bg-noise">
      
      {/* Background Soft Glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] md:w-[60vw] md:h-[60vw] bg-citron/5 rounded-full blur-[150px] pointer-events-none -z-10"
        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full relative z-10">
        
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-tyrian mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted/80 max-w-2xl mx-auto text-base sm:text-lg font-light"
          >
            Have a project in mind or just want to say hi? Feel free to reach out.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-tyrian rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 border border-tyrian/30 shadow-[0_0_50px_rgba(90,15,59,0.15)] relative overflow-hidden group"
        >
          {/* Inner ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-tyrian/10 to-transparent pointer-events-none" />

          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center text-white space-y-4"
            >
              <CheckCircle2 className="w-16 h-16 text-citron mb-4" />
              <h3 className="text-3xl font-serif">Message Sent!</h3>
              <p className="text-white/70">Thank you for reaching out. I'll get back to you soon.</p>
            </motion.div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="from_name" className="text-sm font-medium text-white/70 pl-2">Name</label>
                  <input
                    id="from_name"
                    type="text"
                    name="from_name"
                    placeholder="John Doe"
                    required
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/30 focus:outline-none focus:border-citron/50 focus:bg-white/10 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="from_email" className="text-sm font-medium text-white/70 pl-2">Email</label>
                  <input
                    id="from_email"
                    type="email"
                    name="from_email"
                    placeholder="john@example.com"
                    required
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/30 focus:outline-none focus:border-citron/50 focus:bg-white/10 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/70 pl-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/30 focus:outline-none focus:border-citron/50 focus:bg-white/10 transition-all duration-300 resize-none"
                />
              </div>

              {error && (
                <div className="text-red-400 text-sm mt-2 text-center bg-red-400/10 py-2 rounded-lg">
                  {error}
                </div>
              )}

              <div className="pt-4 flex justify-center">
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-tyrian bg-citron border-2 border-citron rounded-full overflow-hidden transition-all hover:bg-transparent hover:text-citron disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
                >
                  <span className="absolute inset-0 bg-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
                  <span className="relative z-10 flex items-center space-x-2">
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </button>
              </div>

            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;