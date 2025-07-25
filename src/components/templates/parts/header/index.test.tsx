import { renderComponent } from '@/mocks/providerMock'
import { screen, waitFor } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import Header from '.'

const renderHeader = () => renderComponent(<Header />)

describe('Header tests', () => {
     test('Should render with navigation', async () => {
          await waitFor(() => renderHeader())
          //const user = userEvent.setup()

          const homeLink = screen.getByRole('link', { name: /home/i })
          expect(homeLink).toBeDefined()

          const aboutLink = screen.getByRole('link', { name: /about/i })
          expect(aboutLink).toBeDefined()

          const contactLink = screen.getByRole('link', { name: /contact/i })
          expect(contactLink).toBeDefined()
     })
})
