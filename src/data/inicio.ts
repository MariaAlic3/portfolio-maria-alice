// Fonte: design-system/portfolio-maria-alice/conteudo.md (1. Sobre > Apresentação)

export interface Foto {
  src: string;
  alt: string;
}

export interface AcaoInicio {
  texto: string;
  href: string;
  variante: 'primaria' | 'secundaria';
}

export interface ConteudoInicio {
  nome: string;
  cargo: string;
  resumo: string;
  // Sem foto, o componente mostra um espaço reservado.
  // Para usar a foto: coloque o arquivo em src/assets/fotos/, importe aqui e preencha { src, alt }.
  foto?: Foto;
  acoes: AcaoInicio[];
}

export const inicio: ConteudoInicio = {
  nome: 'Maria Alice Barbosa',
  cargo: 'Desenvolvedora front-end rumo ao full stack',
  resumo:
    'Formada em Desenvolvimento Web Full Stack pelo Programadores do Amanhã e estudante de Análise e Desenvolvimento de Sistemas. Experiência em aplicações web, APIs REST e ServiceNow.',
  acoes: [
    { texto: 'Ver projetos', href: '#projetos', variante: 'primaria' },
    { texto: 'Fale comigo', href: '#contato', variante: 'secundaria' },
  ],
};
