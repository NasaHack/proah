import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["src/**/*.ts"],
    format: ["esm"],
    outExtension: () => ({ js: ".mjs" }),
    dts: true,
    minify: true,
    clean: true,
    esbuildOptions(options) {
      options.mangleProps = /^_/;
      options.mangleQuoted = true;
    },
  },
  {
    entry: ["src/**/*.cts"],
    format: ["cjs"],
    outExtension: () => ({ js: ".cjs" }),
    dts: false,
    minify: true,
    clean: false,
    esbuildOptions(options) {
      options.mangleProps = /^_/;
      options.mangleQuoted = true;
    },
  },
]);
