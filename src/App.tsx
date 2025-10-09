import { useEffect } from "react";
import Hero from "./components/hero/Hero";
import TerminalLoader from "./components/loader/Loader";
import SectionLoader from "./components/SectionLoader";
import LazySection from "./components/LazySection";
import Layout from "./Layout/Layout";
import { useInitialLoading } from "./hooks/useInitialLoading";
import { usePreventHorizontalScroll } from "./hooks/usePreventHorizontalScroll";
import { useActiveSection } from "./hooks/useActiveSection";
import { useCommandMenu } from "./hooks/useCommandMenu";
import { sectionIds } from "./utils/navigation";
import { useMusic } from "@/hooks/useMusic";
import "./styles/loader.css";


function App() {
  const { unmuteAndPlay } = useMusic("/sounds/cornfield_chase.mp3", { loop: true });
  const loading = useInitialLoading();
  const activeSection = useActiveSection(sectionIds);
  const { isCommandMenuOpen, setIsCommandMenuOpen } = useCommandMenu();
  
  usePreventHorizontalScroll();

  useEffect(() => {
    const handleScroll = () => {
      unmuteAndPlay(); // unmute + actually play
      window.removeEventListener("scroll", handleScroll); // run once
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [unmuteAndPlay]);

  // Show loading screen initially
  if (loading) return <TerminalLoader />;

  return (
    <Layout 
      activeSection={activeSection}
      isCommandMenuOpen={isCommandMenuOpen}
      setIsCommandMenuOpen={setIsCommandMenuOpen}
    >
      {/* Main Content Sections */}
      <section id="home">
        <Hero />
      </section>

      <LazySection
        id="about"
        importFn={() => import("./components/about/About")}
        fallback={<SectionLoader message="Loading About..." />}
      />
      <LazySection
        id="skills"
        importFn={() => import("./components/skills/Skills")}
        fallback={<SectionLoader message="Loading Skills..." />}
      />
      <LazySection
        id="github-contributions"
        importFn={() => import("./components/skills/GitHubCalendar")}
        fallback={<SectionLoader message="Loading Contributions..." />}
      />
      <LazySection
        id="experience"
        importFn={() => import("./components/Experience/Experience")}
        fallback={<SectionLoader message="Loading Experience..." />}
      />
      <LazySection
        id="projects"
        importFn={() => import("./components/project/Projects")}
        fallback={<SectionLoader message="Loading Projects..." />}
      />
      <LazySection
        id="education"
        importFn={() => import("./components/education/Education")}
        fallback={<SectionLoader message="Loading Education..." />}
      />
      <LazySection
        id="contact"
        importFn={() => import("./components/contact/Contact")}
        fallback={<SectionLoader message="Loading Contact..." />}
      />

      <div className="chatbot-widget">
        <LazySection 
          id='chatbot'
          importFn={() => import("./components/common/ChatbotWidget")} 
          fallback={<SectionLoader message="Loading Chatbot..." />} 
        />
      </div>
    </Layout>
  );
}


export default App;
