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
    if (inputText === answer) {
      alert(`正解！`)
    } else {
      alert(`残念！: ${answer}`)
    }
    setInputText('')
  }
  return (
    <div className='flex flex-col items-center md:max-w-[640px] max-w-screen w-full p-10 gap-10'>
      <div className='w-full h-1/2 flex flex-col gap-4 justify-center items-center'>
        <h1 className='text-4xl font-bold'>English App</h1>
        <div className='flex gap-4 w-full'>
          <input type="text" value={inputText} className='md:w-[500px] w-full h-10 p-2  bg-inherit border-b-2 border-gray-300' />
          <button onClick={() => setInputText('')} className='bg-red-500 rounded-md p-2 text-sm text-gray-800'>clear</button>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full'>
        {words.map((word, index) => (
          <div key={index} onClick={() => handleSelectWord(word)} className='w-full'>
            <WordCard word={word} />
          </div>
        ))}
      </div>
      <button onClick={handleSubmit} className='bg-blue-500 text-white p-2 rounded-md w-full md:w-fit'>解答する</button>
    </div>
  )
}

export default Home

