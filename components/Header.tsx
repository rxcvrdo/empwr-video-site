'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import DropdownList from './DropdownList'
import RecordScreen from './RecordScreen'

const Header = ({ subHeader, title, userImg }: SharedHeaderProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState(searchParams.get('query') || '')

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const params = new URLSearchParams(window.location.search)
    if (searchTerm) {
      params.set('query', searchTerm)
    } else {
      params.delete('query')
    }
    router.push(`?${params.toString()}`)
  }

  return (
    <header className="header">
      <section className="header-container">
        <div className="details">
          {userImg && (
            <Image
              src={userImg}
              width={66}
              height={66}
              className="rounded-full"
              alt="user-image"
            />
          )}
          <article>
            <p className="text-[#F2F0EF]">{subHeader}</p>
            <h1 className="text-white">{title}</h1>
          </article>
        </div>
        <aside>
          <Link href="/upload" className="bg-white">
            <Image src="/assets/icons/upload.svg" height={16} width={16} alt="upload" />
            <span>Upload a video</span>
          </Link>
          <RecordScreen />
        </aside>
      </section>

      <section className="search-filter">
        <form className="search flex items-center gap-2" onSubmit={handleSearch}>
          <input
            className="bg-white text-black px-4 py-2 rounded-full w-full"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for videos, tags, folders ..."
          />
          <button type="submit" className="p-2">
          
          </button>
        </form>
        <DropdownList />
      </section>
    </header>
  )
}

export default Header