import { ThemeProvider } from '@/context/ThemeProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
     Outlet,
     RouterProvider,
     createMemoryHistory,
     createRootRoute,
     createRoute,
     createRouter,
} from '@tanstack/react-router'
import { render, screen } from '@testing-library/react'
import React from 'react'

export async function renderWithProviders(
     Component: React.ReactNode | undefined,
     setupCache?: (queryClient: QueryClient) => void
) {
     // Root route with minimal Outlet for rendering child routes

     const pathPattern = '/test/{-$memberId}/{-$organizationId}/{-$staffId}'

     const queryClient = new QueryClient({
          defaultOptions: {
               queries: {
                    retry: false,
                    gcTime: 0,
               },
          },
     })

     if (setupCache) {
          setupCache(queryClient)
     }

     const rootRoute = createRootRoute({
          component: () => (
               <>
                    <div data-testid="root-layout"></div>
                    <Outlet />
               </>
          ),
     })

     // Index route so '/' always matches
     const indexRoute = createRoute({
          getParentRoute: () => rootRoute,
          path: '/',
          component: () => <div>Index</div>,
     })

     // Test route mounting your Component at the dynamic path
     const testRoute = createRoute({
          getParentRoute: () => rootRoute,
          path: pathPattern,
          component: () => Component || <div></div>,
     })

     // Create the router instance with memory history
     const router = createRouter({
          routeTree: rootRoute.addChildren([indexRoute, testRoute]),
          history: createMemoryHistory({ initialEntries: [pathPattern] }),
          defaultPendingMinMs: 0,
     })

     // Render and wait for the route to resolve and the component to mount
     const renderResult = render(
          <QueryClientProvider client={queryClient}>
               <ThemeProvider defaultTheme="dark" storageKey="_site_theme">
                    <RouterProvider router={router} />
               </ThemeProvider>
          </QueryClientProvider>
     )
     await screen.findByTestId('root-layout')

     return { router, renderResult, queryClient }
}

export const renderHookWithProvider = ({
     children,
}: {
     children: React.ReactNode
}): JSX.Element => {
     const queryClient = new QueryClient({
          defaultOptions: {
               queries: {
                    retry: false,
                    gcTime: 0,
               },
          },
     })
     return (
          <QueryClientProvider client={queryClient}>
               {children}
          </QueryClientProvider>
     )
}
