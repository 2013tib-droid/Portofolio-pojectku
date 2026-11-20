import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// BASE_PATH diisi oleh workflow GitHub Pages (mis. "/Portofolio-pojectku/").
// Di Vercel/Netlify/lokal tidak diisi, jadi tetap "/".
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
})
