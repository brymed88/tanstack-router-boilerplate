import { SITE_CONFIG } from '@/config'
import { renderWithProviders } from '@/mocks/providerMock'
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import RootLayout from '.'

describe('Root Layout Test Suite', () => {
     it('should render root layout', async () => {
          await renderWithProviders(
               <RootLayout>
                    <div>test</div>
               </RootLayout>
          )

          const pageTitle = screen.getByText(SITE_CONFIG.siteName || '')
          expect(pageTitle).toBeInTheDocument()

          expect(screen.getByTestId('traditional-header')).toBeInTheDocument()

          expect(
               screen.getByRole('link', { name: /Home/i })
          ).toBeInTheDocument()
          expect(
               screen.getByRole('link', { name: /Contact/i })
          ).toBeInTheDocument()

          expect(screen.getByText('test')).toBeInTheDocument()
     })
})
