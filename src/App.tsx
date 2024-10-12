import { Experiences } from "./components/experiences";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";

const App = () => {
  // const [openCommand, setOpenCommand] = useState(false);

  // useEffect(() => {
  //   const handleKeyDown = (event: KeyboardEvent) => {
  //     if ((event.metaKey || event.ctrlKey) && event.key === "k") {
  //       event.preventDefault();
  //       setOpenCommand(!openCommand);
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeyDown);
  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [openCommand]);

  return (
    <main className="text-white h-screen scroll-smooth bg-[url('./assets/background.png')] bg-center bg-cover w-screen bg-no-repeat overflow-auto">
      <Header />
      <main className="container m-auto px-2 flex flex-col gap-36">
        <Hero />
        <Experiences />
        <Projects />
      </main>
      <Footer />
    </main>
  );
};

export default App;
