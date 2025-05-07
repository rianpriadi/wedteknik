import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import PortfolioCard from '../components/PortfolioCard';

const Portfolio: React.FC = () => {
  const categories = ['Semua', 'Instalasi Listrik', 'CCTV', 'Fire Alarm', 'Waterproofing'];
  const [activeCategory, setActiveCategory] = React.useState('Semua');

  const portfolioItems = [
    {
      id: 1,
      title: "Instalasi Listrik Kantor XYZ",
      category: "Instalasi Listrik",
      description: "Instalasi listrik lengkap dengan sistem grounding dan standby power untuk kantor XYZ di Jakarta.",
      image: "https://images.pexels.com/photos/257886/pexels-photo-257886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      title: "Sistem Keamanan Residensial",
      category: "CCTV",
      description: "Pemasangan 12 kamera CCTV dengan akses remote untuk kompleks perumahan di Surabaya.",
      image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      title: "Sistem Fire Alarm Mall",
      category: "Fire Alarm",
      description: "Instalasi sistem fire alarm terintegrasi untuk pusat perbelanjaan dengan 5 lantai.",
      image: "https://images.pexels.com/photos/672474/pexels-photo-672474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      title: "Waterproofing Atap Gedung",
      category: "Waterproofing",
      description: "Proyek waterproofing untuk atap gedung perkantoran seluas 2000 m².",
      image: "https://images.pexels.com/photos/7031928/pexels-photo-7031928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 5,
      title: "Instalasi Listrik Pabrik",
      category: "Instalasi Listrik",
      description: "Pemasangan sistem kelistrikan untuk pabrik produksi dengan standar industri.",
      image: "https://images.pexels.com/photos/1367344/pexels-photo-1367344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 6,
      title: "CCTV Area Parkir",
      category: "CCTV",
      description: "Pemasangan sistem CCTV untuk area parkir hotel dengan fitur deteksi kendaraan.",
      image: "https://images.pexels.com/photos/56759/pexels-photo-56759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 7,
      title: "Fire Alarm Sekolah",
      category: "Fire Alarm",
      description: "Instalasi sistem fire alarm untuk kompleks sekolah dengan fitur evakuasi otomatis.",
      image: "https://images.pexels.com/photos/6210058/pexels-photo-6210058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 8,
      title: "Waterproofing Basement",
      category: "Waterproofing",
      description: "Pengerjaan waterproofing untuk basement apartemen untuk mencegah rembesan air tanah.",
      image: "https://images.pexels.com/photos/9628682/pexels-photo-9628682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 9,
      title: "Instalasi Panel Surya",
      category: "Instalasi Listrik",
      description: "Pemasangan panel surya dan sistem kelistrikan untuk rumah hemat energi.",
      image: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const filteredItems = activeCategory === 'Semua'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <>
      <HeroSection 
        title="Portofolio Proyek Kami"
        subtitle="Lihat beberapa proyek yang telah kami kerjakan untuk klien-klien kami di berbagai sektor."
        backgroundImage="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="section">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyek Terbaru Kami</h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Berikut adalah beberapa contoh proyek yang telah kami kerjakan dengan kepuasan klien yang tinggi.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    activeCategory === category
                      ? 'bg-primary-500 text-white'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <PortfolioCard
                key={item.id}
                title={item.title}
                category={item.category}
                description={item.description}
                image={item.image}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-900 text-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "150+", label: "Proyek Selesai" },
              { value: "50+", label: "Klien Puas" },
              { value: "15+", label: "Teknisi Ahli" },
              { value: "5+", label: "Tahun Pengalaman" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-5xl font-bold mb-2 text-secondary-500">{stat.value}</div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-neutral-50 dark:bg-neutral-900">
        <div className="container-custom">
          <motion.div 
            className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 md:p-12 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ingin Proyek Anda Menjadi yang Berikutnya?</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
              Konsultasikan kebutuhan Anda dengan tim ahli kami dan dapatkan solusi yang sesuai dengan kebutuhan dan anggaran Anda.
            </p>
            <a href="/kontak" className="btn btn-primary">
              Diskusikan Proyek Anda
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;