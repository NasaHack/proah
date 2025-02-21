import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*.ts"],
  format: ["cjs", "esm"],
  dts: true,
  minify: true,
  clean: true,
  outDir: "dist",
  splitting: false,
  keepNames: false,
  esbuildOptions(options) {
    options.mangleProps = /^_/;
    options.mangleQuoted = true;
  },
});
