import Hero from "./components/Hero";
import TerminalLoader from "./components/Loader";
import SectionLoader from "./components/SectionLoader";
import LazySection from "./components/LazySection";
import Layout from "./Layout/Layout";
import { useInitialLoading } from "./hooks/useInitialLoading";
import { usePreventHorizontalScroll } from "./hooks/usePreventHorizontalScroll";
import { useActiveSection } from "./hooks/useActiveSection";
import { useCommandMenu } from "./hooks/useCommandMenu";
import { sectionIds } from "./utils/navigation";
import "./styles/loader.css";


function App() {
  // Custom hooks for cleaner code organization
  const loading = useInitialLoading();
  const activeSection = useActiveSection(sectionIds);
  const { isCommandMenuOpen, setIsCommandMenuOpen } = useCommandMenu();
  
  // Prevent horizontal overscroll on mobile
  usePreventHorizontalScroll();

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
        importFn={() => import("./components/About")}
        fallback={<SectionLoader message="Loading About..." />}
      />
      <LazySection
        id="skills"
        importFn={() => import("./components/Skills")}
        fallback={<SectionLoader message="Loading Skills..." />}
      />
      <LazySection
        id="github-contributions"
        importFn={() => import("./components/GitHubCalendar")}
        fallback={<SectionLoader message="Loading Contributions..." />}
      />
      <LazySection
        id="experience"
        importFn={() => import("./components/Experience")}
        fallback={<SectionLoader message="Loading Experience..." />}
      />
      <LazySection
        id="projects"
        importFn={() => import("./components/Projects")}
        fallback={<SectionLoader message="Loading Projects..." />}
      />
      <LazySection
        id="education"
        importFn={() => import("./components/Education")}
        fallback={<SectionLoader message="Loading Education..." />}
      />
      <LazySection
        id="contact"
        importFn={() => import("./components/Contact")}
        fallback={<SectionLoader message="Loading Contact..." />}
      />

      <div className="chatbot-widget">
        <LazySection 
          id='chatbot'
          importFn={() => import("./components/ChatbotWidget")} 
          fallback={<SectionLoader message="Loading Chatbot..." />} 
        />
      </div>
    </Layout>
  );
}


export default App;
