"use client";
import Link from "next/link";
import ContactButton from "./ContactButton";
import { NAV_LINKS } from "@/constants";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = ({ lang, setLang, }: { lang: string; setLang: React.Dispatch<React.SetStateAction<string>>; }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.nav
      className={`${
        lang === "Ar" ? "flex-row-reverse" : ""
      } w-full flex items-center justify-between h-[15vh] px-4 sm:px-8 lg:px-12 py-8`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Logo */}
      <Link href="/" className={`${lang === "Ar" ? "flex-row-reverse" : "" } fx gap-2 text-xl font-medium text-black`}>
        <div className="hidden lg:block">
          {lang === "Ar" ? "مكتب " : lang === "Fr" ? "Cabinet " : "Cabinet "}
          <span className="font-bold text-yellow-500">
            {lang === "Ar" ? "بوجليفة" : "BOUJLIFA"}
          </span>
        </div>
        <Image 
          src="/logo.png"
          alt="Logo"
          width={50}
          height={50} 
        />
      </Link>

      {/* Desktop Navigation Links (Hidden on Medium and Smaller Devices) */}
      <motion.div
        className={`hidden lg:flex items-center gap-8 ${
          lang === "Ar" ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="font-semibold text-black text-lg transition-all duration-300 hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500"
          >
            {lang === "Ang"
              ? link.label
              : lang === "Fr"
              ? link.frenchLabel
              : link.arabicLabel}
          </Link>
        ))}
      </motion.div>

      {/* Language Selector */}
      <LanguageSelector
        setLang={setLang}
        className="flex items-center gap-4"
      />

      {/* Contact Button (Desktop Only) */}
      <div className="hidden lg:flex">
        <ContactButton
          title={
            lang === "Ang"
              ? "Get in touch"
              : lang === "Fr"
              ? "Contactez-nous"
              : "تواصل معنا"
          }
          destination="#contact"
        />
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="relative lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-500 hover:text-yellow-500 focus:outline-none"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
        </button>
      </div>

      {/* Mobile Pop-Up Menu */}
      {menuOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className={`fixed top-0 ${
              lang === "Ar" ? "left-0" : "right-0"
            } w-3/4 max-w-xs h-full bg-white shadow-lg flex flex-col justify-between p-6`}
            initial={{ x: lang === "Ar" ? -300 : 300 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <button
                onClick={toggleMenu}
                className="text-gray-500 hover:text-yellow-500 self-end mb-6"
              >
                <IoClose size={30} />
              </button>
              <nav className="flex flex-col space-y-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    href={link.href}
                    key={link.key}
                    onClick={toggleMenu}
                    className="font-semibold text-gray-700 text-lg transition-all duration-300 hover:text-yellow-500"
                  >
                    {lang === "Ang"
                      ? link.label
                      : lang === "Fr"
                      ? link.frenchLabel
                      : link.arabicLabel}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="mt-8">
              <ContactButton
                title={
                  lang === "Ang"
                    ? "Get in touch"
                    : lang === "Fr"
                    ? "Contactez-nous"
                    : "تواصل معنا"
                }
                destination="#contact"
                className="w-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
