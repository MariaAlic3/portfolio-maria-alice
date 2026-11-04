import Header from './components/Header';
import TopoDoSite from './components/TopoDoSite';
import Especialidades from './components/Especialidades';
import Sobre from './components/Sobre';

function App() {
  return (
    <>
      <Header />

      <main>
        <TopoDoSite />
        <Especialidades />
        <Sobre />
      </main>
    </>
  );
}

export default App;
