import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import scss from "rollup-plugin-scss";
import copy from "rollup-plugin-copy";

const extensions = [".js", ".jsx", ".ts", ".tsx"];
export default [
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.min.js",
      format: "iife",
    },
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
    ],
    //   sourceMap: "inline",
  },
];
