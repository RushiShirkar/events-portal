import { render, screen } from '@testing-library/react'
import Footer from '.'
import { footerLinks } from '@/content'

describe('Footer', () => {
  test('Text present in footer', () => {
    render(<Footer />)
    expect(
      screen.getByText('© 2025 Global Trade Events. All rights reserved.'),
    ).toBeInTheDocument()
  })

  test('Render all footer links', () => {
    render(<Footer />)
    footerLinks.forEach((link) => {
      const el = screen.getByRole('link', { name: link.title })
      expect(el).toBeInTheDocument()
      expect(el).toHaveAttribute('href', link.href)
    })
  })

  test('All links open in new tab with safe attributes', () => {
    render(<Footer />)
    footerLinks.forEach((link) => {
      const el = screen.getByRole('link', { name: link.title })
      expect(el).toHaveAttribute('target', '_blank')
      expect(el).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})
