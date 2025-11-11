import { renderWithProviders } from '@/mocks/providerMock'
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import CareersPage from '.'

describe('Careers Page Test Suite', () => {
     it('should render careers page', async () => {
          await renderWithProviders(<CareersPage />)

          const contactHeading = screen.getByText(/This is the careers page/i)
          expect(contactHeading).toBeInTheDocument()
     })
})
