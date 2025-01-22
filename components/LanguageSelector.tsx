import { languages } from "@/constants";

const LanguageSelector = ({
  setLang,
  className,
}: {
  setLang: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
}) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLang(lang.code)}
          className="py-1 px-3 text-sm font-medium text-gray-800 border border-gray-300 rounded-md hover:text-yellow-500 hover:border-yellow-500 transition-all"
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
