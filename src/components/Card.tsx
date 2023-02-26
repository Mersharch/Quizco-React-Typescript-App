// import {useEffect} from 'react'


interface Props {
  question: {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers:string[]
  },
  setchoices: React.Dispatch<React.SetStateAction<string[]>>,
  setqnum: React.Dispatch<React.SetStateAction<number>>,
  choices: string[];
  qnum: number;
  setshowPage: React.Dispatch<React.SetStateAction<string>>

}

const Card = ({question, setchoices, setqnum, choices, qnum, setshowPage}:Props) => {

  const handleSelection = (val:string) => {
    // HANDLE SELECTION OF ANSWER
      setchoices([...choices, val])
      if (qnum < 14){
        setqnum(prev => prev + 1)
      }
      else {
        // localStorage.setItem('choices', JSON.stringify(choices))
        setshowPage('End') 
        // alert('end')
      }
      
      
      
    
  }

 

 
  return (
    <div className="border-2 rounded-full w-[650px] h-72">
      <div className="w-full h-12 px-4 bg-[#0f1229] flex flex-row items-center justify-between">
        <h3 className="text-lg text-white">Category: {question.category}</h3>
        <h3 className="text-lg text-slate-400">Question {qnum+1}/15</h3>
      </div>
      <div className="bg-white h-full p-6 flex flex-col gap-14 items-center">
        <h2 className="font-semibold text-center text-2xl">{question.question}</h2>
        <div className="flex flex-row gap-40">
          <button onClick={() => handleSelection('True')} className="w-24 h-10 text-xl font-semibold text-white bg-sky-500 ring-2 ring-slate-500 rounded-xl hover:bg-gray-500">True</button>
          <button onClick={() => handleSelection('False')} className="w-24 h-10 text-xl font-semibold text-white bg-sky-500 ring-2 ring-slate-500 rounded-xl hover:bg-gray-500">False</button>
        </div>
      </div>
    </div>
  )
}

export default Card