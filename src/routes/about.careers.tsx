import CareersPage from '@/components/templates/pages/about/careers'
import { SITE_CONFIG } from '@/config'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/careers')({
     head: () => {
          return {
               meta: [
                    {
                         title: SITE_CONFIG.siteName + ' - Careers Page',
                    },
                    {
                         name: 'This is the team page',
                         content: 'This is the careers page of the application.',
                    },
               ],
          }
     },
     component: CareersPage,
})
