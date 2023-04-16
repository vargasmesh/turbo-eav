import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import Icons from "unplugin-icons/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Icons({ compiler: "jsx", jsx: "preact" }), preact()],
});
