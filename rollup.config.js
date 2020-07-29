import { terser } from "rollup-plugin-terser";
import del from "rollup-plugin-delete";
import copy from "rollup-plugin-copy";
import csso from "csso";

export default {
  input: "src/index.js",
  output: [
    {
      format: "iife",
      file: "dist/object-visualizer.iife.js",
      name: "ObjectVisualizer",
      globals: {
        vue: "Vue",
      },
    },
    {
      format: "iife",
      file: "dist/object-visualizer.iife.min.js",
      plugins: [terser()],
      name: "ObjectVisualizer",
      globals: {
        vue: "Vue",
      },
    },
    {
      format: "cjs",
      file: "dist/object-visualizer.cjs.js",
    },
    {
      format: "cjs",
      file: "dist/object-visualizer.cjs.min.js",
      plugins: [terser()],
    },
    {
      format: "umd",
      file: "dist/object-visualizer.umd.js",
      name: "ObjectVisualizer",
      globals: {
        vue: "Vue",
      },
    },
    {
      format: "umd",
      file: "dist/object-visualizer.umd.min.js",
      plugins: [terser()],
      name: "ObjectVisualizer",
      globals: {
        vue: "Vue",
      },
    },
    {
      format: "esm",
      file: "dist/object-visualizer.esm.js",
    },
    {
      format: "esm",
      file: "dist/object-visualizer.esm.min.js",
      plugins: [terser()],
    },
  ],
  plugins: [
    del({
      targets: "dist/*",
    }),
    copy({
      targets: [
        { src: "src/index.css", dest: "dist" },
        {
          src: "src/index.css",
          dest: "dist",
          rename: "index.min.css",
          transform: (content) => csso.minify(content).css,
        },
      ],
    }),
  ],
};
