import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Phone, Mail, MapPin, Instagram, Facebook, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-800 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-8 h-8 text-primary-500" />
              <span className="text-2xl font-heading font-bold">
                WED<span className="text-primary-500">.</span>
              </span>
            </div>
            <p className="mb-6 text-neutral-300">
              WED (Wong Elektrike Danu) adalah penyedia jasa instalasi listrik, CCTV, fire alarm, waterproofing dan housekeeping terpercaya dengan tim ahli bersertifikasi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Link Cepat</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/layanan" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Layanan
                </Link>
              </li>
              <li>
                <Link to="/portofolio" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Portofolio
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Layanan Kami</h3>
            <ul className="space-y-3">
              <li className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Link to="/layanan#listrik">Instalasi Listrik</Link>
              </li>
              <li className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Link to="/layanan#cctv">Instalasi CCTV</Link>
              </li>
              <li className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Link to="/layanan#fire-alarm">Instalasi Fire Alarm</Link>
              </li>
              <li className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Link to="/layanan#waterproofing">Instalasi Waterproofing</Link>
              </li>
              <li className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Link to="/layanan#housekeeping">Housekeeping</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kontak Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-500 mt-1" />
                <span className="text-neutral-300">+62 812-3456-7890</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-500 mt-1" />
                <span className="text-neutral-300">info@wed-electrical.co.id</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 mt-1" />
                <span className="text-neutral-300">Jl. Teknik Elektro No. 123, Surabaya, Indonesia</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-500 mt-1" />
                <div className="text-neutral-300">
                  <p>Senin - Jumat: 08.00 - 17.00</p>
                  <p>Sabtu: 08.00 - 13.00</p>
                </div>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-700 mt-12 pt-8 text-center text-neutral-400">
          <p>&copy; {currentYear} WED (Wong Elektrike Danu). Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;