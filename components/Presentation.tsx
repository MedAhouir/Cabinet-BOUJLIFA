"use client";
import { motion } from "framer-motion";

const Presentation = ({ lang }: { lang: string }) => {
  return (
    <section
      id="about"
      className={`w-full my-10 mx-0 flex flex-col gap-5 justify-between text-white text-lg px-4 sm:px-8 lg:px-12 py-8 bg-gray-800 ${lang === "Ar" && "text-right"}`}
    >
      <motion.div
        className="flex-col w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-sm text-yellow-300 uppercase tracking-wide">
          {lang === "Ang" && "- Presentation"}
          {lang === "Fr" && "- Présentation"}
          {lang === "Ar" && " تقديم -"}
        </p>
        <h1 className={`${lang === "Ar" ? "" : "font-lora"} text-4xl lg:text-6xl font-heading font-bold capitalize leading-tight text-yellow-300`}>
          {lang === "Ar" ? " تعريف" : "Definition"} 
        </h1>
      </motion.div>

      <motion.div
        className={`w-full justify-between flex flex-col lg:flex-row ${lang === "Ar" && "lg:flex-row-reverse justify-start text-right"}`}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {/* Left Section */}
        <motion.div
          className="flex flex-col gap-6 w-full lg:w-[550px] my-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>
            {lang === "Ang" &&
              <><span className="text-yellow-300 text-2xl capitalize">Boujilfa law firm </span>is a professional law firm offering high-quality legal services to individuals and businesses in various fields of law. The firm specializes in civil, criminal, commercial, administrative, and social law matters.</>
            }
            {lang === "Fr" &&
              <><span className="text-yellow-300 text-2xl capitalize">Le cabinet d'avocat Boujlifa </span>est un cabinet professionnel offrant des services juridiques de qualité supérieure aux particuliers et aux entreprises dans divers domaines du droit. Le cabinet se spécialise dans les affaires civiles, pénales, commerciales, administratives et sociales.</>
            }
            {lang === "Ar" &&
              <><span className="text-yellow-300 text-2xl capitalize"> مكتب المحاماة بوجليفة </span>هو مكتب محاماة مهني يقدم خدمات قانونية عالية الجودة للأفراد والشركات في مجالات مختلفة من القانون. يتخصص المكتب في القضايا المدنية والجنائية والتجارية والإدارية والاجتماعية.</>
            }
          </p>
          <p>
            {lang === "Ang" &&
              "It provides comprehensive legal advice, legal representation in court, and is committed to protecting the rights and interests of its clients with innovative and effective legal solutions."
            }
            {lang === "Fr" &&
              "Il fournit des conseils juridiques complets, une représentation légale devant les tribunaux et s'engage à protéger les droits et les intérêts de ses clients grâce à des solutions juridiques innovantes et efficaces."
            }
            {lang === "Ar" &&
              ".يوفر مشورة قانونية شاملة، وتمثيل قانوني أمام المحاكم، ويحرص على حماية حقوق عملائه ومصالحهم من خلال حلول قانونية مبتكرة وفعالة"
            }
          </p>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="flex flex-col gap-6 w-full lg:w-[500px] my-6 lg:mr-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <p>
            {lang === "Ang" &&
              <><b className="text-yellow-300">Boujlifa Law Firm</b> relies on the experience and expertise of Maître Boujlifa to provide accurate advice and strong defense, while adhering to the highest ethical and professional standards.</>
            }
            {lang === "Fr" &&
              <><b className="text-yellow-300">Le cabinet d'avocats Boujlifa</b> repose sur l'expérience et la compétence de Maître Boujlifa pour fournir des conseils précis et une défense solide, tout en respectant les normes éthiques et professionnelles les plus élevées.</>
            }
            {lang === "Ar" &&
              <>يعتمد <b className="text-yellow-300">مكتب المحاماة بوجليفة</b> على خبرة وكفاءة الأستاذ بوجليفة لتقديم نصائح دقيقة ودفاع قوي، مع الالتزام بأعلى المعايير الأخلاقية والمهنية</>
            }
          </p>
          <p>
            {lang === "Ang" &&
              "We place our clients' interests at the heart of our concerns and strive to achieve the best outcomes for all the cases we handle."
            }
            {lang === "Fr" &&
              "Nous plaçons l'intérêt de nos clients au cœur de nos préoccupations et nous nous efforçons d'obtenir les meilleurs résultats pour toutes les affaires que nous traitons."
            }
            {lang === "Ar" &&
              "نضع مصالح عملائنا في قلب اهتماماتنا ونسعى لتحقيق أفضل النتائج لجميع القضايا التي نتعامل معها."
            }
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Presentation;
