"use client"
import Articles from "@/components/Articles";
import Presentation from "@/components/Presentation";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Rapper from "@/components/Rapper";
import Office from "@/components/Office";
import Contact from "@/components/Contact";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";


export default function Home() {
  const [lang, setLang] = useState("Fr");

  useEffect(() => {
    document.body.setAttribute('cz-shortcut-listen', 'true');
    return () => {
      document.body.removeAttribute('cz-shortcut-listen');
    };
  }, []);useEffect(() => {
    document.body.setAttribute('cz-shortcut-listen', 'true');
    return () => {
      document.body.removeAttribute('cz-shortcut-listen');
    };
  }, []);
  return (
    <>
      <Rapper> 
        <Navbar lang={lang} setLang={setLang} />
        <Hero lang={lang} />
        </Rapper>    
      <div className="w-full bg-gray-800">
        <Rapper>
          <Presentation lang={lang} />
        </Rapper>
      </div>
      <Rapper>
        <Articles lang={lang} />
        <Office lang={lang} />
      </Rapper>
      <div className="w-full bg-gray-800">
        <Rapper>
          <Contact lang={lang} />
        </Rapper>
      </div>
      <Rapper>
        <Footer lang={lang} />
      </Rapper>
   </>
  );
}
