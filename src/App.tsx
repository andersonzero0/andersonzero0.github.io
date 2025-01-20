import { AboutMe } from "./components/about-me";
import { Header } from "./components/header";


const App = () => {

  return (
    <main className="container h-screen m-auto p-2 dark font-plex-mono flex flex-col gap-10">
      <Header />
      <AboutMe />
    </main>
  );
};

export default App;
