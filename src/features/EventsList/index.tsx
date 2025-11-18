'use client'

import { useState } from 'react'
import { Event } from '@/types'
import EventCard from '../UpcomingEvents/EventCard'

const EventsList = () => {
  const [events, setEvents] = useState([{}, {}, {}, {}, {}])

  return (
    <>
      <ul className='flex flex-wrap gap-8'>
        {events && events?.length > 0 ? (
          <>
            {events?.map((event: Event, index: number) => (
              <li key={index}>
                <EventCard eventDetails={event} />
              </li>
            ))}
          </>
        ) : (
          <div className='flex justify-center items-center'>
            <p className='text-md'>No Upcoming Events Found.</p>
          </div>
        )}
      </ul>
    </>
  )
}

export default EventsList
