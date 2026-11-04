import { inicio } from '../data/inicio';
import './Inicio.css';

export default function Inicio() {
  return (
    <section id="inicio" className="inicio" aria-labelledby="inicio-nome">
      <div className="inicio-interface">
        <div className="inicio-texto">
          <h1 id="inicio-nome" className="inicio-nome inicio-entrada">
            {inicio.nome}
          </h1>
          <p className="inicio-cargo inicio-entrada">{inicio.cargo}</p>
          <p className="inicio-resumo inicio-entrada">{inicio.resumo}</p>

          <div className="inicio-acoes inicio-entrada">
            {inicio.acoes.map((acao) => (
              <a key={acao.href} href={acao.href} className={`botao botao-${acao.variante}`}>
                {acao.texto}
              </a>
            ))}
          </div>
        </div>

        {/* A rede 3D da Fase 6 entra atrás da foto, dentro de .inicio-visual. */}
        <div className="inicio-visual inicio-entrada">
          {inicio.foto ? (
            <img className="inicio-foto" src={inicio.foto.src} alt={inicio.foto.alt} />
          ) : (
            <div className="inicio-foto inicio-foto-reservada" role="img" aria-label="Espaço reservado para a foto de Maria Alice">
              <i className="bi bi-person" aria-hidden="true"></i>
              <span>Foto em breve</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
