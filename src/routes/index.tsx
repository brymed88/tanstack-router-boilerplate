import HomePage from '@/components/templates/pages/home'
import { SITE_CONFIG } from '@/config'
import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/')({
     head: () => {
          return {
               meta: [
                    {
                         title: SITE_CONFIG.siteName + ' - Home Page',
                    },
                    {
                         name: 'This is the home page',
                         content: 'This is the home page of the application.',
                    },
               ],
          }
     },
     component: HomePage,
})
