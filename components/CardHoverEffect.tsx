import { ARTICLES } from "@/constants";
import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffect({ lang }: { lang: string }) {
  const localizedArticles = ARTICLES.map((article) => ({
    ...article,
    title:
      lang === "Ang"
        ? article.title
        : lang === "Fr"
        ? article.frenchTitle
        : article.arabicTitle,
    description:
      lang === "Ang"
        ? article.description
        : lang === "Fr"
        ? article.frenchDescription
        : article.arabicDescription,
  }));

  return (
    <div className="max-w-7xl flex md:mx-auto lg:px-8">
      <HoverEffect items={localizedArticles} />
    </div>
  );
}
