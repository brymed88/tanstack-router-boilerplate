import { RouterProvider, createRouter } from '@tanstack/react-router'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

//theme provider
import { ThemeProvider } from '@/components/shared/ThemeProvider'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

//global styles
import './index.css'

// Create a new router instance
export const router = createRouter({
     routeTree,
     defaultPreload: 'intent',
     scrollRestoration: true,
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
     interface Register {
          router: typeof router
     }
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
     const root = ReactDOM.createRoot(rootElement)
     root.render(
          <StrictMode>
               <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
                    <RouterProvider router={router} />
               </ThemeProvider>
          </StrictMode>
     )
}
