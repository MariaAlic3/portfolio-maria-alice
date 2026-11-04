# Design system: portfólio Maria Alice

> **Este arquivo descreve a identidade visual ATUAL do portfólio.** Ela pode ser alterada quando a Maria Alice pedir. Toda mudança deve atualizar este arquivo e `src/styles/tokens.css` juntos, e ganhar uma nova entrada no "Histórico de versões", no fim do documento.

- Tokens em código: `src/styles/tokens.css` (importado em `src/main.tsx`)
- Conteúdo do site: `design-system/portfolio-maria-alice/conteudo.md`
- Regra de uso: componentes usam só as variáveis de `tokens.css`. Nada de cor, fonte, espaçamento ou duração escritos direto no CSS dos componentes. Se o Tailwind entrar no projeto, ele deve ler estas mesmas variáveis em vez de usar a paleta própria.

---

## Direção: "Noite Lilás", com elementos de "Diário de Bordo" e "Bloco Violeta"

Mistura das três direções da Fase 2:

| Vem de | O que entra | Onde |
|---|---|---|
| A, Noite Lilás | Base escura de ameixa, roxo como luz, rede 3D de pontos no hero, par de fontes | Site todo e hero |
| B, Diário de Bordo | Linha do tempo da trajetória (2024 → 2026), que se desenha ao rolar | Seção Sobre |
| C, Bloco Violeta | Roxo saturado como fundo de uma seção inteira, com a cor "varrendo" a tela ao entrar | Seção Contato, como fechamento |

**Princípios**

1. **O roxo é luz, não enfeite.** Ele aparece onde há ação ou informação importante: links, botões, a seção visível no menu, a linha da trajetória. No resto do site há tons neutros de ameixa.
2. **Gastar a ousadia em um lugar por vez.** O hero tem o 3D, o Sobre tem a linha do tempo e o Contato tem o bloco violeta. Nenhuma outra seção ganha efeito próprio.
3. **Autenticidade antes de efeito.** Fotos reais, textos do `conteudo.md` e um 3D com significado: a rede de pontos representa "conectar pessoas", tema real dos projetos (EduCultura e Rede Solidária).
4. **Legível primeiro.** Todo texto passa no WCAG AA (4,5:1). O texto principal fica acima de 15:1.

---

## Paleta

Contraste medido pela fórmula do WCAG 2.x.

### Base (escura)

| Token | Hex | Papel | Contraste | Motivo |
|---|---|---|---|---|
| `--color-bg` | `#170A1F` | Fundo da página | — | Ameixa mais escura e menos saturada que a original `#26032A`, para o roxo da marca brilhar por contraste |
| `--color-bg-alt` | `#1D0E27` | Fundo alternado de seções | — | Separa as seções com um degrau sutil de tom, como no site de referência, sem usar linhas |
| `--color-surface` | `#231230` | Cards, menu no celular | — | Separa blocos sem depender de sombra, que quase não aparece em fundo escuro |
| `--color-line` | `#3A2650` | Bordas, divisórias, trilho da linha do tempo | — | Visível, mas sem competir com o conteúdo |
| `--color-text` | `#F2ECF7` | Texto principal | 16,5:1 no fundo | Branco levemente lilás, que cansa menos que o `#FFFFFF` puro |
| `--color-text-muted` | `#B9A9C6` | Texto secundário (datas, stacks, legendas) | 8,7:1 no fundo | Hierarquia por tom, não por tamanho |

### Marca (roxo)

| Token | Hex | Papel | Contraste | Motivo |
|---|---|---|---|---|
| `--color-brand` | `#A66BFF` | Roxo para texto, links, ícones e a seção ativa no menu | 5,6:1 no fundo, 5,1:1 na superfície | Versão mais clara do `blueviolet`, legível até em texto pequeno (os roxos originais davam 3,4 a 3,5:1) |
| `--color-brand-strong` | `#7C2FE0` | Fundo de botões | 6,3:1 com texto branco | Próximo do `blueviolet` original (`#8A2BE2`), mas com texto branco. O texto preto original dava só 3,5:1 |
| `--color-brand-hover` | `#8F45F0` | Botão ao passar o mouse | 4,9:1 com texto branco | Clareia de leve: o feedback vem da cor, não do aumento de tamanho |
| `--color-on-brand` | `#FFFFFF` | Texto sobre botões e sobre o bloco violeta | — | — |
| `--color-brand-glow` | `rgba(166, 107, 255, 0.35)` | Brilho de foco e de hover | — | Herdeiro do brilho roxo original dos botões (`rgba(137, 43, 226, 0.755)`), mais suave |

### Bloco violeta (seção Contato)

| Token | Hex | Papel | Contraste | Motivo |
|---|---|---|---|---|
| `--color-block` | `#5B12C9` | Fundo da seção Contato | 8,8:1 com texto branco | Roxo saturado e escuro o bastante para sustentar uma seção inteira |
| `--color-block-accent` | `#D9C6FF` | Detalhes e links dentro do bloco | 5,7:1 no bloco | Lilás que vem do tom claro do logo (`#C6ADC9`) |

### Paleta original (v0)

Registro do visual antes do redesign (levantamento da Fase 2, sobre o site migrado na fase 1).

| Cor original | Hex | Onde aparecia | Problema encontrado |
|---|---|---|---|
| `rgb(38, 3, 42)` | `#26032A` | Fundo da página | — |
| `blueviolet` | `#8A2BE2` | Fundo dos botões "Contato" e "Entre em Contato" | Texto preto padrão do navegador por cima: 3,5:1 |
| `rgba(137, 43, 226, 0.755)` | `#892BE2` a 75% | Brilho dos botões no hover | — |
| `rgb(145, 60, 224)` | `#913CE0` | O "!" do título do topo | 3,5:1 no fundo (só passava por ser texto grande) |
| `rgb(141, 65, 212)` | `#8D41D4` | Nome no título do Sobre | 3,4:1 no fundo |
| `rgb(134, 59, 204)` | `#863BCC` | Botões redondos das redes sociais | Ícone preto por cima: 3,5:1 |
| `#e6e6e6` | `#E6E6E6` | Links do menu | — |
| `#fff` | `#FFFFFF` | Títulos e textos | — |
| (sem cor definida) | `#000000` | Texto dos botões e ícones das redes (padrão do navegador) | Ver contrastes acima |

Observações da v0:
- Havia 5 roxos diferentes fazendo o mesmo papel. Na v1 eles viram 1 token de texto (`--color-brand`) e 1 de botão (`--color-brand-strong`).
- O `favicon.svg` ainda era o ícone padrão do Vite (`#7E14FF`, `#863BFF`, `#47BFFF`, `#EDE6FF`).
- A fonte Poppins era carregada, mas nunca aplicada: o site aparecia na fonte padrão do navegador.

---

## Tipografia

| Token | Fonte | Uso | Motivo |
|---|---|---|---|
| `--font-display` | **Bricolage Grotesque** (400 a 800, eixo óptico 12 a 96) | Títulos, nome no hero, números da linha do tempo | Grotesca com traço humano e levemente irregular: transmite autenticidade e tem presença em tamanho grande. O eixo óptico ajusta o desenho ao tamanho |
| `--font-body` | **Instrument Sans** (400 a 700) | Textos, menu, botões, etiquetas | Neutra e muito legível em parágrafos. Contrasta com a Bricolage sem competir |

Por que trocar a Poppins: ela nunca chegou a ser aplicada, é uma das fontes mais usadas em portfólios iniciantes e, por ser geométrica e redonda, não traz personalidade ao nome.

Carregamento: Google Fonts, no `index.html`, com `display=swap` (o texto aparece na fonte do sistema até a fonte carregar).

### Escala

Escala clássica de *The Elements of Typographic Style* (12, 14, 16, 18, 21, 24, 36, 48, 60, 72), com os tamanhos maiores fluidos via `clamp()` para funcionar de 375px a 1440px.

| Token | Tamanho | Uso |
|---|---|---|
| `--text-xs` | 0.75rem (12px) | Legendas pequenas |
| `--text-sm` | 0.875rem (14px) | Etiquetas de stack, datas |
| `--text-base` | 1rem (16px) | Menu, botões |
| `--text-md` | 1.125rem (18px) | Parágrafos |
| `--text-lg` | 1.3125rem (21px) | Texto de destaque, subtítulo do hero |
| `--text-xl` | 1.5rem (24px) | Títulos de cards (nome do projeto) |
| `--text-2xl` | clamp(1.75rem, 1.2rem + 2.2vw, 2.25rem) → 28 a 36px | Títulos de seção (h2) |
| `--text-3xl` | clamp(2.25rem, 1.4rem + 3.4vw, 3.75rem) → 36 a 60px | Títulos grandes |
| `--text-display` | clamp(2.75rem, 1.5rem + 5vw, 4.5rem) → 44 a 72px | Nome no hero |

| Token | Valor | Motivo |
|---|---|---|
| `--leading-tight` | 1.05 | Títulos grandes, linhas próximas para formar um bloco |
| `--leading-snug` | 1.25 | Subtítulos e títulos de cards |
| `--leading-normal` | 1.6 | Parágrafos em fundo escuro precisam de mais ar |
| `--tracking-tight` | -0.02em | Títulos display; fontes grandes ficam mais firmes um pouco mais juntas |
| `--tracking-normal` | 0 | Texto corrido |
| `--measure` | 68ch | Linhas de texto com menos de 80 caracteres |

Pesos: `--weight-regular` 400, `--weight-medium` 500, `--weight-semibold` 600, `--weight-bold` 700, `--weight-heavy` 800 (só no nome do hero).

Regras:
- Sem textos todos em maiúsculas em rótulos.
- Sem destacar uma única palavra do título com outra cor ou estilo.
- Parágrafos alinhados à esquerda, sem `text-align: justify` (que abria buracos no texto da v0).

---

## Espaçamento

Base de 4px. A escala dobra a partir de 16px para que o espaço entre seções seja claramente maior que o espaço dentro delas.

| Token | Valor |
|---|---|
| `--space-1` | 0.25rem (4px) |
| `--space-2` | 0.5rem (8px) |
| `--space-3` | 0.75rem (12px) |
| `--space-4` | 1rem (16px) |
| `--space-5` | 1.5rem (24px) |
| `--space-6` | 2rem (32px) |
| `--space-7` | 3rem (48px) |
| `--space-8` | 4rem (64px) |
| `--space-9` | 6rem (96px) |
| `--space-10` | 8rem (128px) |

| Token de layout | Valor | Motivo |
|---|---|---|
| `--container-max` | 1200px | Um pouco mais estreito que os 1280px da v0: em 1440px sobra margem e as linhas não ficam longas |
| `--gutter` | clamp(1rem, 4vw, 3rem) → 16 a 48px | Margem lateral: 16px em 375px, cresce em telas maiores |
| `--section-space` | clamp(4rem, 8vw, 8rem) → 64 a 128px | Espaço vertical entre seções |
| `--header-height` | 4.5rem (72px) | Altura do menu fixo; usada também no `scroll-padding-top`, para o título da seção não ficar escondido atrás do menu |

Larguras de teste (CLAUDE.md): 375px, 768px, 1024px e 1440px. Media queries não aceitam variáveis CSS, então os pontos de quebra ficam escritos direto nos componentes: `48rem` (768px) e `64rem` (1024px).

---

## Raios

Cada raio indica um tipo de elemento, em vez de um raio único para tudo.

| Token | Valor | Uso | Motivo |
|---|---|---|---|
| `--radius-sm` | 6px | Etiquetas de stack, foco | Pequeno, para não parecer botão |
| `--radius-md` | 12px | Cards de projeto | Suaviza sem virar "bolha" |
| `--radius-lg` | 24px | Fotos | Moldura mais orgânica para as fotos reais |
| `--radius-pill` | 999px | Botões, indicador do menu | Mantém os botões arredondados da v0 (`border-radius: 30px`) |

## Bordas

| Token | Valor | Uso |
|---|---|---|
| `--border-thin` | 1px | Contorno de cards, etiquetas, divisória do menu |
| `--border-thick` | 2px | Sublinhado do menu, marcador das soft skills, trilho da linha do tempo |

---

## Sombras e brilho

Em fundo escuro, sombra preta quase não aparece. A profundidade vem do tom da superfície (`--color-surface`) e do brilho roxo.

| Token | Valor | Uso |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(0, 0, 0, 0.4)` | Separação mínima do menu fixo ao rolar |
| `--shadow-md` | `0 12px 32px -12px rgba(0, 0, 0, 0.6)` | Menu aberto no celular |
| `--shadow-glow` | `0 0 0 4px var(--color-brand-glow)` | Hover de botões. Herdeiro do brilho roxo da v0 |
| `--focus-ring` | `0 0 0 3px var(--color-bg), 0 0 0 5px var(--color-brand)` | Foco do teclado: anel roxo com um vão escuro, visível em qualquer fundo |
| `--focus-ring-on-block` | `0 0 0 3px var(--color-block), 0 0 0 5px var(--color-on-brand)` | Foco do teclado dentro do bloco violeta, onde o anel roxo não apareceria |

---

## Animações

Referência: lucasriza.com.br (`whileInView` da framer-motion: o elemento aparece uma vez ao entrar na tela, com opacidade de 0 a 1 e deslocamento de 20 a 50px, e itens de uma lista aparecem em sequência). Aqui o mesmo efeito é feito com `IntersectionObserver` e CSS, sem biblioteca, e usado com moderação.

| Token | Valor | Uso |
|---|---|---|
| `--duration-fast` | 150ms | Cor de links e botões |
| `--duration-base` | 250ms | Indicador do menu, abrir e fechar o menu no celular |
| `--duration-slow` | 600ms | Revelar o título de uma seção |
| `--duration-draw` | 1200ms | Linha do tempo se desenhando |
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | Entradas: começam rápido e assentam devagar |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Varredura de cor do bloco violeta |
| `--reveal-distance` | 24px | Deslocamento das entradas, no meio da faixa da referência (20 a 50px) |
| `--stagger` | 80ms | Intervalo entre itens em sequência |

Momentos de animação (somente estes):

1. **Abertura do hero:** sequência única com nome, descrição e botões; por último, a rede 3D se forma.
2. **Entrada de seção:** só o título e o primeiro bloco de cada seção aparecem ao rolar, uma vez. Cards não animam um por um.
3. **Menu:** o indicador roxo desliza até o link da seção visível. Ao clicar, a rolagem é suave.
4. **Linha do tempo (Sobre):** o trilho se desenha de cima para baixo e os marcos aparecem em sequência.
5. **Bloco violeta (Contato):** a cor de fundo varre a tela ao entrar na seção.
6. **Rede 3D (hero):** gira devagar e reage de leve ao mouse. Three.js em TypeScript, carregado com `React.lazy`.

**`prefers-reduced-motion: reduce`:** todas as durações viram 0 e `--reveal-distance` vira 0 em `tokens.css`. A rolagem deixa de ser suave, a rede 3D fica parada (um único quadro renderizado) e tudo aparece no lugar final.

---

## Camadas (z-index)

| Token | Valor | Uso |
|---|---|---|
| `--z-base` | 0 | Conteúdo |
| `--z-canvas` | 0 | Canvas 3D do hero, atrás do texto |
| `--z-header` | 100 | Menu fixo |
| `--z-menu` | 200 | Menu aberto no celular |

---

## Histórico de versões

| Versão | Data | Resumo |
|---|---|---|
| 1 | 2026-11-04 | Primeira identidade do redesign. Direção "Noite Lilás", com a linha do tempo do "Diário de Bordo" no Sobre e o "Bloco Violeta" no Contato. Unifica os 5 roxos da v0 em tokens de marca, corrige o contraste dos botões (3,5:1 → 6,3:1) e troca a Poppins (nunca aplicada) por Bricolage Grotesque e Instrument Sans. Registra a paleta original como v0. |
