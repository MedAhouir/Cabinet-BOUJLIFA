import Image from "next/image";
import ContactButton from "./ContactButton";
import { motion } from "framer-motion";

const Hero = ({ lang }: { lang: string }) => {
  return (
    <section className={`${lang === "Ar" && "lg:flex-row-reverse"} flex flex-col lg:flex-row justify-between w-full p-12 h-[85vh]`}>
      {/* Left Section */}
      <motion.div
        className={`flex flex-col justify-center items-start w-full lg:w-1/2 space-y-6 text-center lg:text-left`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className={`w-full lg:w-[550px] ${lang === "Ar" && "text-right"} text-left mx-auto lg:mx-0`}>
          <p className="text-sm text-gray-600 uppercase tracking-wide">
            {lang === "Ang" && "- Excellence in Legal Expertise"}
            {lang === "Fr" && "- Excellence en expertise juridique"}
            {lang === "Ar" && "التميز في الخبرة القانونية -"}
          </p>
          <h1 className={`${lang === "Ar" ? "" : "font-lora"} text-3xl sm:text-4xl lg:text-6xl font-bold capitalize leading-tight text-gray-800`}>
            {lang === "Ang" && "Your trusted partner for legal solutions."}
            {lang === "Fr" && "Votre partenaire de confiance pour des solutions juridiques."}
            {lang === "Ar" && "شريكك الموثوق للحلول القانونية"}
          </h1>
        </div>
        <p className={`w-full lg:w-[550px] text-gray-600 ${lang === "Ar" && "text-right"} text-left mx-auto lg:mx-0`}>
          {lang === "Ang" &&
            "Offering proactive risk management, personalized legal assistance, and expert counsel in diverse fields, from corporate law to civil responsibility."
          }
          {lang === "Fr" &&
            "Offrant une gestion proactive des risques, une assistance juridique personnalisée et des conseils d'experts dans divers domaines, du droit des affaires à la responsabilité civile."
          }
          {lang === "Ar" &&
            "تقديم إدارة استباقية للمخاطر، والمساعدة القانونية الشخصية، والإرشاد المتخصص في مجالات متنوعة، من القانون التجاري إلى المسؤولية المدنية"
          }
        </p>
        <div className={`flex w-full lg:w-[550px] ${lang === "Ar" && "flex-row-reverse justify-start gap-6 text-right"} flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-4`}>
          <ContactButton
            title={lang === "Ang" ? "Schedule a Consultation" : lang === "Fr" ? "Planifier une consultation" : "حدد موعد استشارة"}
            destination="#contact"
          />
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/Law9.png"
          alt={
            lang === "Ang"
              ? "Legal Expertise"
              : lang === "Fr"
              ? "Expertise juridique"
              : "الخبرة القانونية"
          }
          width={450}
          height={450}
          className="w-[80%] sm:w-[60%] lg:w-auto h-auto mx-auto"
          priority
        />
      </motion.div>
    </section>
  );
};

export default Hero;
