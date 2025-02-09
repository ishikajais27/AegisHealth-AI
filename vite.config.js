import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'readable-stream',
        'babel-runtime/helpers/toConsumableArray',
        'babel-runtime/helpers/classCallCheck',
        'babel-runtime/helpers/createClass',
        'babel-runtime/helpers/possibleConstructorReturn',
        'babel-runtime/helpers/inherits',
        'babel-runtime/helpers/get',
        'babel-runtime/helpers/typeof',
        'babel-runtime/regenerator',
      ],
    },
  },
})
