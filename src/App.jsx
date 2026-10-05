import React from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { REELS } from "./data/reels";
import { AmbientBackdrop } from "./components/AmbientBackdrop";
import { CustomCursor } from "./components/CustomCursor";
import { GrainOverlay } from "./components/GrainOverlay";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { ReelViewer } from "./components/ReelViewer";
import { Intro } from "./sections/Intro";
import { Profile } from "./sections/Profile";
import { ReelArchive } from "./sections/ReelArchive";
import { Accounts } from "./sections/Accounts";
import { EditingStyle } from "./sections/EditingStyle";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";

function AppContent() {
  const { activeReel, setActiveAccent } = useTheme();

  const activeSection = useScrollSpy([
    "intro",
    "profile",
    "work",
    "accounts",
    "style",
    "about",
    "contact",
  ]);

  React.useEffect(() => {
    setActiveAccent(
      activeReel?.accentColor ||
        REELS[0]?.accentColor ||
        "#D66A32"
    );
  }, [activeReel, setActiveAccent]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#080809] text-zinc-100">
      <LoadingScreen />
      <CustomCursor />
      <GrainOverlay />
      <AmbientBackdrop />
      <Navbar activeSection={activeSection} />

      <main className="relative z-10">
        <Intro />
        <Profile />
        <ReelArchive reels={REELS} />
        <Accounts />
        <EditingStyle />
        <About />
        <Contact />
      </main>

      <ReelViewer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
