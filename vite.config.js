import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: "/Agency_Team1_Mock_Project/",
    plugins: [react(), tailwindcss()],
    //plugins: [react()],
   // base: '/Agency_Team1_Mock_Project/',
 //plugins: [react()],
});
