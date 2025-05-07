import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check for user's preference
    if (localStorage.theme === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
      setTheme('light');
    } else {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
      setTheme('dark');
    }
  };

  return (
    <Layout theme={theme} toggleTheme={toggleTheme}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/layanan" element={<Services />} />
        <Route path="/portofolio" element={<Portfolio />} />
        <Route path="/kontak" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;