import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@core/infrastructure": path.resolve(
        __dirname,
        "src/core/infrastructure"
      ),
      "@core/layout": path.resolve(__dirname, "src/core/layout"),
      "@core/domain": path.resolve(__dirname, "src/core/domain"),
      "@core/container": path.resolve(__dirname, "src/core/container"),
      "@core/helpers": path.resolve(__dirname, "src/core/helpers"),
    },
  },
});
