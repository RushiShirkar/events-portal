import EventsFilter from '@/features/EventsFilter'
import EventsList from '@/features/EventsList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events | TradeSphere',
  description: 'All Global Trade Events List',
}

const EventsPage = async ({
  searchParams,
}: {
  searchParams: {
    query?: string
    country?: string
    industry?: string
    date?: string
  }
}) => {
  const { query, date, industry, country } = await searchParams

  return (
    <section className='px-6 md:px-12 py-4 border-t'>
      <div className='flex flex-wrap md:flex-nowrap gap-4 md:gap-12'>
        <EventsFilter
          query={query}
          date={date}
          country={country}
          industry={industry}
        />
        <div className='flex flex-col my-4'>
          <h1 className='text-3xl font-bold mb-6'>All Events</h1>
          <EventsList />
        </div>
      </div>
    </section>
  )
}

export default EventsPage
