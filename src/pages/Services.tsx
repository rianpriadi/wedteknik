import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, BellRing, Droplet, Home } from 'lucide-react';
import HeroSection from '../components/HeroSection';

const Services: React.FC = () => {
  const services = [
    {
      id: "listrik",
      icon: Zap,
      title: "Instalasi Listrik",
      description: "Kami menyediakan layanan instalasi listrik yang aman dan efisien untuk kebutuhan rumah, kantor, dan industri.",
      features: [
        "Instalasi listrik rumah dan bangunan baru",
        "Perbaikan dan peningkatan instalasi listrik",
        "Instalasi panel listrik dan pengaman",
        "Pemasangan lampu dan sistem penerangan",
        "Audit dan inspeksi keamanan listrik"
      ],
      image: "https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "cctv",
      icon: Shield,
      title: "Instalasi CCTV",
      description: "Lindungi properti Anda dengan sistem CCTV modern yang dapat dipantau dari mana saja dan kapan saja.",
      features: [
        "Pemasangan kamera CCTV indoor dan outdoor",
        "Sistem CCTV dengan akses jarak jauh",
        "Pemasangan DVR/NVR dan penyimpanan",
        "Integrasi dengan sistem keamanan lainnya",
        "Pemeliharaan dan upgrade sistem CCTV"
      ],
      image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "fire-alarm",
      icon: BellRing,
      title: "Instalasi Fire Alarm",
      description: "Sistem peringatan kebakaran yang handal untuk mendeteksi kebakaran sejak dini dan membantu menyelamatkan nyawa.",
      features: [
        "Pemasangan sensor asap dan panas",
        "Instalasi alarm kebakaran dan sistem pemberitahuan",
        "Sistem sprinkler otomatis",
        "Pemeliharaan dan pengujian berkala",
        "Konsultasi kepatuhan terhadap standar keamanan"
      ],
      image: "https://images.pexels.com/photos/672474/pexels-photo-672474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "waterproofing",
      icon: Droplet,
      title: "Instalasi Waterproofing",
      description: "Lindungi bangunan Anda dari kerusakan akibat air dan kelembaban dengan solusi waterproofing terbaik.",
      features: [
        "Waterproofing untuk atap dan dak",
        "Waterproofing untuk dinding dan basement",
        "Perlindungan anti bocor untuk kamar mandi",
        "Treatment anti rembes dan jamur",
        "Pemeliharaan dan perbaikan"
      ],
      image: "https://images.pexels.com/photos/7031928/pexels-photo-7031928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "housekeeping",
      icon: Home,
      title: "Housekeeping",
      description: "Layanan kebersihan dan pemeliharaan profesional untuk rumah dan kantor Anda.",
      features: [
        "Pembersihan rutin rumah dan kantor",
        "Pembersihan dan perawatan pasca konstruksi",
        "Pembersihan area industri dan komersial",
        "Pembersihan karpet dan lantai",
        "Pemeliharaan rutin properti"
      ],
      image: "https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <>
      <HeroSection 
        title="Layanan Profesional untuk Kebutuhan Anda"
        subtitle="Kami menyediakan berbagai layanan teknisi profesional dengan kualitas terbaik dan harga terjangkau."
        backgroundImage="https://images.pexels.com/photos/257886/pexels-photo-257886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan Kami</h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              WED menawarkan layanan lengkap untuk kebutuhan teknis dan pemeliharaan properti Anda dengan tim ahli bersertifikasi.
            </p>
          </motion.div>
          
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                <motion.div 
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-lg w-full h-[300px] md:h-[400px] object-cover shadow-lg"
                  />
                </motion.div>
                
                <motion.div 
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="inline-flex items-center justify-center p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-500 mb-4">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6">{service.description}</p>
                  
                  <div className="bg-neutral-50 dark:bg-neutral-800/50 p-5 rounded-lg">
                    <h4 className="font-semibold mb-3">Yang Kami Tawarkan:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <svg
                            className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-500 text-white py-16">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Butuh Bantuan untuk Proyek Anda?</h2>
            <p className="mb-8 text-primary-100">
              Tim profesional kami siap memberikan solusi terbaik sesuai kebutuhan Anda. Hubungi kami sekarang untuk konsultasi gratis!
            </p>
            <a 
              href="/kontak" 
              className="btn bg-white text-primary-600 hover:bg-primary-50 hover:text-primary-700"
            >
              Hubungi Kami Sekarang
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;