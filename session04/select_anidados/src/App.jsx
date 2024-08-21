import { Selects } from "./components/Selects";

const App = () => {
  return (
      <div className="container h-5/6 w-full flex flex-col justify-center items-center rounded-md">
        <h1 className="text-6xl mb-5 text-slate">
        Aprendizaje <span className="text-sky">React</span>
        </h1>
        <div className="relative md:w-2/6 sm:w-1/1 h-2/4 mt-5">
        <p className="text-slate">Elige una opción</p>
          <Selects />
        </div>
      </div>
  );
};

export default App;
