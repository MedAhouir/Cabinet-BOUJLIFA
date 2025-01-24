import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const Number = ({ n }: { n: number }) => {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (value) => Math.round(value));
  const [displayValue, setDisplayValue] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (startAnimation) {
      const controls = animate(motionValue, n, {
        duration: 1,
        delay: 0.2,
        ease: "easeOut",
      });

      const unsubscribe = rounded.onChange((latest) => {
        setDisplayValue(latest);
      });

      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [startAnimation, n, motionValue, rounded]);

  return (
    <motion.div ref={ref}>
      {displayValue}
    </motion.div>
  );
};

export default Number;
