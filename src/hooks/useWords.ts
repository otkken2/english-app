import { useState } from 'react'

export const useWords = () => {
  const [inputText, setInputText] = useState('')

  const handleSelectWord = (word: string) => {
    const newText = `${inputText} ${word}` 
    setInputText(newText.trim())
  }
  const handleSubmit = (answer: string) => {
    if (inputText === answer) {
      alert(`正解！`)
    } else {
      alert(`残念！: ${answer}`)
    }
    setInputText('')
  }

  const handleUndo = () => {
    const wordsArray = inputText.split(' ');
    wordsArray.pop();
    const newText = wordsArray.join(' ');
    setInputText(newText)
  }

  return {handleSelectWord, handleSubmit, handleUndo, inputText, setInputText}
}

