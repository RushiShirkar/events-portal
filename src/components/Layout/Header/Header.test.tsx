import { render, screen } from '@testing-library/react'
import Header from '.'

describe('Header test', () => {
  test('Logo text is visible', () => {
    render(<Header />)
    expect(screen.getByText('TradeSphere')).toBeInTheDocument()
  })
})
