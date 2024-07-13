import React from 'react'

interface Props {
  inputText: string
  setInputText: (inputText: string) => void
}
export const InputArea = ({ inputText }: Props) => {
  return (
    <div className='w-full flex flex-col gap-4 justify-center items-center'>
        <input type="text" value={inputText} className='w-full h-10 p-2 text-lg bg-inherit border-b-2 border-gray-300' />
    </div>
  )
}