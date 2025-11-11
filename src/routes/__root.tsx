import { createRootRoute, HeadContent, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

// components
import TraditionalHeader from '@/components/templates/headers/traditional'
import { SITE_CONFIG } from '@/config'

export const Route = createRootRoute({
     component: () => (
          <>
               <HeadContent />
               <TraditionalHeader />

               <hr />
               <main className="size-full min-h-[calc(100vh-80px)] flex-col p-4 pt-20">
                    <Outlet />
               </main>
               <TanStackRouterDevtools />
          </>
     ),
     head: () => ({
          meta: [
               {
                    title: SITE_CONFIG + ' - My App',
               },
               { name: 'description', content: 'Learn more about MyApp' },
          ],
     }),
})
