import { renderWithProviders } from '@/mocks/providerMock'
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import HomePage from '.'

describe('Home Page Test Suite', () => {
     it('should render home page', async () => {
          await renderWithProviders(<HomePage />)

          const contactHeading = screen.getByText(
               'Shadcn + Tailwind + Tanstack Router Demo'
          )
          expect(contactHeading).toBeInTheDocument()
     })
})
