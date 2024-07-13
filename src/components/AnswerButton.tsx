import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleJudge: (answer: string) => void
  answer: string
}
export const AnswerButton = ({ handleJudge, answer,className }: Props) => {
  return (
    <button onClick={() => handleJudge(answer)} className={`bg-blue-500 text-white p-2 rounded-md w-full ${className}`}>解答する</button>
  )
}
