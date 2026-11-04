---
name: migracao-react
description: Convenções para migrar este portfólio de HTML/CSS puro para React com TypeScript usando Vite. Use ao criar componentes, converter uma seção ou página do HTML antigo, configurar o projeto Vite ou quando eu pedir para "passar o portfólio pro React", mesmo sem citar a skill. Não use para criar funcionalidades novas nem para outros projetos.
allowed-tools: Read, Glob, Grep, Edit, Write, Bash(npm create vite@latest *), Bash(npm install), Bash(npm run dev), Bash(npm run build), Bash(git status), Bash(git diff *)
disable-model-invocation: true
---

## Contexto
Este portfólio foi feito em HTML e CSS puros e está sendo migrado para React com TypeScript usando Vite (template `react-ts`). O site original está na pasta `legacy/`, com as imagens em `legacy/assets/`.

## Regras da migração
- Preserve o visual atual: o site deve ficar igual ao original depois de cada etapa.
- Reaproveite o CSS existente; não troque por outra biblioteca de estilo sem eu pedir.
- Migre uma seção por vez (ex.: header, sobre, projetos, contato), nunca tudo de uma vez.
- Cada seção vira um componente em `src/components/`, com nome em PascalCase.
- Dados repetidos (como a lista de projetos) ficam em um arquivo separado em `src/data/`, e não fixos no JSX.
- Tipar props com `interface`; evitar `any`.
- Não instale dependências além das do template sem eu pedir.
- Não faça commit nem push; só sugira as mensagens.

## Etapas de cada seção
1. Leia o trecho da seção no HTML original e o CSS que ela usa.
2. Crie o componente (e o arquivo em `src/data/`, se houver dados repetidos).
3. Encaixe o componente no `App.tsx`, na mesma ordem da página original.
4. Rode `npm run build` para garantir que não há erro de tipo.
5. Passe pelo checklist de qualidade do [reference.md](reference.md) antes de responder.

## Ao terminar cada etapa
Responda sempre neste formato:
- **Seção migrada**: componente criado e trecho do HTML de origem.
- **Como testar**: o comando (ex.: `npm run dev`) e o que devo conferir no navegador.
- **Pendências**: itens do checklist que não passaram, com o motivo.
- **Commit sugerido**: mensagem no padrão do projeto, em inglês.

Não apague os arquivos HTML/CSS originais até eu confirmar que a migração ficou certa.

## Fora do escopo
Se eu pedir algo que não é migração (modo escuro, animação nova, mudar o design), diga que fica para depois, anote em Pendências e siga só com a conversão.

## Arquivos de apoio
[reference.md](reference.md) traz a estrutura de pastas, a conversão HTML→JSX, exemplos de entrada e saída, o checklist de qualidade e o padrão de commits. Leia quando for criar o primeiro componente.