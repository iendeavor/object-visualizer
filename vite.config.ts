import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { minify } from 'csso'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.ts'),
      name: 'ObjectVisualizer',
      fileName: 'object-visualizer',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue(),
    dts(),
    viteStaticCopy({
      targets: [
        { src: 'lib/index.css', dest: '.' },
        {
          src: 'lib/index.css',
          dest: '.',
          rename: 'index.min.css',
          transform: (content) => minify(content).css,
        },
      ],
    }),
  ],
})
