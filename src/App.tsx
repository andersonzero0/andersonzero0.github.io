import { AboutMe } from "./components/about-me";
import { Experiences } from "./components/experiences";
import { Header } from "./components/header";


const App = () => {

  return (
    <main className="container h-screen m-auto p-2 dark font-plex-mono flex flex-col gap-6 overflow-auto">
      <Header />
      <AboutMe />
      <Experiences />
    </main>
  );
};

export default App;
