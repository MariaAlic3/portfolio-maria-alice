// Fonte: design-system/portfolio-maria-alice/conteudo.md (seção 3. Projetos)

export interface Projeto {
  titulo: string;
  problema: string;
  stack: string[];
  contribuicao: string;
  emEquipe: boolean;
  repositorio: string;
  deploy?: string;
}

export const projetos: Projeto[] = [
  {
    titulo: 'EduCultura: front-end',
    problema:
      'Conectar estudantes a instituições culturais e educacionais, promovendo o acesso à cultura e ao conhecimento.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    contribuicao:
      'Desenvolvi o front-end: página inicial, cards de categorias, páginas por categoria com rotas dinâmicas, layout responsivo e integração com a API EduCultura.',
    emEquipe: false,
    repositorio: 'https://github.com/MariaAlic3/educultura_frontend',
    deploy: 'https://educultura-frontend-rj9h.vercel.app/',
  },
  {
    titulo: 'EduCultura: API',
    problema:
      'Oferecer dados sobre universidades com políticas afirmativas, personalidades negras e indígenas, museus e eventos culturais gratuitos para aplicações de inclusão social e cultural.',
    stack: ['JavaScript', 'Node.js', 'Express', 'Nodemon', 'uuid'],
    contribuicao:
      'Análise de requisitos, desenvolvimento dos endpoints REST e organização da estrutura da aplicação, priorizando a qualidade e a facilidade de uso da API.',
    emEquipe: false,
    repositorio: 'https://github.com/MariaAlic3/EduCultura',
  },
  {
    titulo: 'Rede Solidária',
    problema: 'Conectar pessoas que desejam ajudar com aquelas que precisam de apoio.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'ESLint', 'Prettier', 'Husky'],
    contribuicao: 'Liderei a equipe e desenvolvi a página inicial.',
    emEquipe: true,
    repositorio: 'https://github.com/MariaAlic3/Rede-Solidaria-FrontEnd',
    deploy: 'https://rede-solidaria-front-end-a4w4.vercel.app/',
  },
  {
    titulo: 'Plataforma de Doações para ONGs',
    problema:
      'ONGs têm dificuldade de arrecadar recursos de forma transparente e organizada. O sistema permite criar campanhas, receber doações e publicar relatórios de transparência.',
    stack: ['SQL', 'MySQL'],
    contribuicao:
      'Criei e adicionei o diagrama do projeto e o diagrama entidade-relacionamento (ER), além de tabelas e consultas SQL.',
    emEquipe: true,
    repositorio: 'https://github.com/MariaAlic3/plataforma-doacoes-ongs',
  },
  {
    titulo: 'Agenda do Salão',
    problema:
      'Salões de bairro anotam horários em caderno, o que gera clientes marcadas no mesmo horário, esquecimentos e dinheiro perdido. O sistema organiza a agenda do dia numa tela simples, que funciona no celular.',
    stack: ['React', 'Vite', 'TypeScript'],
    contribuicao: 'Desenvolvi o sistema.',
    emEquipe: false,
    repositorio: 'https://github.com/MariaAlic3/meu-projeto-agendamento',
  },
  {
    titulo: 'Alere API',
    problema:
      'Fornecer dados para uma aplicação front-end voltada à redução do desperdício de alimentos.',
    stack: ['JavaScript', 'Node.js', 'Express', 'Prisma', 'Docusaurus', 'Swagger'],
    contribuicao: 'Documentação da API com Docusaurus e o arquivo "doacoes" da API.',
    emEquipe: true,
    repositorio: 'https://github.com/MariaAlic3/squad8_alere',
  },
  {
    titulo: 'Hackathon: A Importância da História Afro-Brasileira',
    problema:
      'Refletir sobre a relevância da história afro-brasileira na sociedade e como ela impacta a cultura, a identidade e as relações sociais.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    contribuicao: 'O CSS da página de reports.',
    emEquipe: true,
    repositorio: 'https://github.com/MariaAlic3/Hackathon',
  },
  {
    titulo: 'FinAI: mentor financeiro com IA',
    problema:
      'Muitas pessoas abandonam o planejamento financeiro por causa de interfaces complexas. O FinAI atua como um mentor financeiro empático, com um modelo de linguagem 100% local para preservar a privacidade dos dados.',
    stack: ['Python', 'Streamlit', 'Pandas', 'Ollama'],
    contribuicao:
      'Construí o agente no desafio de Automação de Dados com IA (DIO + Afya + Programadores do Amanhã).',
    emEquipe: false,
    repositorio: 'https://github.com/MariaAlic3/Agente-FinAI--Dio',
  },
];
