import { render, screen, fireEvent } from '@testing-library/react'
import { Button, buttonVariants } from '.'
import { createRef } from 'react'

// Test: Renders default button
test('renders a default button', () => {
  render(<Button>Click me</Button>)
  const btn = screen.getByRole('button', { name: 'Click me' })
  expect(btn).toBeInTheDocument()
  expect(btn).toHaveClass(
    buttonVariants({ variant: 'default', size: 'default' }),
  )
})

// Test: Applies variant + size classes
test('applies correct variant and size', () => {
  render(
    <Button variant='destructive' size='lg'>
      Delete
    </Button>,
  )

  const btn = screen.getByRole('button', { name: 'Delete' })

  expect(btn).toHaveClass(
    buttonVariants({ variant: 'destructive', size: 'lg' }),
  )
})

// Test: Merges custom className
test('merges custom className', () => {
  render(<Button className='custom-class'>Test</Button>)
  const btn = screen.getByRole('button', { name: 'Test' })

  expect(btn).toHaveClass('custom-class')
})

// Test: disabled state
test('renders disabled state correctly', () => {
  render(<Button disabled>Disabled</Button>)
  const btn = screen.getByRole('button', { name: 'Disabled' })

  expect(btn).toBeDisabled()
})

// Test: onClick handler works
test('calls onClick when clicked', () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>Press</Button>)

  fireEvent.click(screen.getByRole('button', { name: 'Press' }))
  expect(handleClick).toHaveBeenCalledTimes(1)
})

// Test: asChild renders Slot children
test('renders with asChild and preserves child element', () => {
  render(
    <Button asChild>
      <a href='/test'>Go</a>
    </Button>,
  )

  const link = screen.getByRole('link', { name: 'Go' })
  expect(link).toBeInTheDocument()
  expect(link.tagName).toBe('A') // wrapped correctly
})

// Test: forwards ref
test('forwards ref to the underlying element', () => {
  const ref = createRef<HTMLButtonElement>()

  render(<Button ref={ref}>Ref Button</Button>)

  expect(ref.current).not.toBeNull()
  expect(ref.current?.tagName).toBe('BUTTON')
})
