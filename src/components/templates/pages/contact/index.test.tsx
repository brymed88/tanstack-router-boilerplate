import { renderWithProviders } from '@/mocks/providerMock'
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ContactPage from '.'

describe('Contact Page Test Suite', () => {
     it('should render contact page', async () => {
          await renderWithProviders(<ContactPage />)

          const contactHeading = screen.getByText(/This is the contact page/i)
          expect(contactHeading).toBeInTheDocument()
     })
})
