import { useContext } from "react"
import { QuizContext } from "../helpers/Context"

const Quiz = () => {
    const {gameState, setGameState} = useContext(QuizContext)
    
  return (
    <div>
      <button onClick={() => {setGameState("endScreen")}}>Submit Quiz</button>
    </div>
  )
}

export default Quiz
