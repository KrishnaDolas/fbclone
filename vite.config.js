// Example vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/fbclone/', // Set the correct base path for your GitHub Pages deployment
  plugins: [react()]
});
