import { useState } from 'react'
import { atom, useAtom } from 'jotai'

const questionIndexAtom = atom(0)
export const useQuestion = () => {
  const [questionIndex, setQuestionIndex] = useAtom(questionIndexAtom)
  const [inputText, setInputText] = useState('')

  const handleSelectWord = (word: string) => {
    const newText = `${inputText} ${word}` 
    setInputText(newText.trim())
  }
  const handleJudge = (answer: string) => {
    if (inputText === answer) {
      alert(`正解！`)
      setQuestionIndex((prev) => prev + 1)
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

  return {
    handleSelectWord, 
    handleJudge, 
    handleUndo, 
    inputText, 
    setInputText, 
    questionIndex, 
    setQuestionIndex
  }
}

