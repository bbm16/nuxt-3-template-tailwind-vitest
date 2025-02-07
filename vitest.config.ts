import { defineVitestConfig } from "@nuxt/test-utils/config";
import path from "path";
export default defineVitestConfig({
  test: {
    workspace: [
      {
        extends: true,
        test: {
          globals: true,
          environment: "nuxt",
          exclude: ["**/node_modules/**"],
        },
        resolve: {
          alias: {
            "#imports": path.resolve(__dirname, "./.nuxt/imports.d.ts"),
            "@": path.resolve(__dirname, "./"),
          },
        },
      },
    ],
  },
});
