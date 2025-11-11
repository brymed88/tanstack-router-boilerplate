import TeamPage from '@/components/templates/pages/about/team'
import { SITE_CONFIG } from '@/config'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/team')({
     head: () => {
          return {
               meta: [
                    {
                         title: SITE_CONFIG.siteName + ' - Team Page',
                    },
                    {
                         name: 'This is the team page',
                         content: 'This is the team page of the application.',
                    },
               ],
          }
     },
     component: TeamPage,
})
