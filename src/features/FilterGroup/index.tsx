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
import { FormEvent } from 'react'

const FilterGroup = () => {
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault()
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
        />
        <Select>
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
        <Select>
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
        <Input placeholder='Date' className='w-[150px] h-[38px]' type='date' />
        <Button type='submit' variant='default' className='w-[126px] h-[40px]'>
          <Search /> Search
        </Button>
      </form>
    </>
  )
}

export default FilterGroup
