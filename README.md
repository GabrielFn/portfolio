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
4. Para usar seu domínio: Firebase Console › Hosting › Adicionar domínio personalizado. Depois atualize `site.url` em `content/pt.ts` (é usado no canonical, no sitemap e no Open Graph).

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Textos, experiência, projetos, stack, links | `content/pt.ts` |
| Cores, tipografia e layout | `app/globals.css` (variáveis em `:root`) |
| SEO (title, description, Open Graph) | `app/layout.tsx` |
| Dados estruturados (JSON-LD) | `app/page.tsx` |
| Vitrine do Ocean DS | `components/OceanDemo.tsx` |
| CV para download | `public/gabriel-fernandes-cv.pdf` |

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
- [ ] Versão em inglês (`/en/`)
- [ ] Páginas individuais de projeto
- [ ] Imagem de Open Graph (1200×630)
