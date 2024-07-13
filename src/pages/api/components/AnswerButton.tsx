import React from 'react'

interface Props {
  handleSubmit: () => void
}
export const AnswerButton = ({ handleSubmit }: Props) => {
  return (
    <button onClick={handleSubmit} className='bg-blue-500 text-white p-2 rounded-md w-full md:w-fit'>解答する</button>
  )
}
