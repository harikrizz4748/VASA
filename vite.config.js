import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { tempo } from "tempo-devtools/dist/vite"; // Add this import

// Add this block of code
const conditionalPlugins = [];
if (process.env.TEMPO) {
  conditionalPlugins.push(["tempo-devtools/swc", {}]);
}

// https://vite.dev/config/
export default defineConfig({
  base: "/SnapLogicPlayground1/",
  build: {
    outDir: "dist",
  },
  plugins: [
    react({
      plugins: [...conditionalPlugins], // Add the conditional plugin
    }),
    tempo(), // Add the tempo plugin
  ],
  server: {
    // @ts-ignore
    allowedHosts: process.env.TEMPO === "true" ? true : undefined, // Whatever was the previous value or undefined
  },
  define: {
    "process.env": {},
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
