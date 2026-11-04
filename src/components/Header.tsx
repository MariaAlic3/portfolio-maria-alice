import { useEffect, useState } from 'react';
import logo from '../assets/logo-portfolio.png';
import { itensMenu } from '../data/menu';
import { useSecaoAtiva } from '../hooks/useSecaoAtiva';
import './Header.css';

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const secaoAtiva = useSecaoAtiva(itensMenu.map((item) => item.id));

  // Esc fecha o menu do celular.
  useEffect(() => {
    if (!menuAberto) return;
    function aoTeclar(evento: KeyboardEvent) {
      if (evento.key === 'Escape') setMenuAberto(false);
    }
    document.addEventListener('keydown', aoTeclar);
    return () => document.removeEventListener('keydown', aoTeclar);
  }, [menuAberto]);

  return (
    <header className="cabecalho">
      <div className="cabecalho-interface">
        <a href="#inicio" className="cabecalho-logo">
          <img src={logo} alt="logo do portífolio" />
        </a>

        <button
          type="button"
          className="menu-botao"
          aria-expanded={menuAberto}
          aria-controls="menu-principal"
          onClick={() => setMenuAberto((aberto) => !aberto)}
        >
          <i className={menuAberto ? 'bi bi-x-lg' : 'bi bi-list'} aria-hidden="true"></i>
          <span>{menuAberto ? 'Fechar' : 'Menu'}</span>
        </button>

        <nav aria-label="Seções do portfólio">
          <ul id="menu-principal" className={menuAberto ? 'menu menu-aberto' : 'menu'}>
            {itensMenu.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={item.id === 'contato' ? 'menu-link menu-link-contato' : 'menu-link'}
                  aria-current={secaoAtiva === item.id ? 'true' : undefined}
                  onClick={() => setMenuAberto(false)}
                >
                  {item.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
