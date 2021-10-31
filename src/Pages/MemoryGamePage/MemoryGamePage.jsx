// Our Importations
import GameOver from "../../Components/GameOver";
import DashBoardActivity from "../../Components/DashBoardActivity";
import Board from "../../Components/Board/Board";
import "./styles.css";


const testName     = "MEMORAMA";
const instructions = "MEMORYGAME";

const MemoryGamePage = ({
    delegations: {
        attemps,
        animating,
        haveCards,
        startGame,
        setStartGame,
        handleMemoClick,
        shuffeldMemoBlocks,
    },
}) => {
    return (
        <>
            {!startGame ? (
                <DashBoardActivity
                    activity={testName}
                    instructions={instructions}
                    setStartGame={setStartGame}
                />
            ) : haveCards ? (
                <>
                    <h1 className="title">Errores : {attemps - 1}</h1>
                    <Board
                        memoBlocks={shuffeldMemoBlocks}
                        animating={animating}
                        handleMemoClick={handleMemoClick}
                    />
                </>
            ) : (
                <GameOver score={attemps} route="/dashboard/memory_game" />
            )}
        </>
    );
};
export default MemoryGamePage;
