import React from 'react'
import { WordCard } from './WordCard'

interface Props {
  words: string[]
  handleSelectWord: (word: string) => void
}

export const WordsArea = ({ words, handleSelectWord }: Props) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full'>
        {words?.map((word, index) => (
          <div key={index} onClick={() => handleSelectWord(word)} className='w-full'>
            <WordCard word={word} />
          </div>
        ))}
      </div>
  )
}

export default WordsArea