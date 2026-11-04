// Fonte: design-system/portfolio-maria-alice/conteudo.md (Contato)

export interface CanalContato {
  nome: string;
  texto: string;
  link: string;
  icone: string;
}

export const canaisContato: CanalContato[] = [
  {
    nome: 'E-mail',
    texto: 'mariaaliceifba@gmail.com',
    link: 'mailto:mariaaliceifba@gmail.com',
    icone: 'bi bi-envelope',
  },
  {
    nome: 'LinkedIn',
    texto: 'linkedin.com/in/mariaalice-dev',
    link: 'https://www.linkedin.com/in/mariaalice-dev',
    icone: 'bi bi-linkedin',
  },
  {
    nome: 'GitHub',
    texto: 'github.com/MariaAlic3',
    link: 'https://github.com/MariaAlic3',
    icone: 'bi bi-github',
  },
];
