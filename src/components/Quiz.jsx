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
    <div>
        <h1>{Questions[currQuestion].prompt}</h1>
        <div>
            <button className="text-start" onClick={() => {setOptionChosen("A")}}>A. {Questions[currQuestion].optionA}</button>
            <button className="text-start" onClick={() => {setOptionChosen("B")}}>B. {Questions[currQuestion].optionB}</button>
            <button className="text-start" onClick={() => {setOptionChosen("C")}}>C. {Questions[currQuestion].optionC}</button>
            <button className="text-start" onClick={() => {setOptionChosen("D")}}>D. {Questions[currQuestion].optionD}</button>
        </div>

        {currQuestion === Questions.length - 1 && <button onClick={finishQuiz}>Submit</button>}
      <button onClick={nextQuestion}>Next Question</button>
    </div>
  )
}

export default Quiz
