import { useState, useContext } from "react";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import { QuizContext } from "./helpers/Context";

function App() {
  const [gameState, setGameState] = useState("menu");

  return (
    <div className="text-center font-grotesk font-semibold">
      <h2 className="text-2xl">Quiz App</h2>

      <QuizContext.Provider value={{ gameState, setGameState }}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
