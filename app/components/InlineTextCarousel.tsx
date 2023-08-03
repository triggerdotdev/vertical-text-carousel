import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { usePageVisibility } from "~/hooks/usePageVisibility";

const variants = {
  enter: (direction: any) => ({
    y: 20,
    opacity: 0,
    scaleY: 0.5,
  }),
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
    scaleY: 1,
  },
  exit: (direction: any) => ({
    y: -20,
    opacity: 0,
    scaleY: 0.5,
  }),
};

export function InlineTextCarousel({
  texts,
  duration = 2000,
}: {
  texts: string[];
  duration?: number;
}) {
  const [index, setIndex] = useState(0);
  const visible = usePageVisibility();

  const cycleText = useCallback(() => {
    setIndex((i) => {
      return (i + texts.length + 1) % texts.length;
    });
  }, [texts.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      cycleText();
    }, duration);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [cycleText, duration, visible]);

  return (
    <div className="flex w-full">
      <span className="relative flex w-full justify-center">
        <AnimatePresence>
          <motion.span
            className="absolute top-0 text-bright"
            key={index}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.5,
              opacity: { duration: 0.4 },
            }}
          >
            {texts[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </div>
  );
}
