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
import { Search } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

const FilterGroup = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    query: '',
    country: '',
    industry: '',
    date: '',
  })

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault()
    const params = new URLSearchParams({
      query: formData.query,
      country: formData.country || '',
      industry: formData.industry || '',
      date: formData.date || '',
    })

    router.push(`/events?${params.toString()}`)
  }

  const updateFormData = (value: string, key: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <>
      <form
        className='flex flex-wrap gap-4 items-center justify-center'
        onSubmit={handleSubmit}
      >
        <Input
          placeholder='Search for events, products or buyers'
          className='w-[150px] md:w-[255px] h-[38px]'
          required
          value={formData.query}
          onChange={(e) => updateFormData(e.target.value, 'query')}
        />
        <Select
          value={formData?.country}
          onValueChange={(value) => updateFormData(value, 'country')}
        >
          <SelectTrigger className='w-[150px]'>
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
          <SelectTrigger className='w-[150px]'>
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
          className='w-[150px] h-[38px]'
          type='date'
          value={formData?.date}
          onChange={(e) => updateFormData(e.target.value, 'date')}
        />
        <Button
          type='submit'
          variant='default'
          className='w-[126px] h-[40px] bg-blue-800 hover:bg-blue-800'
        >
          <Search /> Search
        </Button>
      </form>
    </>
  )
}

export default FilterGroup
