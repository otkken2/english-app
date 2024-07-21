import supabase from '@/supabaseClient'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const signup = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const router = useRouter()

  const signup = async (email: string, password: string) => {
    const { data: {user,session}, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
    if(error){
      console.log(error)
    }else{
      console.log(user,session)
      router.push('/admin')
    }
  }
  return (
    <div className='flex flex-col items-center gap-8 bg-gray-800 w-full md:w-[720px] pt-10 pb-5 px-4 rounded-lg text-black md:mx-0 mx-4'>
      <div className='flex flex-col items-center justify-center gap-12 w-full'>
        <div className='flex flex-col gap-8 w-full'>
          <input type="email" onChange={(e) => setEmail(e.target.value)} className='p-2 rounded-md w-full' />
          <input type="password" onChange={(e) => setPassword(e.target.value)} className='p-2 rounded-md w-full' />
        </div>
        <button onClick={() => signup(email, password)} className='bg-blue-500 p-2 text-white px-4 rounded-full w-full'>Signup</button>
      </div>
      <div className='text-white'>
        すでにアカウントをお持ちの方は
        <Link href="/admin/signin">
          <span className='text-blue-500'>Signin</span>へ
        </Link>
      </div>
    </div>
  )
}

export default signup