'use client'

import { Button } from '@/components/UI/Button'
import { Input } from '@/components/UI/Input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/UI/Select'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const EventsFilter = ({
  query,
  date,
  country,
  industry,
}: {
  query?: string
  date?: string
  country?: string
  industry?: string
}) => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    query: query || '',
    country: country || '',
    industry: industry || '',
    date: date || '',
  })

  const updateFormData = (value: string, key: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setFormData({
      query: '',
      country: '',
      industry: '',
      date: '',
    })
    router.replace('/events')
  }

  return (
    <section className='p-5 mt-4 h-full md:h-[calc(100vh-200px)] max-w-[240px] w-full border rounded-xl space-y-5'>
      <div className='flex justify-between items-center'>
        <h5 className='text-xl font-bold'>Filters</h5>
        <Button variant='link' className='p-0' onClick={clearFilters}>
          Clear
        </Button>
      </div>
      <Input
        placeholder='Search Events'
        className='w-full'
        value={formData?.query || ''}
        onChange={(e) => updateFormData(e.target.value, 'query')}
      />
      <Select
        value={formData?.country}
        onValueChange={(value) => updateFormData(value, 'country')}
      >
        <SelectTrigger className='w-full'>
          <SelectValue placeholder='Country' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Country</SelectLabel>
            <SelectItem value='india'>India</SelectItem>
            <SelectItem value='brazil'>Brazil</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select
        value={formData?.industry}
        onValueChange={(value) => updateFormData(value, 'industry')}
      >
        <SelectTrigger className='w-full'>
          <SelectValue placeholder='Industry' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Industry</SelectLabel>
            <SelectItem value='agriculture'>Agriculture</SelectItem>
            <SelectItem value='mining'>Mining</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input
        placeholder='Date'
        className='w-full h-[38px]'
        type='date'
        value={formData?.date || ''}
        onChange={(e) => updateFormData(e.target.value, 'date')}
      />
    </section>
  )
}

export default EventsFilter
