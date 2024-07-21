import supabase from '@/supabaseClient';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';


interface questionFormValue {
  japaneseText: string;
  answer: string;
  words: string[];
}
const Admin = () => {
  const router = useRouter()
  // react hook formのwordsフィールドへ追加する候補の単語を格納する
  const [candidateWord, setCandidateWord] = useState<string>("");
  const [additionalWords, setAdditionalWords] = useState<string[]>([])
  const { control , handleSubmit,watch, setValue, formState: {errors} } = useForm<questionFormValue>(
    {
      defaultValues: {
        japaneseText: '',
        answer: '',
        words: [],
      }
    }
  );

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser()
      if (!data.user?.id){
        router.push('/admin/signin')
      }
      console.log(data,error)
    }
    getUser()
  },[])

  const onSubmit = async (data: any) => {
    console.log("submit data",data)

    const {error} = await supabase.from('questions').insert([data])
    if(error){
      console.log(error)
    }
  }

  const handleRegistAdditionalWord = () => {
    const splittedWords = candidateWord.split(' ')
    setAdditionalWords([...additionalWords, ...splittedWords])
    setValue('words',[...watch('words'),...splittedWords])
    setCandidateWord('')
  }
  console.log("additionalに追加された単語達", additionalWords)

  const handleDeleteWord = (index: number) => {
    setValue('words',watch('words').filter((_,i) => i !== index))
  }

  const handleSplitAnswerToRegistWords = (answerText: string) => {
     const words:string[] = answerText.split(' ')
     const notDuplicatedWords = additionalWords.filter((additionalWords) => !words.includes(additionalWords))
     setValue('words', [...words, ...notDuplicatedWords])
  }
  console.log(errors)
  return (
    <div className='flex flex-col gap-10 w-full px-4  md:w-[740px] bg-gray-800 p-5 rounded-lg'>
      <h1 className='font-bold text-2xl text-center'>問題を新規追加する</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-7 w-full items-center'>
        <div className='flex flex-col w-full'>
          <label>日本文</label>
          <Controller
            control={control}
            name="japaneseText"
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <input {...{onChange, onBlur, value}} className='text-gray-900 p-2 rounded-lg'/>
            )}
          />
        </div>
        <div className='flex w-full flex-col text-gray-900'>
          <label className='text-white'>正答</label>
          <div className='flex gap-4'>
            <Controller
              control={control}
              name="answer"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <input {...{onChange, onBlur, value}} className='text-gray-900 p-2 rounded-lg flex-1'/>
              )}
            />
            <button type='button' className='bg-blue-500 text-white px-4 rounded-full' onClick={() => handleSplitAnswerToRegistWords(watch("answer"))}>単語を選択肢に追加</button>
          </div>
        </div>
        <div className='w-full flex flex-col gap-2'>
          <div>
            <label>追加で単語を登録</label>
            <div className='flex gap-4'>
              <input 
                type="text" 
                value={candidateWord} 
                onChange={(e) => setCandidateWord(e.target.value)} 
                className='text-gray-900 p-2 rounded-lg flex-1'
              />
              <button className='rounded-full bg-blue-500 px-4' onClick={handleRegistAdditionalWord}>登録</button>
            </div>
          </div>
          <div className='flex'>
            <label className='mr-5'>
              単語:
            </label>
            <p>{watch('words').map((word,index)=>(
              <span key={index} className='cursor-pointer hover:text-blue-500 hover:font-bold' onClick={() => handleDeleteWord(index)}> {word} {watch('words').length > 0 ? "," : ""}</span>
            ))}</p>
          </div>
          
        </div>

        <button type="submit" className='bg-blue-500 rounded-full p-2'>問題文をデータベースに追加する</button>
      </form>
    </div>
  )
}

export default Admin;