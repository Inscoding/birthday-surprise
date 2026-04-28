import { motion } from "framer-motion";

export function BirthdayCake({ blown }: { blown: boolean }) {
  return (
    <motion.div
      className="cake-stage"
      initial={{ opacity: 0, y: 28, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: blown ? 0.98 : 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Birthday cake"
      role="img"
    >
      <div className="cake-candle">
        <motion.span
          className="cake-flame"
          initial={{ opacity: 1, scale: 1 }}
          animate={blown ? { opacity: 0, scale: 0.25, y: -18 } : { opacity: [0.8, 1, 0.75], scale: [0.9, 1.08, 0.95] }}
          transition={
            blown
              ? { duration: 0.7, ease: "easeOut" }
              : { duration: 0.9, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
          }
        />
      </div>
      <div className="cake-top" />
      <div className="cake-body">
        <span />
        <span />
        <span />
      </div>
      <div className="cake-plate" />
      <motion.div
        className="cake-wish"
        initial={{ opacity: 0, scale: 0.7, x: 18 }}
        animate={blown ? { opacity: [0, 0.75, 0], scale: [0.7, 1.35, 1.8], x: 80 } : { opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </motion.div>
  );
}
