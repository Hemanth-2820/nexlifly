import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

const dynamicRoutes = [
  '/',
  '/about',
  '/capabilities/web-development',
  '/capabilities/app-development',
  '/capabilities/software-development',
  '/capabilities/aws-devops',
  '/capabilities/hosting-server',
  '/capabilities/digital-marketing',
  '/capabilities/ai-chatbots',
  '/capabilities/ivr-solutions',
  '/capabilities/api-integrations',
  '/capabilities/security-maintenance',
  '/capabilities/ai-automation',
  '/capabilities/ecommerce-solutions',
  '/works',
  '/contact-us'
];

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://www.nexlify.in',
      dynamicRoutes,
    })
  ],
})
