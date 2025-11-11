import { renderWithProviders } from '@/mocks/providerMock'
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import TeamPage from '.'

describe('Teams Page Test Suite', () => {
     it('should render teams page', async () => {
          await renderWithProviders(<TeamPage />)

          const contactHeading = screen.getByText(/This is the team page/i)
          expect(contactHeading).toBeInTheDocument()
     })
})
