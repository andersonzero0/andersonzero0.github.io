
import { Header } from "./components/header";
import { Hero } from "./components/hero";



const App = () => {

  return (
    <main className="m-auto flex flex-col gap-3">
      <Header />
      <section className="container m-auto">
        <Hero/>
      </section>
    </main>
  );
};

export default App;
