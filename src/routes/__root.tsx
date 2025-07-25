import { createRootRoute, HeadContent, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

// components
import Header from '@/components/templates/parts/header'

export const Route = createRootRoute({
     component: () => (
          <>
               <HeadContent />
               <Header />

               <hr />
               <main className="size-full flex-col p-4">
                    <Outlet />
               </main>
               <TanStackRouterDevtools />
          </>
     ),
     head: () => ({
          meta: [
               {
                    title: 'My App',
               },
               { name: 'description', content: 'Learn more about MyApp' },
          ],
     }),
})
