import { SITE_CONFIG } from '@/config'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
     head: () => {
          return {
               meta: [
                    {
                         title: SITE_CONFIG.siteName + 'Contact Page',
                    },
                    {
                         name: 'This is the contact page',
                         content: 'This is the contact page of the application.',
                    },
               ],
          }
     },
     component: Contact,
})

function Contact() {
     return <h3>This is the contact page</h3>
}
