import commonjs from "@rollup/plugin-commonjs";
import babel from "rollup-plugin-babel";

export default {
  input: "src/index.tsx",

  output: {
    dir: "build",
    format: "es",
    sourcemap: true,
  },

  plugins: [
    babel({ extensions: [".ts", ".tsx"] }),
    commonjs({ extensions: [".ts", ".tsx"] }),
  ],
};
