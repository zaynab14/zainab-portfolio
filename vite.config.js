import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src"),
        },
    },
    plugins: [react()],
});
