import { renderComponent } from '@/mocks/providerMock'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, test } from 'vitest'
import LocaleChanger from '.'

const renderToggle = () => renderComponent(<LocaleChanger />)

describe('ThemeToggle Tests', () => {
     beforeEach(async () => {
          await waitFor(() => renderToggle())
     })
     test('ThemeToggle should render', async () => {
          const user = userEvent.setup()

          const button = screen.getByRole('button', { name: /toggle theme/i })
          expect(button).toBeDefined()

          //open the dropdown menu
          await waitFor(() => user.click(button))

          const sunIcon = screen.getByTestId('toggle-sun')
          expect(sunIcon).toBeDefined()

          const moonIcon = screen.getByTestId('toggle-moon')
          expect(moonIcon).toBeDefined()

          const dropdownContent = screen.getByTestId('toggle-content')
          expect(dropdownContent).toBeDefined()
     })
     test('Theme should change to light', async () => {
          const user = userEvent.setup()

          const button = screen.getByRole('button', { name: /toggle theme/i })
          expect(button).toBeDefined()

          //open the dropdown menu
          await waitFor(() => user.click(button))

          const lightOption = screen.getByText(/light/i)
          expect(lightOption).toBeDefined()

          await waitFor(() => user.click(lightOption))

          // Check if the theme has changed to light
          expect(document.documentElement.classList.contains('light')).toBe(
               true
          )
     })
     test('Theme should change to dark', async () => {
          const user = userEvent.setup()

          const button = screen.getByRole('button', { name: /toggle theme/i })
          expect(button).toBeDefined()

          //open the dropdown menu
          await waitFor(() => user.click(button))

          const darkOption = screen.getByText(/dark/i)
          expect(darkOption).toBeDefined()

          await waitFor(() => user.click(darkOption))

          // Check if the theme has changed to dark
          expect(document.documentElement.classList.contains('dark')).toBe(true)
     })
})
