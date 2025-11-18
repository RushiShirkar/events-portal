const Tags = ({ tags }: { tags?: string[] }) => {
  return (
    <ul className='flex gap-3'>
      {tags?.map((tag: string) => (
        <li
          key={tag}
          className='bg-[#F3F4F6FF] px-3 py-1 rounded-lg text-xs font-normal'
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}

export default Tags
