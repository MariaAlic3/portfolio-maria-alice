import Header from './components/Header';
import TopoDoSite from './components/TopoDoSite';
import Especialidades from './components/Especialidades';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import Contato from './components/Contato';

function App() {
  return (
    <>
      <Header />

      <main>
        <TopoDoSite />
        <Especialidades />
        <Sobre />
        <Projetos />
        <Contato />
      </main>
    </>
  );
}

export default App;
