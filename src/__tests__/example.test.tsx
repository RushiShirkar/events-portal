import { render, screen } from '@testing-library/react'

function Example() {
  return <h1>Hello World</h1>
}

test('renders heading', () => {
  render(<Example />)
  expect(screen.getByText('Hello World')).toBeInTheDocument()
})
