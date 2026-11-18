# Portfólio — Gabriel Fernandes da Silva

Site pessoal em Next.js (App Router) com exportação estática, hospedado na Vercel.

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:3000
```

## Publicar na Vercel

1. Suba o código para o repositório no GitHub.
2. Em vercel.com › Add New › Project, importe o repositório. A Vercel detecta o Next.js sozinha; não precisa mudar nenhuma configuração.
3. A partir daí, cada push na `main` publica o site, e cada branch ou pull request ganha um link de preview.
4. Domínio: Project › Settings › Domains › adicione o seu domínio e siga as instruções de DNS. Depois atualize `site.url` em `content/site.ts` (é usado no canonical, no sitemap e no Open Graph) e refaça as imagens de Open Graph.
5. Web Vitals de visitantes reais: Project › Speed Insights › Enable. O componente `<SpeedInsights />` já está nos layouts.

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Textos em português | `content/pt.ts` |
| Textos em inglês | `content/en.ts` |
| Domínio, e-mail e redes | `content/site.ts` |
| Cores, tipografia e layout | `app/globals.css` (variáveis em `:root`) |
| SEO (title, description, Open Graph, hreflang) | `lib/meta.ts` |
| Página (seções e JSON-LD) | `components/HomePage.tsx` |
| Vitrine do Ocean DS | `components/OceanDemo.tsx` |
| CV para download | `public/gabriel-fernandes-cv.pdf` |

## Idiomas

- Português em `/` e inglês em `/en/`, cada um com seu `<html lang>`, canonical e `hreflang` apontando para o outro.
- Cada idioma é um *route group* com layout próprio: `app/(pt)` e `app/(en)/en`.

## Imagem de compartilhamento (Open Graph)

`public/og-pt.png` e `public/og-en.png` (1200×630) foram gerados a partir de `scripts/og-template.html`. Para refazer (por exemplo, ao trocar o domínio), abra o template no navegador com `?status=...&role=...&url=...` numa janela de 1200×630 e tire um print.

## Decisões de performance

- Exportação estática (`output: "export"`): HTML pronto servido pela CDN da Vercel.
- Fonte Archivo variável servida localmente (`@fontsource-variable/archivo`), sem requisição ao Google Fonts.
- O Ocean DS (~160 KB de CSS/JS) só carrega quando a seção se aproxima da tela.
- Respeita `prefers-reduced-motion`.

## Pendências

- [ ] Prints dos 4 apps
- [ ] Domínio próprio (hoje: gabrielfn.vercel.app)
- [ ] Páginas individuais de projeto
