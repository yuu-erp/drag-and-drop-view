import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  server: {
    host: "0.0.0.0", // Makes the server accessible externally~
  },
  resolve: {
    alias: {
      "@core/application": path.resolve(__dirname, "src/core/application"),
      "@core/infrastructure": path.resolve(
        __dirname,
        "src/core/infrastructure"
      ),
      "@core/layout": path.resolve(__dirname, "src/core/layout"),
      "@core/domain": path.resolve(__dirname, "src/core/domain"),
      "@core/container": path.resolve(__dirname, "src/core/container"),
      "@core/helpers": path.resolve(__dirname, "src/core/helpers"),
      "@core/exceptions": path.resolve(__dirname, "src/core/exceptions"),
    },
  },
});
