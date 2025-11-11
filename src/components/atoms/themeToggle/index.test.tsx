import { renderWithProviders } from '@/mocks/providerMock'
import { fireEvent, screen, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, test } from 'vitest'
import LocaleChanger from '.'

describe('ThemeToggle Tests', () => {
     beforeEach(async () => {
          await renderWithProviders(<LocaleChanger />)
     })

     test('Theme should change to light', async () => {
          const button = screen.getByRole('button', { name: /toggle theme/i })
          expect(button).toBeDefined()

          //Theme is default dark, so clicking the button should change it to light
          fireEvent.click(button)

          // Check if the theme has changed to light
          waitFor(() =>
               expect(
                    document.documentElement.classList.contains('light')
               ).toBe(true)
          )
     })
     test('Theme should change to dark', async () => {
          const button = screen.getByRole('button', { name: /toggle theme/i })
          expect(button).toBeDefined()

          //Theme is default dark, so clicking the button should change it to light first
          fireEvent.click(button)

          // Check if the theme has changed to light
          waitFor(() =>
               expect(
                    document.documentElement.classList.contains('light')
               ).toBe(true)
          )
          //Click again to change to dark
          fireEvent.click(button)

          // Check if the theme has changed to dark
          waitFor(() =>
               expect(document.documentElement.classList.contains('dark')).toBe(
                    true
               )
          )
     })
})
