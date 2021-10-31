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
                    {instructions === "MEMORYGAME" &&
                        <h5 className="instructions">
                            Se muestran una serie de cartas las cuales están asociadas a una pareja. Se debera emparejar cada carta con su repectiva pareja.<br/><br/>
                            El juego termina cuando se termine de emparajar todas las cartas.
                        </h5>
                    }
                    {instructions === "PHRASE" &&
                        <h5 className="instructions">
                            Se muestra una frase común con dos espacios en blanco los cuales debes ingresar en el cuadro de texto correspondiente para completar la frase.<br/><br/>
                            Existen 20 frases para completar.<br/><br/>
                            El juego termina cuando completas mal la frase o adivinas las 20 frases.
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