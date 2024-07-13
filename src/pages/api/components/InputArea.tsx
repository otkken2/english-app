import React from 'react'

interface Props {
  inputText: string
  setInputText: (inputText: string) => void
}
export const InputArea = ({ inputText, setInputText }: Props) => {
  return (
    <div className='w-full flex flex-col gap-4 justify-center items-center'>
      <div className='flex gap-4 w-full'>
        <input type="text" value={inputText} className='md:w-[500px] w-full h-10 p-2  bg-inherit border-b-2 border-gray-300' />
        <button onClick={() => setInputText('')} className='bg-red-500 rounded-md p-2 text-sm text-gray-800'>clear</button>
      </div>
    </div>
  )
}