import { useLenis } from "./hooks/useLenis";
import { Preloader } from "./components/Preloader";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Services } from "./components/Services";
import { CtaBand } from "./components/CtaBand";
import { WhyCleiro } from "./components/WhyCleiro";
import { Process } from "./components/Process";
import { Work } from "./components/Work";
import { Founder } from "./components/Founder";
import { Stats } from "./components/Stats";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";

export default function App() {
  useLenis();

  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <CtaBand />
        <WhyCleiro />
        <Process />
        <Work />
        <Founder />
        <Stats />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
