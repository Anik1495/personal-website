import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import pathModule from "path";
import { viteStaticCopy } from "vite-plugin-static-copy"; // ✅ NEW

function copy404Plugin() {
  return {
    name: "copy-index-to-404",
    closeBundle: () => {
      const distPath = pathModule.resolve(__dirname, "dist");
      const indexPath = pathModule.join(distPath, "index.html");
      const notFoundPath = pathModule.join(distPath, "404.html");

      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, notFoundPath);
        console.log("✅ Copied index.html to 404.html for GitHub Pages fallback.");
      } else {
        console.warn("⚠️ index.html not found. Skipping 404.html copy.");
      }
    }
  };
}

export default defineConfig({
  base: "/personal-website/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    copy404Plugin(),
    viteStaticCopy({
      targets: [
        {
          src: "src/content/about.yaml", // ✅ Copy this file...
          dest: "content",                // ✅ ...into /dist/content/about.yaml
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
