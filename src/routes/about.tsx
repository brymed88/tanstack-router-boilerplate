import { SITE_CONFIG } from '@/config'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
     head: () => {
          return {
               meta: [
                    {
                         title: SITE_CONFIG.siteName + 'About Page',
                    },
                    {
                         name: 'This is the about page',
                         content: 'This is the about page of the application.',
                    },
               ],
          }
     },
     component: About,
})

function About() {
     return <h3>This is the about page</h3>
}
