import "@fontsource-variable/archivo/wdth.css";
import "../../globals.css";
import { en } from "@/content/en";
import { buildMetadata } from "@/lib/meta";

export const metadata = buildMetadata(en, "/og-en.png");
export { viewport } from "@/lib/meta";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
