import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import scss from "rollup-plugin-scss";
import copy from "rollup-plugin-copy";
import filesize from "rollup-plugin-filesize";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default [
  {
    input: "src/index.ts",
    output: [
      { file: 'dist/index.esm.js', format: "es" },
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
      filesize(),
    ],
  },
];
