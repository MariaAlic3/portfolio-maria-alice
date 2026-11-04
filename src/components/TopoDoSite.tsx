import personagem from '../assets/personagem-topo.jpg';

export default function TopoDoSite() {
  return (
    <section id="inicio" className="topo-do-site">
      {/* PRIMEIRA SECTION */}
      <div className="interface">
        <div className="flex">
          <div className="txt-topo-site">
            <h1>
              Olá pessoal, me chamo Maria Alice<span>!</span>
            </h1>
            <p>
              Sou uma desenvolvedora Front-End iníciante, tenho 17 anos e
              sou uma estudante do Programadores do Amanhã
            </p>

            <div className="btn-contato-2">
              <a href="#contato">
                <button>Entre em Contato</button>
              </a>
            </div>
          </div>
          {/* txt-topo_site */}

          <div className="img-topo-site">
            <img src={personagem} alt="personagem" />
          </div>
          {/* FIM-img-topo-do-dite */}
        </div>
        {/* flex */}
      </div>
      {/* interface */}
    </section>
  );
}
