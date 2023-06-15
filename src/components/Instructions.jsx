import { useContext } from "react"
import { QuizContext } from "../helpers/Context"

const Instructions = () => {
    const { setGameState } = useContext(QuizContext)

    const moveOn = () => {
        setGameState("quiz")
    }

  return (
    <div className="flex flex-col justify-between items-center h-[30rem] mt-12">
      <p className="text-black text-xl">Please carefully read before you answer each question. Once you answer a question and move to the next, you cannot go back.</p>

      <button className="border-2 border-black px-6 py-1.5 rounded-md hover:bg-[#ffffff2c]" onClick={moveOn}>continue</button>
    </div>
  )
}

export default Instructions
