/**
 * Test utility to render components with TanStack Router and ThemeProvider
 * @description
 * @param {React.ReactNode} comp - The component to render
 * @returns {void}
 * @example
 * renderComponent(<MyComponent />);
 * @see {@link https://tanstack.com/router/v1/docs/guides/testing}
 */

import { ThemeProvider } from '@/components/shared/ThemeProvider'
import {
     createMemoryHistory,
     createRootRoute,
     createRoute,
     createRouter,
     RouterProvider,
} from '@tanstack/react-router'
import { render } from '@testing-library/react'
import React from 'react'

// Polyfill for matchMedia in tests
// This is necessary for components that use media queries, such as the ThemeToggle component
window.matchMedia =
     window.matchMedia ||
     function () {
          return {
               matches: false,
               addListener: function () {},
               removeListener: function () {},
          }
     }

// then wrap your component with the RouterProvider
export const renderComponent = (comp: React.ReactNode) => {
     // Define your routes for the test
     const rootRoute = createRootRoute()
     const indexRoute = createRoute({
          getParentRoute: () => rootRoute,
          path: '/',
          component: () => comp,
     })

     const routeTree = rootRoute.addChildren([indexRoute])

     const history = createMemoryHistory({ initialEntries: ['/'] })
     const router = createRouter({ routeTree, history })

     render(
          <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
               <RouterProvider router={router} />
          </ThemeProvider>
     )
}
