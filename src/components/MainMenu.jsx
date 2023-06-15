import { useContext } from "react";
import { QuizContext } from "../helpers/Context";
import illustration from "../assets/Customer Survey-rafiki.svg";

const MainMenu = () => {
  const { setGameState } = useContext(QuizContext);
  return (
    <div className="flex h-[40rem] flex-col items-center justify-center">
      <img src={illustration} alt="" className=" w-[30rem] " />
      <button
        className="rounded-md border-2 border-black px-6 py-1.5 hover:bg-[#ffffff2c]"
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Begin
      </button>
    </div>
  );
};

export default MainMenu;
