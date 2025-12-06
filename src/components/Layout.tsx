
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImage from 'figma:asset/jahangir-logo.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/#work' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    setIsMenuOpen(false);
    if (path === '/#work') {
       if (location.pathname !== '/') {
         // If not on home, we need to navigate first (handled by Link), then scroll
         // But standard Link with hash works automatically if handled by browser, 
         // but React Router hash link sometimes needs help.
         // For simplicity here, we rely on the Link behavior or a useEffect in Home.
       } else {
         const element = document.getElementById('work');
         if (element) element.scrollIntoView({ behavior: 'smooth' });
       }
    } else {
       window.scrollTo(0, 0);
    }
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/' && location.hash === '';
    }
    if (path.includes('#')) {
      return location.pathname + location.hash === path;
    }
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen flex flex-col bg-black font-sans text-slate-200 selection:bg-blue-500 selection:text-white">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-[100]" style={{ width: `${scrollProgress * 100}%` }}></div>
      
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group" onClick={() => window.scrollTo(0, 0)}>
            <div className="w-10 h-10 flex items-center justify-center">
               <ImageWithFallback src={logoImage} alt="Jahangir Alam" className="w-full h-full object-contain" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
              Jahangir Alam
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'text-white bg-white/10' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => handleNavClick(link.path)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
               to="/contact" 
               className="ml-4 px-5 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-slate-200 transition-colors"
            >
              Let's Talk
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-black/95 border-b border-white/10 p-4 backdrop-blur-xl h-screen">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-lg font-medium text-slate-400 hover:text-white px-4 py-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10"
                  onClick={() => handleNavClick(link.path)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow pt-20">
        {children}
      </main>

      <footer className="bg-black border-t border-white/10 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-white font-bold text-lg">Jahangir Alam</p>
            <p className="text-slate-500 text-sm mt-1">GenAI Design Specialist & UI/UX Architect</p>
          </div>
          <div className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Jahangir Alam. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
