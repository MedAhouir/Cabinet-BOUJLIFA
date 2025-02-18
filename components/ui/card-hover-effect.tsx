import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    imageSrc?: string; // Add optional image property for items
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-3 gap-8 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className={cn(
            "relative group",
            // Make the first and last two elements span the entire row
            idx === 0 || idx === 12 ? "lg:col-span-2" : ""  
          )}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-yellow-300 dark:bg-foreground block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card
            className="h-full"
            imageSrc={item.imageSrc} // Pass the image source
          >
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  imageSrc,
  imageAlt,
}: {
  className?: string;
  children: React.ReactNode;
  imageSrc?: string; // Optional image source
  imageAlt?: string; // Alt text for accessibility
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 overflow-hidden border border-gray-400 cursor-pointer dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 h-full",
        className
      )}
    >
      {/* Image Section */}
      {imageSrc && (
        <div className="relative w-full h-48 overflow-hidden rounded-xl mb-4">
          <img
            src={imageSrc}
            alt={imageAlt || "Card image"}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      {/* Content Section */}
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("foreground font-bold tracking-wide mt-4 text-xl", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-gray-500 tracking-wide leading-relaxed text-lg",
        className
      )}
    >
      {children}
    </p>
  );
};
