import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Replace 3000 with your desired port number
    base: '/', // Set the base URL to an empty string to serve the app from the root directory
  },
})
