import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.tsx",

  output: {
    dir: "docs",
    format: "es",
    sourcemap: true,
  },

  plugins: [
    typescript(),
    babel({ extensions: [".js", ".ts", ".tsx"] }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),

    commonjs({ extensions: [".js", ".ts", ".tsx"] }),
    nodeResolve(),

    terser(),
  ],
};
