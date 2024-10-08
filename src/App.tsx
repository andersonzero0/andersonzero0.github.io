import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";

const App = () => {
  return (
    <main className="text-white h-screen scroll-smooth bg-[url('./assets/background.png')] bg-center bg-cover w-screen bg-no-repeat overflow-auto">
      <Header />
      <main className="container m-auto">
        <Hero />
        <Projects />
      </main>
    </main>
  );
};

export default App;
