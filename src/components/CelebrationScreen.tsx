import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BirthdayCake } from "./BirthdayCake";

export function CelebrationScreen() {
  const [celebrating, setCelebrating] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(async () => {
      setCelebrating(true);
      const { default: confetti } = await import("canvas-confetti");
      confetti({ particleCount: 140, spread: 85, origin: { y: 0.62 }, colors: ["#f7fbff", "#8ecbff", "#f7a9c8", "#ffd36e"] });
      window.setTimeout(() => {
        confetti({ particleCount: 80, spread: 120, origin: { y: 0.35 }, scalar: 0.8, colors: ["#dbeafe", "#60a5fa", "#ffffff"] });
      }, 420);
    }, 2000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <motion.section
      className="cinematic-screen overflow-hidden px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.65, ease: "easeInOut" }}
      aria-label="Celebration"
    >
      <BirthdayCake blown={celebrating} />
      <motion.div
        className="final-message mt-12 text-center"
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={celebrating ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.96 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <p className="text-[clamp(2rem,7vw,5.5rem)]">Happy Birthday akka ❤️</p>
        <p className="mt-4 text-[clamp(1.1rem,3vw,2rem)]">Made with love, Sowjii 💙</p>
      </motion.div>
    </motion.section>
  );
}
