// Fonte: design-system/portfolio-maria-alice/conteudo.md (seção 2. Especialidades)

export interface GrupoHardSkills {
  area: string;
  skills: string[];
}

export interface SoftSkill {
  nome: string;
  evidencia: string;
}

export const hardSkills: GrupoHardSkills[] = [
  {
    area: 'Front-end',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript (básico)', 'React', 'Next.js', 'Tailwind CSS', 'Vite'],
  },
  {
    area: 'Back-end e APIs',
    skills: ['Node.js', 'Express', 'APIs REST', 'Consumo de APIs', 'Sequelize', 'Prisma', 'Swagger'],
  },
  { area: 'Banco de dados', skills: ['SQL', 'MySQL'] },
  {
    area: 'Documentação e ferramentas',
    skills: ['Git', 'GitHub', 'Docusaurus', 'Postman', 'Insomnia', 'Nodemon', 'ESLint', 'Prettier', 'Husky'],
  },
  { area: 'Plataformas e cloud', skills: ['ServiceNow (certificação CSA)', 'Fundamentos de cloud computing'] },
  {
    area: 'IA e automação',
    skills: ['IA generativa', 'Automação com IA', 'Python', 'Pandas', 'Streamlit', 'Ollama (LLM local)'],
  },
  { area: 'Idiomas', skills: ['Inglês básico/intermediário'] },
];

export const softSkills: SoftSkill[] = [
  {
    nome: 'Liderança',
    evidencia: 'Liderei a equipe do projeto Rede Solidária, projeto final do Módulo 5 do Programadores do Amanhã.',
  },
  {
    nome: 'Trabalho em equipe',
    evidencia:
      'Projetos em squads no Programadores do Amanhã: Rede Solidária, Alere API, plataforma de doações para ONGs (equipe de 7 pessoas) e Hackathon.',
  },
  {
    nome: 'Comunicação',
    evidencia:
      'Comunicação com a equipe na Aoop Cloud Solutions e com diferentes públicos na Universidade Patativa do Assaré.',
  },
  {
    nome: 'Resolução de problemas',
    evidencia: 'Análise de requisitos e resolução de problemas técnicos em ServiceNow na Aoop Cloud Solutions.',
  },
  {
    nome: 'Organização',
    evidencia:
      'Organização de processos e múltiplas demandas simultâneas no estágio da Universidade Patativa do Assaré.',
  },
  {
    nome: 'Aprendizado contínuo',
    evidencia:
      'Certificação ServiceNow CSA (2025), curso de Automação de Dados com IA (2026) e graduação em andamento.',
  },
];
