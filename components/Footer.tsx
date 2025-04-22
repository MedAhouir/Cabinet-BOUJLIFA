"use client";
import Link from "next/link";
import { footerLinks } from "@/constants";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = ({ lang }: { lang: string }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`w-full text-black px-4 sm:px-8 lg:px-12 py-8 ${
        lang === "Ar" ? "text-right" : "text-left"
      }`}
    >
      {/* Main Footer Content */}
      <div className={`${lang === "Ar" && "text-right lg:flex-row-reverse"} flex flex-col lg:flex-row justify-between items-center gap-6`}>
        {/* Logo and Description */}
        <div className={`flex flex-col gap-4 ${lang === "Ar" ? "lg:items-end" : "lg:items-start"}`}>
          <Link href="/" className="text-2xl font-bold text-yellow-500">
            {lang === "Ar" ? "مكتب بوجليفة" : "Cabinet BOUJLIFA"}
          </Link>
          <p className="hidden lg:flex text-sm max-w-md">
            {lang === "Ang"
              ? "Providing professional services tailored to your needs."
              : lang === "Fr"
              ? "Offrant des services professionnels adaptés à vos besoins."
              : "تقديم خدمات احترافية تلبي احتياجاتك."}
          </p>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="hidden lg:flex flex-col lg:flex-row gap-4 lg:gap-8">
            {footerLinks.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="hover:text-yellow-500 transition"
                >
                  {lang === "Ang"
                    ? link.AngLabel
                    : lang === "Fr"
                    ? link.FrLabel
                    : link.ArLabel }
                </Link>
              </li>
            ))}
          </ul>
        </nav> 

        {/* Contact Information */}
        <div className={`flex gap-2 ${lang === "Ar" ? "lg:items-end" : "lg:items-start"}`}>
          <Link href="https://www.facebook.com/p/Cabinet-Ma%C3%AEtre-Mhamed-Boujlifa-100091478464484/?_rdr">
            <FaFacebook className="text-black text-4xl" />
          </Link>
          <Link href="https://ma.linkedin.com/company/cabinet-d-avocat-ma%C3%AEtre-boujlifa">
            <FaLinkedin className="text-black text-4xl" />
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-black my-6"></div>

      {/* Bottom Section */}
      <div className={`${lang === "Ar" && "text-right lg:flex-row-reverse"} flex flex-col lg:flex-row justify-between items-center`}>
        <p className="text-sm">
          © {currentYear} {lang === "Ar" ? "مكتب بوجليفة" : "Cabinet BOUJLIFA"}.{" "}
          {lang === "Ang"
            ? "All rights reserved."
            : lang === "Fr"
            ? "Tous droits réservés."
            : "كل الحقوق محفوظة."}
        </p>
      </div>
    </footer>
  );
};

export default Footer;