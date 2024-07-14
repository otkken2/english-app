import { useState } from 'react'
import { atom, useAtom } from 'jotai'

const questions = [
  {
    japaneseText: 'これはペンです',
    words: ['this', 'pen', 'a', 'is','it','the'],
    answer: 'This is a pen',
  },
  {
    japaneseText: '彼はトムですか？',
    words: ['he', 'Tom', 'is', '?','are','am'],
    answer: 'Is he Tom ?',
  }
]

const questionIndexAtom = atom(0)
export const useQuestion = () => {
  const [questionIndex, setQuestionIndex] = useAtom(questionIndexAtom)
  const [inputText, setInputText] = useState('')

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleSelectWord = (word: string) => {
    if(!inputText){
      const newText = capitalizeFirstLetter(word)
      setInputText(newText)
    } else {
      const newText = `${inputText} ${word}` 
      setInputText(newText.trim())
    }
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

  const handleSentenceEnding = () => {
    if(!inputText) return ""
    if(inputText.includes("?")){
      return ""
    } else {
      return "."
    }
  }

  const currentQuestionNumber = questionIndex + 1
  const currentQuestionJapaneseText = questions[questionIndex]?.japaneseText
  const currentQuestionWords = questions[questionIndex]?.words
  const currentQuestionAnswer = questions[questionIndex]?.answer

  return {
    handleSelectWord, 
    handleJudge, 
    handleUndo, 
    inputText, 
    setInputText, 
    questionIndex, 
    setQuestionIndex,
    handleSentenceEnding,
    currentQuestionNumber,
    currentQuestionJapaneseText,
    currentQuestionWords,
    currentQuestionAnswer
  }
}

