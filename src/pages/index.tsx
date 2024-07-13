import React, { useState } from 'react'
import { WordCard } from './api/components/WordCard'

const words = ['this', 'pen', 'a', 'is']
const answer = 'this is a pen'
const Home = () => {
  const [inputText, setInputText] = useState('')
  const handleSelectWord = (word: string) => {
    const newText = `${inputText} ${word}` 
    setInputText(newText.trim())
  }
  const handleSubmit = () => {
    console.log(inputText)
    console.log(answer)
    if (inputText === answer) {
      alert(`正解！`)
    } else {
      alert(`残念！: ${answer}`)
    }
    setInputText('')
  }
  return (
    <div className='flex flex-col items-center'>
      <div className='w-[640px] h-1/2 flex flex-col gap-4 justify-center items-center p-10'>
        <h1 className='text-4xl font-bold'>English App</h1>
        <div className='flex gap-4'>
          <input type="text" value={inputText} className='w-[500px] h-10 p-2  bg-inherit border-b-2 border-gray-300' />
          <button onClick={() => setInputText('')} className='bg-red-500 rounded-md p-2 text-sm text-gray-800'>clear</button>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        {words.map((word) => (
          <div onClick={() => handleSelectWord(word)}>
            <WordCard word={word} />
          </div>
        ))}
      </div>
      <button onClick={handleSubmit} className='bg-blue-500 text-white p-2 rounded-md'>解答する</button>
    </div>
  )
}

export default Home

