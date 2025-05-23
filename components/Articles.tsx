import { CardHoverEffect } from "./CardHoverEffect";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Articles = ({ lang }: { lang: string }) => {
  // Intersection Observer hooks to detect when the section is in view
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: false, // Ensure it triggers every time the section comes into view
    threshold: 0.05,    // Trigger when at least 5% of the section is visible
  });  

  const title =
    lang === "Ang"
      ? "The area where we practice law."
      : lang === "Fr"
      ? "Le domaine où nous exerçons le droit."
      : "المجالات التي نمارس فيها القانون";

  const subtitle =
    lang === "Ang"
      ? "- Legal disciplines."
      : lang === "Fr"
      ? "- Disciplines juridiques."
      : "التخصصات القانونية -";

  const description =
    lang === "Ang"
      ? "We specialize in providing tailored legal services in civil, criminal, commercial, administrative, and social law. Our expertise ensures precise advice and a strong defense for our clients."
      : lang === "Fr"
      ? "Nous sommes spécialisés dans la prestation de services juridiques sur mesure en droit civil, pénal, commercial, administratif et social. Notre expertise garantit des conseils précis et une défense solide pour nos clients."
      : "نحن متخصصون في تقديم خدمات قانونية مخصصة في القانون المدني والجنائي والتجاري والإداري والاجتماعي. تضمن خبرتنا تقديم استشارات دقيقة ودفاع قوي لعملائنا.";

  return (
    <section
      ref={sectionRef}
      id="articles"
      className={`flex flex-col justify-between w-full px-4 sm:px-8 lg:px-12 py-8 ${lang === "Ar" ? "text-right" : "text-left"}`}
    >
      {/* Title with animation */}
      <motion.p
        className="text-sm text-black uppercase tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }} // Trigger animation when in view
        transition={{ duration: 1 }}
      >
        {subtitle}
      </motion.p>

      <div className={`flex flex-col gap-5 lg:flex-row ${lang === "Ar" ? "lg:flex-row-reverse" : ""} justify-between`}>
        {/* Left Section (Title) */}
        <motion.div
          className="flex flex-col justify-center w-full lg:w-1/2 space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Animate on scroll
          transition={{ duration: 1 }}
        >
          <h1 className={`${lang === "Ar" ? "" : "font-lora"} text-4xl lg:text-6xl font-heading font-bold capitalize leading-tight text-black`}>
            {title}
          </h1>
        </motion.div>

        {/* Right Section (Description) */}
        <motion.div
          className="flex flex-col justify-center w-full lg:w-[535px] space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Animate on scroll
          transition={{ duration: 1 }}
        >
          <p className="text-gray-600 text-lg">{description}</p>
        </motion.div>
      </div>

      {/* Card Hover Effect */}
      <motion.div
        className="flex mt-10 lg:items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <CardHoverEffect lang={lang} />
      </motion.div>
    </section>
  );
};

export default Articles;
