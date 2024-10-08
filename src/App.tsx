import { Header } from "./components/header";
import { Hero } from "./components/hero";

const App = () => {
  return (
    <main className="text-white h-screen bg-[url('./assets/background.png')] bg-center bg-cover w-screen bg-no-repeat overflow-auto">
      <Header />
      <main className="container m-auto">
        <Hero />
        <Hero />
      </main>
    </main>
  );
};

export default App;
