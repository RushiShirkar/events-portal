import { Event } from '@/types'
import EventCard from './EventCard'

interface UpcomingEventsProps {
  upcomingEvents: Event[]
}

const UpcomingEvents = ({ upcomingEvents }: UpcomingEventsProps) => {
  return (
    <section className='px-0 py-2 md:px-32 md:py-6'>
      <h1 className='text-2xl md:text-3xl font-bold'>Upcoming Events</h1>
      <ul className='flex flex-wrap gap-8 mt-8'>
        {upcomingEvents && upcomingEvents?.length > 0 ? (
          <>
            {upcomingEvents?.map((event: Event) => (
              <li key={event?.id}>
                <EventCard eventDetails={event} />
              </li>
            ))}
          </>
        ) : (
          <div className='mx-auto my-12'>
            <p className='text-md'>No Upcoming Events Found.</p>
          </div>
        )}
      </ul>
    </section>
  )
}

export default UpcomingEvents
