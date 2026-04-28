import { useCallback, useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";

import { CelebrationScreen } from "@/components/CelebrationScreen";
import { TitleScreen } from "@/components/TitleScreen";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { WordsScreen } from "@/components/WordsScreen";

export const Route = createFileRoute("/")({
  component: BirthdaySequence,
});

type SequenceSection = "welcome" | "title" | "words" | "celebration";

function BirthdaySequence() {
  const [section, setSection] = useState<SequenceSection>("welcome");

  // 🎯 Dynamic tab title based on section
  useEffect(() => {
    if (section === "welcome") {
      document.title = "For someone special…";
    }

    if (section === "title") {
      document.title = "Happy Birthday Akhila akka 🎉";
    }

    if (section === "words") {
      document.title = "Strong • Kind • Supportive";
    }

    if (section === "celebration") {
      document.title = "Made with love, Sowjii 💙";
    }
  }, [section]);

  // ⏱️ Section transitions
  useEffect(() => {
    if (section === "welcome") {
      const timer = window.setTimeout(() => setSection("title"), 1500);
      return () => window.clearTimeout(timer);
    }

    if (section === "title") {
      const timer = window.setTimeout(() => setSection("words"), 3000);
      return () => window.clearTimeout(timer);
    }
  }, [section]);

  const showCelebration = useCallback(() => {
    setSection("celebration");
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <AnimatePresence mode="wait">
        {section === "welcome" && <WelcomeScreen key="welcome" />}
        {section === "title" && <TitleScreen key="title" />}
        {section === "words" && <WordsScreen key="words" onComplete={showCelebration} />}
        {section === "celebration" && <CelebrationScreen key="celebration" />}
      </AnimatePresence>
    </main>
  );
}
