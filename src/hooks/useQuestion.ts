import { useEffect, useState } from 'react'
import { atom, useAtom } from 'jotai'
import supabase from '@/supabaseClient'

// const questions = [
//   {
//     japaneseText: 'これはペンです',
//     words: ["this", "pen", "a", "is","it","the"],
//     answer: 'This is a pen',
//   },
//   {
//     japaneseText: '彼はトムですか？',
//     words: ["he", "Tom", "is", "?","are","am"],
//     answer: 'Is he Tom ?',
//   }
// ]

interface Question {
  japaneseText: string
  words: string[]
  answer: string
}

const questionIndexAtom = atom(0)
export const useQuestion = () => {
  const [questionIndex, setQuestionIndex] = useAtom(questionIndexAtom)
  const [inputText, setInputText] = useState('')
  const [questions, setQuestions] = useState<Question[]>([])

  useEffect(()=>{
    const fetchQuestions = async () => {
      const {data , error} = await supabase.from('questions').select().order('id', { ascending: true });

      if(error)alert(error)
      if(!data)return
      setQuestions(data as Question[])
    }
    fetchQuestions()
  },[])
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

  console.log("questions",questions)
  console.log("questionIndex",questionIndex)
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

