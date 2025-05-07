import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed w-full z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white dark:bg-neutral-900 shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Zap className="w-8 h-8 text-primary-500" />
          <span className="text-xl font-heading font-bold text-neutral-800 dark:text-white">
            WED<span className="text-primary-500">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/" className={({isActive}) => 
            isActive ? 'nav-link nav-link-active' : 'nav-link'
          }>
            Beranda
          </NavLink>
          <NavLink to="/layanan" className={({isActive}) => 
            isActive ? 'nav-link nav-link-active' : 'nav-link'
          }>
            Layanan
          </NavLink>
          <NavLink to="/portofolio" className={({isActive}) => 
            isActive ? 'nav-link nav-link-active' : 'nav-link'
          }>
            Portofolio
          </NavLink>
          <NavLink to="/kontak" className={({isActive}) => 
            isActive ? 'nav-link nav-link-active' : 'nav-link'
          }>
            Kontak
          </NavLink>
          <Link to="/kontak" className="ml-4 btn btn-primary">
            Konsultasi Gratis
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-neutral-700 dark:text-neutral-200"
        >
          {isMenuOpen ? 
            <X className="w-6 h-6" /> : 
            <Menu className="w-6 h-6" />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white dark:bg-neutral-900 z-50 transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden pt-20`}>
        <nav className="flex flex-col items-center space-y-6 p-8">
          <NavLink to="/" className={({isActive}) => 
            isActive ? 'text-xl nav-link-active' : 'text-xl nav-link'
          }>
            Beranda
          </NavLink>
          <NavLink to="/layanan" className={({isActive}) => 
            isActive ? 'text-xl nav-link-active' : 'text-xl nav-link'
          }>
            Layanan
          </NavLink>
          <NavLink to="/portofolio" className={({isActive}) => 
            isActive ? 'text-xl nav-link-active' : 'text-xl nav-link'
          }>
            Portofolio
          </NavLink>
          <NavLink to="/kontak" className={({isActive}) => 
            isActive ? 'text-xl nav-link-active' : 'text-xl nav-link'
          }>
            Kontak
          </NavLink>
          <Link to="/kontak" className="w-full text-center btn btn-primary">
            Konsultasi Gratis
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;