import React, { useState } from 'react'
import { WordCard } from '../components/WordCard'
import WordsArea from '../components/WordsArea'
import { InputArea } from '../components/InputArea'
import { AnswerButton } from '../components/AnswerButton'
import { EraseButtons } from '@/components/EraseButtons'
import { useWords } from '@/hooks/useWords'

const words = ['this', 'pen', 'a', 'is']
const answer = 'this is a pen'
const Home = () => {
  const {handleSelectWord, handleSubmit, handleUndo, setInputText, inputText} = useWords()

  return (
    <div className='flex flex-col items-center md:max-w-[640px] max-w-screen w-full p-10 gap-10'>
      <h1 className='text-4xl font-bold'>English App</h1>
      <h2>これはペンです</h2>
      <InputArea inputText={inputText} setInputText={setInputText}/>
      <WordsArea words={words} handleSelectWord={handleSelectWord} />
      <EraseButtons setInputText={setInputText} handleUndo={handleUndo} />
      <AnswerButton handleSubmit={handleSubmit} className='' answer={answer}/>
    </div>
  )
}

export default Home

