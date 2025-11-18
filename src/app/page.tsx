import FilterGroup from '@/features/FilterGroup'
import UpcomingEvents from '@/features/UpcomingEvents'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trade Events Portal',
  description: 'Global Trade Events Portal for managing events',
}

export default function Home() {
  return (
    <>
      <section className='w-full h-screen md:max-h-[500px] bg-blue-400 flex flex-col justify-center items-center'>
        <h1 className='text-6xl font-extrabold max-w-3xl text-center text-white'>
          Global Trade Events Platform
        </h1>
        <p className='mt-6 text-xl font-normal text-center text-white max-w-[300px] md:max-w-full'>
          Discover Trade Fairs. Meet Exporters. Find New Buyers.
        </p>
        <div className='my-8'>
          <FilterGroup />
        </div>
      </section>
      <section className='p-5'>
        <UpcomingEvents upcomingEvents={[{}, {}, {}, {}, {}]} />
      </section>
    </>
  )
}
