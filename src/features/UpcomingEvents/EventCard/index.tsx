import { Event } from '@/types'
import { CalendarDays, MapPin } from 'lucide-react'
import Image from 'next/image'
import Tags from './Tags'
import { Button } from '@/components/UI/Button'

interface EventCardProps {
  eventDetails: Event
}

const EventCard = ({ eventDetails }: EventCardProps) => {
  return (
    <div className='flex flex-col rounded-xl border'>
      <div className='relative h-64 w-full'>
        <Image
          src='/assets/images/EventImage.png'
          alt=''
          fill
          className='rounded-t-xl object-cover'
          priority
          fetchPriority='high'
        />
      </div>
      <div className='flex flex-col justify-center p-4 md:p-5 gap-3'>
        <h2 className='text-base md:text-lg font-semibold text-[#181B22FF]'>
          Global Tech Innovation Expo 2024
        </h2>
        <div className='flex gap-2 items-center'>
          <div className='flex gap-1 justify-center items-center'>
            <MapPin className='text-[#565D6DFF] w-4 h-4' />
            <p className='text-sm font-normal text-[#565D6DFF]'>
              Berlin, Germany
            </p>
          </div>
          <div className='flex gap-1 justify-center items-center'>
            <CalendarDays className='text-[#565D6DFF] w-4 h-4' />
            <p className='text-sm font-normal text-[#565D6DFF]'>
              Oct 26 - 28, 2024
            </p>
          </div>
        </div>
        <Tags tags={eventDetails?.tags || ['Technology', 'AI', 'Software']} />
        <Button variant='default' className='w-full h-[40px]'>
          View Details
        </Button>
      </div>
    </div>
  )
}

export default EventCard
