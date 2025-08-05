'use client'
import { authClient } from "@/lib/auth-client"
import Image from "next/image"
import Link from "next/link"

const page = () => {
  const handleSignIn = async () => {
    return await authClient.signIn.social({provider: 'google'})
  }
  return (
    <main className="sign-in bg-black">
      <aside className="testimonial bg-black">
        <Link href="/">
        <Image src="/assets/icons/logo.svg" alt="logo" width={32} height={32} />
        <Image src="/assets/images/4.png" alt="logo" width={90} height={32} />
        </Link>
        <div className="description bg-black">
          <section className="bg-black">
            {/* <figure>
              {Array.from({length: 5}).map((_, index) =>(
                <Image src="/assets/icons/star.svg" height={20} width={20} key={index} alt="star" />
              ))} 
            </figure> */}
            <p className="text-white">The best way to empower eachother is through the sharing of knowledge</p>
          
          <article>
           
            <div>
          
              
            </div>
          </article>
          </section>
        </div>
        <p>Empwr  {(new Date()).getFullYear()}</p>
      </aside>
      <aside className="google-sign-in">
        <section>
          <Link href="/" >
          <Image src="/assets/icons/logo.svg" alt="logo" width={43} height={43} />
          
            
          </Link>
          <p>Create and share your first <span>Empwr</span> video in no time</p>
          <button onClick={handleSignIn}>
            <Image src="/assets/icons/google.svg" alt="google" width={22} height={22}/>
            <span>Sign in with Google</span>
          </button>
        </section>

      </aside>
      <div className="overlay"></div>
    </main>
  )
}

export default page