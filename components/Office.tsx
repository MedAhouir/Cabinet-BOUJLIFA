"use client";
import { STATES } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import Number from "./Number";

const Office = ({ lang }: { lang: string }) => {
  return (
    <section id="location" className="flex flex-col w-full">
      <div
        className={`${
          lang === "Ar" && "text-right"
        } w-full my-16 mx-0 flex flex-col gap-16 text-gray-800 text-lg px-4 sm:px-8 lg:px-12 py-8`}
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
            {lang === "Ar"
              ? "مكتبنا -"
              : lang === "Fr"
              ? "- Notre bureau"
              : "- Our office"}
          </p>
          <h1 className={`${lang === "Ar" ? "" : "font-lora"} text-4xl lg:text-6xl font-heading font-bold capitalize leading-tight`}>
            {lang === "Ang" && <>Boujlifa Law Firm</>}
            {lang === "Fr" && <>Le cabinet d'avocats Boujlifa</>}
            {lang === "Ar" && <>مكتب المحاماة بوجليفة</>} 
          </h1>
        </motion.div>

        {/* Content Section */}
        <motion.div
          className={`${
            lang === "Ar" && "lg:flex-row-reverse text-right"
          } flex flex-col lg:flex-row gap-12`}
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
                alt={
                  lang === "Ar"
                    ? "ملف المحامي"
                    : lang === "Fr"
                    ? "Profil de l'avocat"
                    : "Lawyer Profile"
                }
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-2xl text-center font-bold text-gray-800">
                {lang === "Ar"
                  ? "محمد بوجليفة"
                  : lang === "Fr"
                  ? "Mhamed BOUJLIFA"
                  : "Mhamed BOUJLIFA"}
              </h2>
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
              <h2
                className={`${
                  lang === "Ar" && "flex-row-reverse text-right"
                } text-2xl font-bold text-gray-800 flex items-center gap-2`}
              >
                <FaMapMarkerAlt className="text-gray-800" />
                {lang === "Ar"
                  ? "موقعنا"
                  : lang === "Fr"
                  ? "Notre localisation"
                  : "Our Location"}
              </h2>
              <p className="text-gray-700 mt-2 leading-relaxed">
                {lang === "Ar"
                  ? "40، شارع بنزرت، الطابق الأول، لا جيروند الدار البيضاء، المغرب"
                  : lang === "Fr"
                  ? "40, Rue Benzert, 1er Etage la Gironde Casablanca, Maroc"
                  : "40, Rue Benzert, 1st Floor la Gironde Casablanca, Morocco"}
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.015405688015!2d-7.6005151!3d33.5837279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4b586b9b73%3A0xb71a7edb5fd93b74!2sCabinet%20Ma%C3%AEtre%20MHamed%20Boujlifa!5e0!3m2!1sen!2sma!4v1614598464859!5m2!1sen!2sma"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Grid Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-12 pt-0 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        {STATES.map((state, i) => (
          <div
            key={i}
            className="group flex flex-col items-center justify-center text-center p-4 hover:scale-110 border-2 border-gray-500 rounded-lg shadow-md hover:bg-gray-800 hover:shadow-lg transition-all duration-300"
          >
            <h1 className="text-4xl font-bold text-yellow-500">
              <span className="flex">
                <Number n={state.number} /> {i === 3 ? "%" : ""}
              </span>
            </h1>
            <h2 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-white transition-all duration-300">
              {lang === "Ang" && state.title.En}
              {lang === "Fr" && state.title.Fr}
              {lang === "Ar" && state.title.Ar}
            </h2>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Office;
