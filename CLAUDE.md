# Portfólio Maria Alice

Portfólio pessoal em migração de HTML/CSS para React + TypeScript com Vite.

## Estrutura
- `legacy/`: site original em HTML/CSS, referência visual da migração. Não apagar.
- `legacy/assets/`: imagens do site original.
- `src/components/`: um componente por seção, em PascalCase.
- `src/data/`: dados repetidos, como a lista de projetos.

## Comandos
- `npm run dev`: servidor local
- `npm run build`: build de produção e checagem de tipos

## Convenções
- Commits no padrão https://github.com/iuricode/padroes-de-commits, em inglês.
- Props tipadas com `interface`, sem `any`.
- A migração segue a skill `migracao-react`, uma seção por vez.