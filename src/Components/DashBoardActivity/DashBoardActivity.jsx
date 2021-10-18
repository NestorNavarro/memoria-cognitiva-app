import { Button } from '@mui/material';

import "./styles.css";

const DashBoardActivity = ({ 
    activity = "",
    instructions = "",
    setStartGame=()=>{},
}) => {
    return (
        <>
            <div className="container">
                <div className="card card-content">
                    <h1>{activity}</h1>
                    {instructions === "NUMBER" &&                    
                        <h5 className="instructions">
                        Mmoriza el número que aparece en pantalla. Después de 5 segunso el número desaparce y debes<br/>
                        de escribirlo en la caja de texto.<br/><br/>
                        Cada ronda que pasa se le  aumentara un digito al número que aparece en pantalla.<br/><br/>
                        Al ingresar mal en número el juego se termina.<br/>
                        </h5>
                    }
                    {instructions === "SEQUENCE" &&                    
                        <h5 className="instructions">
                        Memoriza la secuencia en la que se ilumina cada figura, después pulsa las figuras en el orden en el que se iluminaron.<br/><br/>
                        En cada ronda la secuencia se volvera más larga.<br/><br/>
                        Al equivocarse en el orden de la secuencia el juego se termina.<br/>
                        </h5>
                    }
                    {instructions === "WORDS" &&
                        <h5 className="instructions">
                            Memoriza las palabras que aparecerán en pantalla. 
                            Después selecciona si la palabra es una nueva palabra o es una palabra que ya había aparecido previamente.<br/><br/>
                            Cada nueva palabra aumenta la dificultad porque el conjunto de palabras a recordar se vuelve más grande.<br/><br/>
                            El juego termina cuando no se elige la opción correcta.
                        </h5>
                    }
                    <Button
                        className="mt-2"
                        variant="contained"
                        onClick={() => setStartGame(true)}
                    >
                    Comenzar
                    </Button>
                </div> 
            </div>
        </>
    );
}
 export default DashBoardActivity;