import supabase from '@/supabaseClient'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const signup = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const router = useRouter()

  const signup = async (email: string, password: string) => {
    const { data: {user,session}, error } = await supabase.auth.signInWithPassword({
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
    <div className='flex flex-col items-center justify-center gap-4 bg-gray-800 md:w-[720px] py-10 px-4 rounded-lg text-black'>
      <input type="email" onChange={(e) => setEmail(e.target.value)} className='p-2 rounded-md w-full' />
      <input type="password" onChange={(e) => setPassword(e.target.value)} className='p-2 rounded-md w-full' />
      <button onClick={() => signup(email, password)} className='bg-blue-500 text-white px-4 rounded-full w-full'>SignIn</button>
    </div>
  )
}

export default signup