import React from 'react'

interface Props {
  setInputText: (text: string) => void;
  handleUndo: () => void;
}
export const EraseButtons = ({ setInputText, handleUndo }: Props) => {
  return (
    <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 items-center w-full'>
        <button onClick={() => setInputText('')} className='bg-red-500 rounded-md p-2 text-sm text-gray-800 w-full'>clear</button>
        <button onClick={() => handleUndo()} className='bg-yellow-500 rounded-md p-2 text-sm text-gray-800 w-full'>undo</button>
      </div>
  )
}
