import "@fontsource-variable/archivo/wdth.css";
import "../globals.css";
import { pt } from "@/content/pt";
import { buildMetadata } from "@/lib/meta";

export const metadata = buildMetadata(pt, "/og-pt.png");
export { viewport } from "@/lib/meta";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
