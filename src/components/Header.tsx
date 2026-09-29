import logo from '../assets/logo-portfolio.png';
import { itensMenu } from '../data/menu';

export default function Header() {
  return (
    <header>
      <div className="interface">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="logo do portífolio" />
          </a>
        </div>
        <nav className="menu desktop">
          <ul>
            {itensMenu.map((item) => (
              <li key={item.texto}>
                <a href={item.link}>{item.texto}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="btn-contato">
          <a href="#">
            <button>Contato</button>
          </a>
        </div>
        {/* btn-contato */}
      </div>
      {/* interface */}
    </header>
  );
}
