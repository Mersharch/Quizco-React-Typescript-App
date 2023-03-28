import { useEffect, useRef } from "react"
interface Props {
    setshowPage: React.Dispatch<React.SetStateAction<string>>
}

const StartPage = ({setshowPage}:Props) => {
    const nameRef = useRef<HTMLInputElement>(null)

    // FUNCTION TO HANDLE BUTTON CLICK AND SWITCH SCREENS TO QUESTIONS SCREEN
    const handleStart = (e:React.MouseEvent) => {
        e.preventDefault()
        if(nameRef.current?.value){
            localStorage.setItem('name', nameRef.current.value)
            setshowPage('Questions')
        } else {
            alert('Please enter your name to begin')
        }
    }


    useEffect(() =>{
        localStorage.removeItem('choices')
        localStorage.removeItem('questions')
        localStorage.setItem('choices',JSON.stringify([]))
    },[])

  return (
    <div className="flex flex-col gap-8 px-5 py-10 items-center bg-white border-2 border-slate-600 w-[50%] rounded-lg">
        <div className="flex flex-col items-center gap-2">
            <h2 className="text-4xl text-slate-800 font-bold">Welcome To <span className="text-[#272c55]">Quizco</span> </h2>
            <p className="text-2xl text-blue-300">Your No.1 trivia destination</p>
        </div>

        <input className="w-[80%] h-14 bg-gray-100 outline-none border-2 border-gray-400 rounded-xl placeholder:text-gray-700 placeholder:text-xl text-xl px-5" placeholder="Please enter your name to begin" type="text" name="name" ref={nameRef} />

        <button onClick={(e) => handleStart(e)} className="bg-white text-black w-32 p-2 rounded-lg ring-2 ring-blue-300 hover:bg-[#272c55] hover:ring-0 hover:text-white text-xl">Start Quiz</button>
    </div>
  )
}

export default StartPage