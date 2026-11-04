import personagem from '../assets/personagem-sobre.png';
import { redesSociais } from '../data/redes';

export default function Sobre() {
  return (
    <section id="sobre" className="sobre">
      <div className="interface">
        <div className="flex">
          <div className="img-sobre">
            <img src={personagem} alt="personagem de outro angulo" />
          </div>
          {/* img-sobre */}

          <div className="txt-sobre">
            <h2>
              MUITO PRAZER, <span>SOU MARIA ALICE BARBOSA MIRANDA!</span>
            </h2>
            <p>Sempre tive duvidas sobre como funcionavam os sites, hoje em dia eu mesma estou aprendendo passo a passo como criar e modificar um, através do Programadores do Amanhã.</p>
            <p>Atualmente além de estar participando da PDA também estou concluindo o terceiro ano do ensino médio integrado ao curso de Administração no Instituto Federal da Bahia.</p>
            <p>Futuramente pretendo me especializar em HTML,CSS e JavaScrip.</p>
            <div className="btn-social">
              {redesSociais.map((rede) => (
                <a key={rede.link} href={rede.link}>
                  <button>
                    <i className={rede.icone}></i>
                  </button>
                </a>
              ))}
            </div>
          </div>
          {/* txt-sobre */}
        </div>
      </div>
    </section>
  );
}
