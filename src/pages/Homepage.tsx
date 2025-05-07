import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Shield, Clock, Users, Phone } from 'lucide-react';

import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const Homepage: React.FC = () => {
  return (
    <>
      <HeroSection 
        title="Jasa Instalasi Listrik & CCTV Profesional"
        subtitle="WED (Wong Elektrike Danu) menyediakan solusi instalasi listrik, CCTV, fire alarm, dan waterproofing dengan kualitas premium dan harga terjangkau."
        backgroundImage="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Features section */}
      <section className="section bg-neutral-50 dark:bg-neutral-900">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mengapa Memilih Kami</h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              WED hadir dengan solusi lengkap untuk kebutuhan instalasi teknis Anda dengan layanan terpercaya dan tenaga ahli bersertifikasi.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Tenaga Ahli Bersertifikasi",
                description: "Tim teknisi kami memiliki sertifikasi resmi dan pengalaman bertahun-tahun dalam bidangnya."
              },
              {
                icon: Shield,
                title: "Garansi Pekerjaan",
                description: "Semua pekerjaan kami dilengkapi dengan garansi untuk memastikan kepuasan pelanggan."
              },
              {
                icon: Clock,
                title: "Ketepatan Waktu",
                description: "Kami berkomitmen untuk menyelesaikan setiap pekerjaan sesuai dengan jadwal yang disepakati."
              },
              {
                icon: Users,
                title: "Layanan Purna Jual",
                description: "Kami menyediakan dukungan dan layanan purna jual untuk setiap instalasi yang kami kerjakan."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-card hover:shadow-card-hover transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4 p-3 bg-primary-50 dark:bg-primary-900/30 rounded-lg w-14 h-14 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan Kami</h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan instalasi dan pemeliharaan untuk kebutuhan rumah dan bisnis Anda.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Instalasi Listrik",
                description: "Instalasi listrik untuk rumah, kantor, dan industri dengan standar keamanan tinggi dan bersertifikasi."
              },
              {
                icon: Shield,
                title: "Instalasi CCTV",
                description: "Sistem keamanan CCTV modern dengan teknologi terkini untuk memantau dan melindungi properti Anda."
              },
              {
                icon: Clock,
                title: "Instalasi Fire Alarm",
                description: "Sistem peringatan dini untuk kebakaran, melindungi properti dan nyawa dengan deteksi cepat."
              },
              {
                icon: Users,
                title: "Waterproofing",
                description: "Solusi anti bocor dan rembes untuk melindungi bangunan Anda dari kerusakan air dan kelembaban."
              },
              {
                icon: Users,
                title: "Housekeeping",
                description: "Layanan kebersihan dan pemeliharaan untuk rumah dan kantor dengan standar profesional."
              },
              {
                icon: Phone,
                title: "Konsultasi & Maintenance",
                description: "Layanan konsultasi dan perawatan berkala untuk memastikan sistem Anda berfungsi optimal."
              }
            ].map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/layanan" className="btn btn-outline">
              Lihat Semua Layanan
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 relative text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-primary-900/50"></div>
        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap untuk Memulai Proyek Baru?</h2>
            <p className="text-neutral-200 mb-8">
              Dapatkan konsultasi gratis dari tim ahli kami untuk menemukan solusi terbaik sesuai kebutuhan Anda.
            </p>
            <Link to="/kontak" className="btn btn-primary text-lg">
              Konsultasi Gratis
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-neutral-50 dark:bg-neutral-900">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Apa Kata Klien Kami</h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Kami berkomitmen untuk memberikan layanan terbaik dan kepuasan pelanggan adalah prioritas utama kami.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Budi Santoso",
                role: "Pemilik Rumah",
                content: "Instalasi listrik oleh tim WED sangat rapi dan profesional. Mereka menjelaskan dengan detail tentang apa yang mereka kerjakan dan memberikan tips pemeliharaan.",
                rating: 5,
                image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                name: "Siti Rahayu",
                role: "Manajer Operasional",
                content: "Kami menggunakan jasa WED untuk instalasi CCTV dan fire alarm di kantor. Hasilnya sangat memuaskan dan sesuai dengan standar keamanan yang diperlukan.",
                rating: 5,
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                name: "Hendra Wijaya",
                role: "Pengusaha",
                content: "Layanan waterproofing dari WED berhasil mengatasi masalah kebocoran di gudang kami. Tim bekerja cepat dan hasilnya tahan lama.",
                rating: 4,
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
            ].map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                rating={testimonial.rating}
                image={testimonial.image}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;