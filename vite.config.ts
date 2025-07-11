import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@types': path.resolve(__dirname, './src/types'),
      '@card-types': path.resolve(__dirname, './src/types/components/card'),
      '@design': path.resolve(__dirname, './src/design'),
      '@context': path.resolve(__dirname, './src/context'),
      '@components': path.resolve(__dirname, './src/components'),
      '@config': path.resolve(__dirname, './src/config'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@api': path.resolve(__dirname, './src/api'),
      '@mocks': path.resolve(__dirname, './src/mocks'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@enum': path.resolve(__dirname, './src/enum'),
      '@services': path.resolve(__dirname, './src/services'),

    }
  },
});