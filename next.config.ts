import type { NextConfig } from "next";
// PREVIEW=1 gera caminhos relativos, só para o preview hospedado como artifact
const config: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(process.env.PREVIEW ? { assetPrefix: "." } : {}),
};
export default config;
