import React, { useState } from 'react'
import { WordCard } from './api/components/WordCard'
import WordsArea from './api/components/WordsArea'
import { InputArea } from './api/components/InputArea'
import { AnswerButton } from './api/components/AnswerButton'

const words = ['this', 'pen', 'a', 'is']
const answer = 'this is a pen'
const Home = () => {
  const [inputText, setInputText] = useState('')
  const handleSelectWord = (word: string) => {
    const newText = `${inputText} ${word}` 
    setInputText(newText.trim())
  }
  const handleSubmit = () => {
    if (inputText === answer) {
      alert(`正解！`)
    } else {
      alert(`残念！: ${answer}`)
    }
    setInputText('')
  }
  return (
    <div className='flex flex-col items-center md:max-w-[640px] max-w-screen w-full p-10 gap-10'>
      <h1 className='text-4xl font-bold'>English App</h1>
      <InputArea inputText={inputText} setInputText={setInputText} />
      <WordsArea words={words} handleSelectWord={handleSelectWord} />
      <AnswerButton handleSubmit={handleSubmit} />
    </div>
  )
}

export default Home

