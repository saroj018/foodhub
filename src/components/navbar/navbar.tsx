"use client"
import Link from 'next/link'
import { useSession, signOut, signIn } from "next-auth/react"
import Image from 'next/image'

import {AiOutlineShoppingCart} from 'react-icons/ai'
const Navbar = () => {
  const { data: session, status } = useSession()


  return (
    <nav className='flex justify-between items-center shadow-lg p-3'>
      <div><Link href='/'><span>FoodHub</span></Link></div>
      <div className='max-w-md w-full mx-1'>
        <input type="text"
          className='px-4 py-2 w-full rounded-3xl bg-gray-100 border-2 border-black '
          placeholder='Search Products' />
      </div>
      <div>
        {
          status === "authenticated" ? (
            <div className='flex justify-center items-center gap-3'>
              <div className='cursor-pointer text-3xl ml-1 relative'>
              <AiOutlineShoppingCart />
              </div>
              <Image src={session?.user?.image || ""} className='w-7 h-7 rounded-full' alt={session.user?.name || ""} height={30} width={30} />
              {/* <span className='text-sm'>{session?.user?.name || ""}</span> */}
              <button onClick={() => signOut()} className='bg-red-500 px-4 rounded-3xl text-white py-1 tracking-wider'>Sign Out</button>
            </div>
          ) : (
            <div className='flex justify-center items-center gap-3'>
              <button className='mr-2 rounded-3xl px-4 py-1 tracking-widest border-2 bg-red-500 text-white' onClick={() => signIn("github", { redirect: true, callbackUrl: process.env.NEXT_PUBLIC_BASE_URL })}>Sign In</button>
              {/* <button className='bg-red-500 px-4 rounded-3xl text-white py-1.5 tracking-wider'><Link href='/signup'>Sign Up</Link></button> */}
            </div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar