import { useEffect, useState } from 'react';

// Devolve o id da seção que está cruzando o meio da tela.
export function useSecaoAtiva(ids: string[]): string {
  const [ativa, setAtiva] = useState(ids[0] ?? '');
  const chave = ids.join(',');

  useEffect(() => {
    const secoes = chave
      .split(',')
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    // A faixa de observação é uma linha no meio da tela: só uma seção a cruza por vez.
    const observer = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) setAtiva(entrada.target.id);
        }
      },
      { rootMargin: '-50% 0px -50% 0px' },
    );

    secoes.forEach((secao) => observer.observe(secao));
    return () => observer.disconnect();
  }, [chave]);

  return ativa;
}
