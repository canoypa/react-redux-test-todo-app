import commonjs from "@rollup/plugin-commonjs";
import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import serve from "rollup-plugin-serve";
import { terser } from "rollup-plugin-terser";
import replace from "@rollup/plugin-replace";

export default {
  input: "src/index.tsx",

  output: {
    dir: "build",
    format: "es",
    sourcemap: true,
  },

  plugins: [
    terser(),

    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),

    babel({ extensions: [".js", ".ts", ".tsx"] }),
    resolve(),
    commonjs({ extensions: [".js", ".ts", ".tsx"] }),

    serve("build"),
  ],
};
