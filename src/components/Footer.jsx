const Footer = () => {
  return (
    <footer className="bg-background py-8 border-t border-tyrian/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <div className="text-center md:text-left">
          <p className="text-tyrian font-serif italic text-lg mb-1">© 2026 Srijita Debnath</p>
          <p className="text-muted text-sm font-light">Frontend Developer</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/Srijitadebnath"
            target="_blank"
            rel="noopener noreferrer" className="text-muted hover:text-tyrian text-sm font-medium transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/srijita-debnath"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-tyrian text-sm font-medium transition-colors">LinkedIn</a>
          <a href="mailto:srijitadebnath304@gmail.com" className="text-muted hover:text-tyrian text-sm font-medium transition-colors">Email</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
