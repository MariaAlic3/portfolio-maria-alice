import { projetos } from '../data/projetos';
import CardProjeto from './CardProjeto';
import './Projetos.css';

export default function Projetos() {
  return (
    <section id="projetos" className="secao projetos">
      <div className="secao-interface">
        <h2 className="secao-titulo">Projetos</h2>
        <p className="secao-intro">
          Projetos que desenvolvi sozinha ou em equipe, com o problema que cada um resolve e a minha parte.
        </p>

        <div className="projetos-lista">
          {projetos.map((projeto) => (
            <CardProjeto key={projeto.repositorio} projeto={projeto} />
          ))}
        </div>
      </div>
    </section>
  );
}
