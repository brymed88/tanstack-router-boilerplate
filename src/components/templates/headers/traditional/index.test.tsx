import { SITE_CONFIG } from '@/config'
import { MainMenu } from '@/config/menu'
import { renderWithProviders } from '@/mocks/providerMock'
import '@testing-library/jest-dom'
import { fireEvent, screen, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import TraditionalHeader from '.'

describe('Traditional Header Template', () => {
     it('should display menu', async () => {
          await renderWithProviders(<TraditionalHeader />)

          expect(
               screen.getByText(SITE_CONFIG.siteName || '')
          ).toBeInTheDocument()

          const hamburgerButton = screen.getByRole('button', {
               name: /menuBtn/i,
          })
          expect(hamburgerButton).toBeInTheDocument()

          fireEvent.click(hamburgerButton)

          waitFor(() => {
               expect(screen.getByText(MainMenu[0].title)).toBeInTheDocument()
          })

          //Test sub menu
          const subMenuButton = screen.getByText('About')
          expect(subMenuButton).toBeInTheDocument()

          fireEvent.click(subMenuButton)

          waitFor(() => {
               expect(
                    screen.getByText(MainMenu[1].submenu?.[0].title || '')
               ).toBeInTheDocument()
          })
     })
})
