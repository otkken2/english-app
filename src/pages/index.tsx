import WordsArea from '../components/WordsArea'
import { InputArea } from '../components/InputArea'
import { AnswerButton } from '../components/AnswerButton'
import { EraseButtons } from '@/components/EraseButtons'
import { useQuestion } from '@/hooks/useQuestion'

const questions = [
  {
    japaneseText: 'これはペンです',
    words: ['this', 'pen', 'a', 'is'],
    answer: 'this is a pen',
  },
  {
    japaneseText: '彼はトムですか？',
    words: ['is', 'he', 'Tom', '?'],
    answer: 'is he Tom ?',
  }
]
const Home = () => {
  const {handleSelectWord, handleJudge, handleUndo, setInputText, inputText, questionIndex, setQuestionIndex} = useQuestion()

  if(!questions[questionIndex]) return (
  <div className='flex flex-col items-center gap-10'>
    <h1 className='text-3xl font-bold'>全問正解！</h1>
    <button className='bg-blue-500 text-white p-2 rounded-md w-[200px]' onClick={() => setQuestionIndex(0)}>最初の問題に戻る</button>
  </div>
  )
  return (
    <div className='flex flex-col items-center md:max-w-[640px] max-w-screen w-full p-10 gap-10'>
      <h1 className='text-4xl font-bold'>English App</h1>
      <h2>問{questionIndex + 1}：{questions[questionIndex].japaneseText}</h2>
      <InputArea inputText={inputText} setInputText={setInputText}/>
      <WordsArea words={questions[questionIndex].words} handleSelectWord={handleSelectWord} />
      <EraseButtons setInputText={setInputText} handleUndo={handleUndo} />
      <AnswerButton handleJudge={handleJudge} className='' answer={questions[questionIndex].answer}/>
    </div>
  )
}

export default Home

