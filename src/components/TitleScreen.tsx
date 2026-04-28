import { motion } from "framer-motion";

export function TitleScreen() {
  return (
    <motion.section
      className="cinematic-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55, ease: "easeInOut" }}
      aria-label="Birthday title"
    >
      <motion.h1
        className="cinematic-title text-[clamp(2.25rem,9vw,7.5rem)]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        Happy Birthday Akhila akka 🎉
      </motion.h1>
    </motion.section>
  );
}
