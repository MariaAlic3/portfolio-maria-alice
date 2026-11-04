import { canaisContato } from '../data/contato';
import './Contato.css';

export default function Contato() {
  return (
    <section id="contato" className="secao contato">
      <div className="secao-interface">
        <h2 className="secao-titulo">Contato</h2>
        <p className="contato-intro">
          Busco estágio em desenvolvimento de software. Fale comigo por e-mail ou pelo LinkedIn.
        </p>

        <ul className="contato-canais">
          {canaisContato.map((canal) => (
            <li key={canal.nome}>
              <a href={canal.link} target={canal.link.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <i className={canal.icone} aria-hidden="true"></i>
                <span className="contato-nome">{canal.nome}</span>
                <span className="contato-texto">{canal.texto}</span>
              </a>
            </li>
          ))}
        </ul>

        <p className="contato-local">Bahia, Brasil</p>
      </div>
    </section>
  );
}
