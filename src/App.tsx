import { Experiences } from './components/experiences';
import { Header } from './components/header';
import { Hero } from './components/hero';

const App = () => {
  return (
    <main className="m-auto flex flex-col gap-3 overflow-auto">
      <Header />
      <section className="container m-auto flex flex-col gap-4 px-4">
        <Hero />
        <Experiences />
      </section>
    </main>
  );
};

export default App;
