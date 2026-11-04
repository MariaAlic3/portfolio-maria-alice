import Header from './components/Header';
import TopoDoSite from './components/TopoDoSite';
import Especialidades from './components/Especialidades';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';

function App() {
  return (
    <>
      <Header />

      <main>
        <TopoDoSite />
        <Especialidades />
        <Sobre />
        <Projetos />
      </main>
    </>
  );
}

export default App;
