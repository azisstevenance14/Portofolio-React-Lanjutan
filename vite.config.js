import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 👈 Menyalakan akses network secara otomatis
    port: 5173, // 👈 Memastikan port tetap di 5173
  }
})
