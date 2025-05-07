import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { MoonIcon, SunIcon, MessageCircle } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, theme, toggleTheme }) => {
  const whatsappNumber = "+6281234567890"; // Replace with your actual WhatsApp number
  const whatsappMessage = "Halo, saya ingin konsultasi tentang layanan WED.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="fixed z-50 bottom-6 right-6 flex flex-col gap-3">
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-green-500 hover:bg-green-600 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-white"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        
        <button 
          onClick={toggleTheme}
          className="p-3 bg-white dark:bg-neutral-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {theme === 'light' ? (
            <MoonIcon className="w-6 h-6 text-neutral-700" />
          ) : (
            <SunIcon className="w-6 h-6 text-secondary-500" />
          )}
        </button>
      </div>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;