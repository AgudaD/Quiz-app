import { useContext } from "react"
import { QuizContext } from "../helpers/Context"
import illustration from '../assets/Customer Survey-rafiki.svg'

const MainMenu = () => {
    const {gameState, setGameState} = useContext(QuizContext)
  return (
    <div className="h-[40rem] flex flex-col justify-center items-center">
        <img src={illustration} alt="" className=" w-[30rem] " />
        <button className="border-2 border-black px-6 py-1.5 rounded-md hover:bg-[#ffffff2c]" onClick={() => {setGameState
        ("quiz")}}>Start Quiz</button>
    </div>
  )
}

export default MainMenu
