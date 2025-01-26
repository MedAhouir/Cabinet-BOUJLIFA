"use client";
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = ({ lang }: { lang: string }) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("Sending...");

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_mibq5ep",
          template_id: "template_pgamgv4",
          user_id: "oaXG6ozzDDzYSIm-w",
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
        }),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        setStatus(`Failed to send message. ${errorData?.message || 'Unknown error'}`);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setStatus("Error: " + error.message);
      } else {
        setStatus("Unknown error occurred");
      }
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className={`${lang === "Ar" && "text-right lg:flex-row-reverse"} w-full my-10 fx flex-col lg:flex-row justify-between text-white text-lg px-4 sm:px-8 lg:px-12 py-8`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Left Section */}
      <motion.div
        className="flex flex-col gap-6 max-w-[600px] my-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col">
          <p className="text-sm text-yellow-300 uppercase tracking-wide">
            {lang === "Ar" ? "لنتواصل -" : lang === "Fr" ? "- Contact" : "- Get in touch"}
          </p>
          <h1 className={`${lang === "Ar" ? "" : "font-lora"} text-4xl lg:text-6xl font-heading font-bold capitalize leading-tight text-yellow-300`}>
            {lang === "Ar" ? "اتصل بنا" : lang === "Fr" ? "Contactez-nous" : "Contact us."}
          </h1>
        </div>
        <p className="w-full text-lg leading-relaxed">
          {lang === "Ar" 
            ? <>البريد الإلكتروني، الهاتف، أو تعبئة النموذج، <br/> نحن نحب سماعك! تواصل معنا للاستفسارات أو الاستشارات أو المساعدة </>
            : lang === "Fr" 
            ? <>Envoyez-nous un email, appelez-nous ou remplissez le formulaire,<br /> nous serions ravis de vous entendre! Contactez-nous pour des demandes, des consultations ou de l'assistance.</>
            : <>Email, call, or complete the form,<br /> We'd love to hear from you! Reach out to us for inquiries, consultations, or assistance.</>}
        </p>
        <motion.div
          className="flex flex-col lg:flex-row gap-1 justify-between w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className={`${lang === "Ar" && " flex-row-reverse"} flex  items-center gap-4`}
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <FaPhoneAlt className={`${lang === "Ar" && "rotate-[4.5rad]"} text-yellow-500 text-2xl`}/>
            <div>
              <p className="font-semibold">
                {lang === "Ar" ? "الهاتف" : lang === "Fr" ? "Téléphone" : "Phone"}
              </p>
              <p className="text-gray-300">+212 522 300 539</p>
            </div>
          </motion.div>
          <motion.div
            className={`${lang === "Ar" && "text-right flex-row-reverse"} flex  items-center gap-4`}
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <FaEnvelope className="text-yellow-500 text-2xl" />
            <div>
              <p className="font-semibold">
                {lang === "Ar" ? "البريد الإلكتروني" : lang === "Fr" ? "Email" : "Email"}
              </p>
              <p className="text-gray-300">contactcabinetboujlifa@gmail.com</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="flex flex-col gap-6 text-white lg:w-[500px] my-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-2xl font-bold mb-6">
          {lang === "Ar" ? "أرسل رسالة" : lang === "Fr" ? "Envoyer un message" : "Send a Message"}
        </h2>
        <form onSubmit={sendEmail} className="space-y-6">
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <label htmlFor="name" className="mb-2">
              {lang === "Ar" ? "اسمك" : lang === "Fr" ? "Votre Nom" : "Your Name"}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`${lang === "Ar" && "text-right"} p-4 rounded-lg border text-gray-800 border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none`}
              placeholder={lang === "Ar" ? "أدخل اسمك" : lang === "Fr" ? "Entrez votre nom" : "Enter your name"}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </motion.div>
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <label htmlFor="email" className="mb-2">
              {lang === "Ar" ? "بريدك الإلكتروني" : lang === "Fr" ? "Votre Email" : "Your Email"}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`${lang === "Ar" && "text-right"} p-4 rounded-lg border text-gray-800 border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none`}
              placeholder={lang === "Ar" ? "أدخل بريدك الإلكتروني" : lang === "Fr" ? "Entrez votre email" : "Enter your email"}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </motion.div>
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <label htmlFor="message" className="mb-2">
              {lang === "Ar" ? "رسالتك" : lang === "Fr" ? "Votre Message" : "Your Message"}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className={`${lang === "Ar" && "text-right"} p-4 rounded-lg border text-gray-800 border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none`}
              placeholder={lang === "Ar" ? "اكتب رسالتك هنا" : lang === "Fr" ? "Ecrivez votre message ici" : "Write your message here"}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </motion.div>
          <motion.button
            type="submit"
            className="w-full py-4 bg-yellow-500 text-gray-800 rounded-lg font-semibold text-lg shadow-lg hover:bg-white hover:text-yellow-400"
            disabled={isSending}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            {isSending ? "Sending..." : lang === "Ar" ? "إرسال" : lang === "Fr" ? "Envoyer" : "Send"}
          </motion.button>
        </form>
        {status && <p className="mt-4 text-center">{status}</p>}
      </motion.div>
    </motion.section>
  );
};

export default Contact;
