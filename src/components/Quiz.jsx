import { useState, useContext } from "react"
import { Questions } from "../helpers/QuestionBank"
import { QuizContext } from "../helpers/Context"

const Quiz = () => {
    const { score, setScore, setGameState } = useContext(QuizContext)
    const [currQuestion, setCurrQuestion] = useState(0) 
    const [optionChosen, setOptionChosen] = useState("")


    const nextQuestion = () => {
        if(Questions[currQuestion].answer === optionChosen){
            setScore(score + 1)
        } 
        setCurrQuestion(currQuestion + 1)
    }

    const finishQuiz = () => {
        if(Questions[currQuestion].answer === optionChosen){
            setScore(score + 1)
        }
        setGameState("endScreen")
    }

  return (
    <div className="h-[40rem] flex flex-col justify-center items-center">
        <h1 className="text-3xl mb-6">{Questions[currQuestion].prompt}</h1>
        <div className="flex flex-col justify-center items-center space-y-4 mb-12 text-xl">
            <button className="text-start border border-black px-3 py-1.5 rounded-md w-[10rem] hover:bg-[#ffffff2c]" onClick={() => {setOptionChosen("A")}}>A. {Questions[currQuestion].optionA}</button>
            <button className="text-start border border-black px-3 py-1.5 rounded-md w-[10rem] hover:bg-[#ffffff2c]" onClick={() => {setOptionChosen("B")}}>B. {Questions[currQuestion].optionB}</button>
            <button className="text-start border border-black px-3 py-1.5 rounded-md w-[10rem] hover:bg-[#ffffff2c]" onClick={() => {setOptionChosen("C")}}>C. {Questions[currQuestion].optionC}</button>
            <button className="text-start border border-black px-3 py-1.5 rounded-md w-[10rem] hover:bg-[#ffffff2c]" onClick={() => {setOptionChosen("D")}}>D. {Questions[currQuestion].optionD}</button>
        </div>

        <div className="space-x-6">
            {currQuestion === Questions.length - 1 && <button className="border-2 border-black px-6 py-1.5 rounded-md hover:bg-[#ffffff2c]" onClick={finishQuiz}>Submit</button>}
                  <button className="border-2 border-black px-6 py-1.5 rounded-md hover:bg-[#ffffff2c]" onClick={nextQuestion}>Next Question</button>
        </div>
    </div>
  )
}

export default Quiz
