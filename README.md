# Portfólio — Gabriel Fernandes da Silva

Site pessoal em Next.js (App Router) com exportação estática, hospedado no Firebase Hosting.

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:3000
```

## Publicar no Firebase

1. Crie o projeto no console do Firebase e troque `SEU-PROJETO-FIREBASE` em `.firebaserc` pelo ID dele.
2. Instale a CLI e faça login (só na primeira vez):
   ```bash
   npm install -g firebase-tools
   firebase login
   ```
3. Gere o site e publique:
   ```bash
   npm run build      # gera a pasta out/
   firebase deploy --only hosting
   ```
4. Para usar seu domínio: Firebase Console › Hosting › Adicionar domínio personalizado. Depois atualize `site.url` em `content/site.ts` (é usado no canonical, no sitemap e no Open Graph).

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

- Exportação estática (`output: "export"`): HTML pronto servido pela CDN do Firebase.
- Fonte Archivo variável servida localmente (`@fontsource-variable/archivo`), sem requisição ao Google Fonts.
- O Ocean DS (~160 KB de CSS/JS) só carrega quando a seção se aproxima da tela.
- Respeita `prefers-reduced-motion`.

## Pendências

- [ ] Descrição do Manual Téc. do Mecânico (`content/pt.ts`)
- [ ] Stack do PMOC Rápido
- [ ] Prints dos 4 apps
- [ ] Domínio final
- [ ] Páginas individuais de projeto
