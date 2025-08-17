import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Experiment2/'  // 🔹 ชื่อ repo ของคุณ
})
