import { useContext } from "react";
import { QuizContext } from "../helpers/Context";
import { Questions } from "../helpers/QuestionBank";

const EndScreen = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className="flex h-[40rem] flex-col items-center justify-center">
      <h1 className="mb-4 text-2xl">Done!!</h1>
      <h3 className="mb-16 text-xl">
        {score}/{Questions.length}
      </h3>

      <button className="rounded-md border-2 border-black px-6 py-1.5 hover:bg-[#ffffff2c]" onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default EndScreen;
