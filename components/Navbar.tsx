'use client'
import { authClient } from "@/lib/auth-client"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

const user = {}


const Navbar = () => {
    const router = useRouter()
    const {data: session} = authClient.useSession() 
    const user = session?.user
  return (
    <header className="navbar bg-black">
        <nav>
        <Link href='/'>
            <Image src="/assets/icons/logo.svg" width={32} height={32} alt="logo"/>
            <Image src="/assets/images/4.png" alt="logo" width={90} height={32} />
        </Link>

        {user && (
            <figure>
                <button onClick={() =>router.push(`/profile/${user?.id}`)}>
                    <Image src={user.image || ''} width={36} height={36} className="rounded-full aspect-square" alt="avatar"/>
                </button>
                <button className="cursor-pointer ">
                    <Image src="/assets/icons/logout-new.png" alt="logout" height={31} width={31} className="rotate-180" />

                </button>
            </figure>
  )}


        </nav>
    </header>
  )
}

export default Navbar