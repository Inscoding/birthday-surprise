import { motion } from "framer-motion";

export function WelcomeScreen() {
  return (
    <motion.section
      className="cinematic-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      aria-label="Welcome"
    >
      <motion.p
        className="cinematic-kicker text-[clamp(1.6rem,6vw,4.5rem)]"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        For someone special…
      </motion.p>
    </motion.section>
  );
}
