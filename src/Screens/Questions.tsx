// import React from 'react'

import { useEffect, useState } from "react"
import Card from "../components/Card"

interface Ques {
        category: string;
        type: string;
        difficulty: string;
        question: string;
        correct_answer: string;
        incorrect_answers:string[]


    
}

interface Props {
    setshowPage: React.Dispatch<React.SetStateAction<string>>;
    setchoices: React.Dispatch<React.SetStateAction<string[]>>;
    choices: string[];
}

const Questions = ({setshowPage, setchoices, choices}:Props) => {
    
    

    const [qnum, setqnum] = useState<number>(0)
    const [questions, setquestions] = useState<Ques[]>([])

    const getQuestions = async () => {
        try {
            const response = await fetch('https://opentdb.com/api.php?amount=15&difficulty=hard&type=boolean')
            if (response.status === 200) {
                const data = await response.json()
                setquestions(data.results)
                console.log(data.results)
                localStorage.setItem('questions', JSON.stringify(data.results))

            }
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        getQuestions()

    }, [])
    
  return (
    <div className="text-3xl">
        {questions.length > 0 && <Card
            question={questions[qnum]}
            setchoices={setchoices}
            setqnum={setqnum}
            choices={choices}
            qnum={qnum}
            setshowPage={setshowPage}
        />}
    </div>
  )
}

export default Questions