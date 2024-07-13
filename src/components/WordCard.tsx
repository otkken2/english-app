import React from 'react'

interface Props {
  word: string
}
export const WordCard = ({ word }: Props) => {
  return (
    <div className='text-gray-700 bg-gray-300 rounded-md p-2 h-10 cursor-pointer hover:bg-gray-400 text-center'>
      {word}
    </div>
  )
}
