import { CoreStack } from "./components/core-stack";
import { Experiences } from "./components/experiences";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import DotGrid from "./components/DotGrid";

const App = () => {
  return (
    <div className="bg-background text-on-surface min-h-screen relative overflow-hidden">
      {/* Dot Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <DotGrid
          dotSize={2}
          gap={40}
          baseColor="#1a1a1a"
          activeColor="#a1ffc1"
          proximity={120}
          speedTrigger={80}
          shockRadius={200}
          shockStrength={4}
          className="!p-0"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main className="pt-24 px-8 max-w-7xl mx-auto space-y-32 pb-32">
          <section id="hero">
            <Hero />
          </section>
          <section id="stack">
            <CoreStack />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="experience">
            <Experiences />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
