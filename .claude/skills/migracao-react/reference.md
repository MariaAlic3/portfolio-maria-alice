# Referência: migracao-react

Material de apoio lido sob demanda, quando for criar componentes.

## Sumário
1. Estrutura de pastas
2. Conversão de HTML para JSX
3. CSS e imagens
4. Exemplos de entrada e saída
5. Checklist de qualidade
6. Padrão de commits

## 1. Estrutura de pastas

```
src/
├── components/     um componente por seção, em PascalCase (Header.tsx, Sobre.tsx...)
├── data/           dados repetidos (projetos.ts, redes.ts)
├── assets/         imagens importadas pelos componentes
├── styles/
│   └── global.css  CSS original, trazido sem alterações
├── App.tsx         só monta as seções na ordem da página
└── main.tsx
public/             arquivos com URL fixa (favicon, currículo em PDF)
```

## 2. Conversão de HTML para JSX

| HTML | JSX |
|---|---|
| `class="..."` | `className="..."` |
| `for="..."` | `htmlFor="..."` |
| `<img src="x.png">` | `<img src={x} alt="..." />` |
| `<br>`, `<input>` | `<br />`, `<input />` |
| `style="color: red"` | `style={{ color: 'red' }}` |
| `onclick="f()"` | `onClick={f}` |
| `<!-- comentário -->` | `{/* comentário */}` |

## 3. CSS e imagens

- Copie o CSS original inteiro para `src/styles/global.css` e importe em `main.tsx`. Separar por componente só depois, se eu pedir.
- Revise caminhos em `url(...)`, porque a pasta mudou.
- Imagens de componentes vão em `src/assets/` e são importadas; arquivos com URL fixa vão em `public/`.

## 4. Exemplos de entrada e saída

### Exemplo 1: seção simples

Entrada (HTML original):

```html
<section class="sobre">
  <h2>Sobre mim</h2>
  <img src="img/foto.jpg" alt="Foto da Maria Alice">
  <p>Desenvolvedora em formação...</p>
</section>
```

Saída esperada (`src/components/Sobre.tsx`):

```tsx
import foto from '../assets/foto.jpg';

export default function Sobre() {
  return (
    <section className="sobre">
      <h2>Sobre mim</h2>
      <img src={foto} alt="Foto da Maria Alice" />
      <p>Desenvolvedora em formação...</p>
    </section>
  );
}
```

Mesmo texto, mesma classe, mesmo `alt`. Nada foi "melhorado".

### Exemplo 2: dados repetidos

Entrada: três `<div class="card">` com título, descrição e link.

Saída esperada, `src/data/projetos.ts`:

```ts
export interface Projeto {
  titulo: string;
  descricao: string;
  link: string;
}

export const projetos: Projeto[] = [
  { titulo: '...', descricao: '...', link: '...' },
];
```

E `src/components/Projetos.tsx`:

```tsx
import { projetos } from '../data/projetos';
import CardProjeto from './CardProjeto';

export default function Projetos() {
  return (
    <section className="projetos">
      {projetos.map((p) => (
        <CardProjeto key={p.titulo} projeto={p} />
      ))}
    </section>
  );
}
```

Com `CardProjeto` recebendo props tipadas por `interface`:

```tsx
import type { Projeto } from '../data/projetos';

interface CardProjetoProps {
  projeto: Projeto;
}

export default function CardProjeto({ projeto }: CardProjetoProps) {
  return (
    <div className="card">
      <h3>{projeto.titulo}</h3>
      <p>{projeto.descricao}</p>
      <a href={projeto.link}>Ver projeto</a>
    </div>
  );
}
```

### Exemplo 3: pedido fora do escopo

Entrada: "aproveita e coloca um modo escuro".

Saída esperada: explicar que fica fora da migração, anotar em Pendências e seguir só com a seção atual.

## 5. Checklist de qualidade

Antes de responder, confira. O que não passar vai para Pendências.

- [ ] Só uma seção foi migrada nesta etapa
- [ ] Textos, classes e atributos `alt` iguais aos originais
- [ ] Dados repetidos estão em `src/data/`, não no JSX
- [ ] Props tipadas com `interface`, nenhum `any`
- [ ] Imagens e links funcionando
- [ ] `npm run build` sem erros
- [ ] Arquivos HTML/CSS originais continuam no repositório

## 6. Padrão de commits

Seguir https://github.com/iuricode/padroes-de-commits, com mensagens em inglês. Exemplos:

- `:tada: init: create vite react-ts project`
- `:sparkles: feat: migrate header section to component`
- `:lipstick: style: import original css as global stylesheet`
- `:recycle: refactor: move projects list to data file`
- `:bug: fix: correct image paths after migration`
