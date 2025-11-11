import { vi } from 'vitest'

global.matchMedia =
     global.matchMedia ||
     function () {
          return {
               matches: false,
               addListener: function () {},
               removeListener: function () {},
          }
     }

vi.mock(import('@tanstack/react-router'), async (importOriginal) => {
     const actual = await importOriginal()
     return {
          ...actual,
          useRouter: () => ({
               ...actual.useRouter(),
               invalidate: vi.fn().mockResolvedValue(undefined),
          }),
     }
})
