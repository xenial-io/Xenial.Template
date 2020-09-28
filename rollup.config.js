import pkg from "./package.json";

import fg from "fast-glob";

import { brotliCompressSync } from "zlib";

import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import scss from "rollup-plugin-scss";
import copy from "rollup-plugin-copy";
import { terser } from "rollup-plugin-terser";
import gzipPlugin from "rollup-plugin-gzip";
import filesize from "rollup-plugin-filesize";

const extensions = [".js", ".jsx", ".ts", ".tsx"];
const additionalFiles = [
  "./dist/css/main.css",
  ...fg.sync("./dist/css/*.svg"),
  ...fg.sync("./dist/css/*.ttf"),
  ...fg.sync("./dist/img/*.svg"),
  ...fg.sync("./dist/img/*.png"),
  ...fg.sync("./dist/img/*.ico"),
];

export default [
  {
    input: "src/index.ts",
    output: [
      // {
      //   name: "xenial-template",
      //   file: pkg.browser,
      //   format: "umd",
      //   plugins: [terser(), resolve(), commonjs()],
      // },
      // { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
    external: [],
    plugins: [
      resolve({ extensions }),
      commonjs(),
      babel({
        extensions,
        exclude: "node_modules/**",
      }),
      scss({
        output: "dist/css/main.css",
        outputStyle: "compressed",
      }),
      copy({
        targets: [
          { src: "src/css/*.woff", dest: "./dist/css" },
          { src: "src/css/*.woff2", dest: "./dist/css" },
          { src: "src/css/*.ttf", dest: "./dist/css" },
          { src: "src/css/*.svg", dest: "./dist/css" },
          { src: "src/img/*.*", dest: "./dist/img" },
        ],
      }),
      // gzipPlugin({
      //   additionalFiles,
      // }),
      // gzipPlugin({
      //   additionalFiles,
      //   customCompression: (content) =>
      //     brotliCompressSync(Buffer.from(content)),
      //   fileName: ".br",
      // }),
      filesize(),
    ],
  },
];
