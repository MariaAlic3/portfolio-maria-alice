# Portfólio Maria Alice

Portfólio pessoal em React + TypeScript com Vite, agora em fase de redesign.

<!--
=====================================================================
FASE 1 (CONCLUÍDA): MIGRAÇÃO DE HTML/CSS PARA REACT
Registro histórico de como o projeto começou. NÃO seguir estas regras na fase atual.
=====================================================================

Portfólio pessoal em migração de HTML/CSS para React + TypeScript com Vite.

## Estrutura
- `legacy/`: site original em HTML/CSS, referência visual da migração. Não apagar durante o processo de migração.
- `legacy/assets/`: imagens do site original.
- `src/components/`: um componente por seção, em PascalCase.
- `src/data/`: dados repetidos, como a lista de projetos.

## Convenções
- A migração segue a skill `migracao-react`, uma seção por vez.

A pasta legacy/ foi removida ao fim da migração e continua disponível no histórico do Git.
-->

## Fase atual: redesign

Objetivo: transformar o portfólio migrado em um site profissional, com projetos, hard skills, soft skills e experiência, e com animações de transição entre as seções ao rolar a página ou clicar no menu.

Público: recrutadores e tech leads avaliando candidatas a estágio em front-end.

## Estrutura
- `src/components/`: um componente por seção, em PascalCase.
- `src/data/`: conteúdo do site (projetos, hard skills, soft skills, experiência), separado do JSX.
- `src/styles/`: estilos globais e tokens de design (cores, fontes, espaçamentos).

## Comandos
- `npm run dev`: servidor local
- `npm run build`: build de produção e checagem de tipos
- `npm run lint`: verificação com ESLint

## Skills
- `frontend-design`: define a identidade visual (hero, tipografia, paleta).
- `ui-ux-pro-max`: revisa cada seção pronta com as diretrizes de UX e o checklist de acessibilidade e responsividade. Não deve trocar a paleta nem as fontes definidas pela `frontend-design`.
- `migracao-react`: usada na fase 1, com disparo automático desativado. Só roda se chamada pelo nome.

## Diretrizes do redesign
- Stack atual: React + TypeScript com CSS puro, sem Tailwind.
- Animações de rolagem e de navegação devem respeitar `prefers-reduced-motion`.
- Three.js em TypeScript, restrito a um elemento do hero e carregado com `React.lazy`.
- Projetos apresentam problema, stack, o que eu fiz e links (repositório e deploy).
- Hard skills agrupadas por área, sem barras de porcentagem; soft skills com evidência concreta.
- Testar nas larguras 375px, 768px, 1024px e 1440px.

## Convenções
- Commits no padrão https://github.com/iuricode/padroes-de-commits, em inglês.
- Props tipadas com `interface`, sem `any`.
- Uma seção por vez, com um commit por seção.