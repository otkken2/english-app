import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleSubmit: (answer: string) => void
  answer: string
}
export const AnswerButton = ({ handleSubmit, answer,className }: Props) => {
  return (
    <button onClick={() => handleSubmit(answer)} className={`bg-blue-500 text-white p-2 rounded-md w-full ${className}`}>解答する</button>
  )
}
