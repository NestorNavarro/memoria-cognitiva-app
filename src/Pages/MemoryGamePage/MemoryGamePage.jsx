import { Button }   from "@mui/material";

// Our Importations
import GameOver             from "../../Components/GameOver";
import DashBoardActivity    from "../../Components/DashBoardActivity";
import Board                from "../../Components/Board/Board";
import "./styles.css"

const testName    = "Memorama"
const instructions = "Relaciona las imágenes."

const MemoryGamePage = ({
    delegations:{
        attemps,
        animating,
        haveCards,
        startGame,
        setStartGame,
        handleMemoClick,
        shuffeldMemoBlocks
    }
}) => {
    return (
        <>
            {!startGame ?
            <DashBoardActivity activity={testName}  instructions={instructions} setStartGame={setStartGame}/>
            :(haveCards ?
                    <>
                        <Board memoBlocks={shuffeldMemoBlocks} animating={animating} handleMemoClick={handleMemoClick}/>
                        <div className = "Title">
                            Errores : {attemps - 1}
                        </div>
                    </>
                    :
                    <GameOver
                    score = {attemps}
                    route = "/dashboard/memory_game" />
                )
            }
        </>
    );
}
export default MemoryGamePage;
