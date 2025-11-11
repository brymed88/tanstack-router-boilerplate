import { renderHookWithProvider } from '@/mocks/providerMock.js'
import '@testing-library/jest-dom'
import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useOnClickOutside } from './helpers.js'

describe('Helpers Test Suite', () => {
     it('should exist', () => {
          const hook = renderHook(() => useOnClickOutside, {
               wrapper: renderHookWithProvider,
          })
          expect(hook).toBeDefined()
     })
})
