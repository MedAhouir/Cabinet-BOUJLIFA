"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

const Office = ({ lang }: { lang: string }) => {
  return (
    <section
      id="location"
      className={`${lang === "Ar" && "text-right"} w-full my-16 mx-0 flex flex-col gap-16 text-gray-800 text-lg p-12 `}
    >
      {/* Header Section */}
      <motion.div
        className={`${lang === "Ar" && "lg:flex-row-reverse"} flex-col w-full`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-sm text-gray-600 uppercase tracking-wide">
          {lang === "Ar" ? "- مكتبنا" : lang === "Fr" ? "- Notre bureau" : "- Our office"}
        </p>
        <h1 className={`${lang === "Ar" ? "" : "font-lora"} text-4xl lg:text-6xl font-heading font-bold capitalize leading-tight text-gray-800`}>
          {lang === "Ar" ? "تعرف عليّ وعلى موقعي" : lang === "Fr" ? "Connaissez-moi et ma localisation" : "Know me and my location"}
        </h1>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className={`${lang === "Ar" && "lg:flex-row-reverse text-right"} flex flex-col lg:flex-row gap-12`}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {/* Profile Section */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center gap-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="w-72 h-72 rounded-full overflow-hidden shadow-2xl border-4 border-yellow-400">
            <Image
              src="/Hero.jpeg" // Replace with your image path
              alt={lang === "Ar" ? "ملف المحامي" : lang === "Fr" ? "Profil de l'avocat" : "Lawyer Profile"}
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-2xl text-center font-bold text-gray-800">
              {lang === "Ar" ? "محمد بوجليفة" : lang === "Fr" ? "Mhamed BOUJLIFA" : "Mhamed BOUJLIFA"}
            </h2>
            <p className={`${lang === "Ar" && "text-right"} text-gray-600 leading-relaxed`}>
              {lang === "Ar"
                ? "متخصص في القانون التجاري والمدني. معروف بتقديم حلول قانونية استراتيجية مصممة خصيصاً للحالات المعقدة مع نتائج استثنائية."
                : lang === "Fr"
                ? "Expert en droit des affaires et civil. Connue pour fournir des solutions juridiques stratégiques adaptées aux cas complexes avec des résultats exceptionnels."
                : "Expert in corporate and civil law. Known for delivering strategic legal solutions tailored to complex cases with exceptional results."
              }
            </p>
          </div>
          <div className={`${lang === "Ar" && "flex-row-reverse"} fx gap-3`}>
            <Image
              src="/auction.png"
              alt={lang === "Ar" ? "الخبرة" : lang === "Fr" ? "expérience" : "experience"}
              width={40}
              height={40}
            />
            <p className="text-xl">
              {lang === "Ar"
                ? <div className="flex gap-1"><span>سنة من الخبرة </span><span>16+</span></div>
                : lang === "Fr"
                ? "+16 ans d'expérience"
                : "+16 Years of experience"
              }
            </p>
          </div>
        </motion.div>

        {/* Location Section */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col gap-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Location Details */}
          <motion.div
            className="bg-yellow-300 rounded-2xl p-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`${lang === "Ar" && "flex-row-reverse text-right"} text-2xl font-bold text-gray-800 flex items-center gap-2`}>
              <FaMapMarkerAlt className="text-gray-800" />
              {lang === "Ar" ? "موقعنا" : lang === "Fr" ? "Notre localisation" : "Our Location"}
            </h2>
            <p className="text-gray-700 mt-2 leading-relaxed">
              {lang === "Ar"
                ? "40، شارع بنزرت، الطابق الأول، لا جيروند الدار البيضاء، المغرب"
                : lang === "Fr"
                ? "40, Rue Benzert, 1er Etage la Gironde Casablanca, Maroc"
                : "40, Rue Benzert, 1st Floor la Gironde Casablanca, Morocco"
              }
            </p>
          </motion.div>

          {/* Google Maps Embed */}
          <motion.div
            className="overflow-hidden rounded-2xl shadow-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
          >
            <iframe
              className="w-full h-[300px] lg:h-[350px] border-0"
              src="https://www.google.com/maps?q=40,+Rue+Benzert,+1er+Etage+la+Gironde+Casablanca,+Morocco&output=embed"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Office;
