import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trade Events Portal',
  description: 'Global Trade Events Portal for managing events',
}

export default function Home() {
  return (
    <>
      <h1 className='text-black text-3xl'>Events Portal</h1>
    </>
  )
}
