import Header from './components/Header';
import TopoDoSite from './components/TopoDoSite';
import Sobre from './components/Sobre';
import Especialidades from './components/Especialidades';
import Projetos from './components/Projetos';
import Contato from './components/Contato';

function App() {
  return (
    <>
      <Header />

      <main>
        <TopoDoSite />
        <Sobre />
        <Especialidades />
        <Projetos />
        <Contato />
      </main>
    </>
  );
}

export default App;
