import { hardSkills, softSkills } from '../data/especialidades';
import './Especialidades.css';

export default function Especialidades() {
  return (
    <section id="especialidades" className="secao secao-alt especialidades">
      <div className="secao-interface">
        <h2 className="secao-titulo">Especialidades</h2>
        <p className="secao-intro">
          O que uso nos meus projetos e como trabalho em equipe.
        </p>

        <h3 className="secao-subtitulo">Hard skills</h3>
        <div className="especialidades-grupos">
          {hardSkills.map((grupo) => (
            <div key={grupo.area} className="especialidades-grupo">
              <h4>{grupo.area}</h4>
              <ul className="etiquetas">
                {grupo.skills.map((skill) => (
                  <li key={skill} className="etiqueta">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="secao-subtitulo">Soft skills</h3>
        <dl className="especialidades-soft">
          {softSkills.map((skill) => (
            <div key={skill.nome}>
              <dt>{skill.nome}</dt>
              <dd>{skill.evidencia}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
