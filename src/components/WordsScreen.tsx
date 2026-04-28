import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const words = ["Strong", "Kind", "Always supportive"];

export function WordsScreen({ onComplete }: { onComplete: () => void }) {
  const [visibleWords, setVisibleWords] = useState(0);

  useEffect(() => {
    const timers = words.map((_, index) =>
      window.setTimeout(() => setVisibleWords(index + 1), index * 1000),
    );
    timers.push(window.setTimeout(onComplete, words.length * 1000 + 1000));

    return () => timers.forEach(window.clearTimeout);
  }, [onComplete]);

  return (
    <motion.section
      className="cinematic-screen gap-5 sm:gap-7"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55, ease: "easeInOut" }}
      aria-label="Birthday message words"
    >
      {words.slice(0, visibleWords).map((word) => (
        <motion.p
          key={word}
          className="cinematic-word text-[clamp(2rem,8vw,6.5rem)]"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          {word}
        </motion.p>
      ))}
    </motion.section>
  );
}
