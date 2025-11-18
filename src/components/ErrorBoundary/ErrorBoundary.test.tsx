import { render, screen, fireEvent } from '@testing-library/react'
import ErrorBoundary from '.'

// A mock component that throws an error when rendered
function ProblemComponent() {
  throw new Error('Test error')
}

// Silence expected console errors during error boundary tests
const consoleError = console.error
beforeAll(() => {
  console.error = jest.fn()
})

afterAll(() => {
  console.error = consoleError
})

describe('ErrorBoundary', () => {
  test('renders children when no error occurs', () => {
    render(
      <ErrorBoundary>
        <p>Normal content</p>
      </ErrorBoundary>,
    )

    expect(screen.getByText('Normal content')).toBeInTheDocument()
  })

  test('renders default fallback UI when an error is thrown', () => {
    render(
      <ErrorBoundary>
        <ProblemComponent />
      </ErrorBoundary>,
    )

    expect(screen.getByText('Something Went Wrong.')).toBeInTheDocument()

    expect(
      screen.getByText('Please try refreshing the page or come back later.'),
    ).toBeInTheDocument()
  })

  test('renders custom fallback UI when provided', () => {
    render(
      <ErrorBoundary fallback={<div>Custom fallback</div>}>
        <ProblemComponent />
      </ErrorBoundary>,
    )

    expect(screen.getByText('Custom fallback')).toBeInTheDocument()
  })

  test('calls console.error when error is caught', () => {
    render(
      <ErrorBoundary>
        <ProblemComponent />
      </ErrorBoundary>,
    )

    expect(console.error).toHaveBeenCalled()
  })

  test('clicking the fallback button does not crash and has correct href', () => {
    render(
      <ErrorBoundary>
        <ProblemComponent />
      </ErrorBoundary>,
    )

    const button = screen.getByRole('link', { name: /refresh page/i })

    // Ensure link exists
    expect(button).toBeInTheDocument()
    // Check correct href is set
    expect(button).toHaveAttribute('href', '/')

    // Simulate click
    fireEvent.click(button)

    // The component should still show fallback UI (no crash)
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
  })
})
