import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Experiment2/'  // 🔹 ต้องตรงกับชื่อ repo ของคุณ
})
