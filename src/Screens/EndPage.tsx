
import { useEffect, useState } from "react";

interface Props {
  setshowPage: React.Dispatch<React.SetStateAction<string>>;
  choices:string[]
}

interface Ques {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers:string[]
}

const EndPage = ({setshowPage, choices}: Props) => {

  const [score, setScore] = useState<number>(0)
  const [name, setName] = useState<string>('')

  const calcScore = () => {
    let data = localStorage.getItem('questions')
    

    let questions:Ques[];

    if (typeof(data) === 'string'){questions = JSON.parse(data)}

    let score = 0
    choices.forEach((choice, index) => {
      if (choice === questions[index].correct_answer) {
        score += 1
      }
      
    })
    return score
  }

  useEffect(() => {
    let nm = localStorage.getItem('name')
    if (typeof(nm) === 'string') {setName(nm)}
    const fscore = calcScore()
    setScore(fscore)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <div className="border-2 rounded-2xl w-[650px] h-72 bg-white flex flex-row">
      <div className="flex-1">
        <h3>{`You've come to the end of the quiz, ${name}`}</h3>
        <h3>You scored {score}/15</h3>
        <button onClick={() => setshowPage('Start')} className="bg-white text-black w-32 p-2 rounded-lg ring-2 ring-blue-300 hover:bg-[#272c55] hover:ring-0 hover:text-white text-xl">Restart</button>

      </div>
    </div>
  )
}

export default EndPage