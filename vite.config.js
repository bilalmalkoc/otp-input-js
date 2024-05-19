import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src/demo',
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'otp-input-js',
      fileName: 'otp-input-js',
    },
    outDir: 'test',
  },
})
