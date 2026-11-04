import type { Projeto } from '../data/projetos';

interface CardProjetoProps {
  projeto: Projeto;
}

export default function CardProjeto({ projeto }: CardProjetoProps) {
  return (
    <article className="card-projeto">
      <h3>{projeto.titulo}</h3>
      {projeto.emEquipe && <p className="card-projeto-equipe">Projeto em equipe</p>}

      <p className="card-projeto-problema">{projeto.problema}</p>

      <h4>O que eu fiz</h4>
      <p>{projeto.contribuicao}</p>

      <ul className="etiquetas" aria-label="Tecnologias">
        {projeto.stack.map((tecnologia) => (
          <li key={tecnologia} className="etiqueta">
            {tecnologia}
          </li>
        ))}
      </ul>

      <div className="card-projeto-links">
        <a href={projeto.repositorio} target="_blank" rel="noreferrer">
          <i className="bi bi-github" aria-hidden="true"></i> Repositório
        </a>
        {projeto.deploy && (
          <a href={projeto.deploy} target="_blank" rel="noreferrer">
            <i className="bi bi-box-arrow-up-right" aria-hidden="true"></i> Ver online
          </a>
        )}
      </div>
    </article>
  );
}
