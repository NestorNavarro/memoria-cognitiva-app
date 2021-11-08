import InfoTable from "./InfoTable";

export const InfoTableContainer = ({
    auth: {
        cardsTest,
        wordsTest,
        figuresTest,
        numbersTest,
        phrasesTest,
    },
}) => {
    const createData = (name, average, bestScore, type) => {
        return { name, average, bestScore, type};
    }
      
    const rows = [
        createData('Emparejamiento de cartas', cardsTest.average.toFixed(1), cardsTest.best, "cards"),
        createData('Recuerda los números', numbersTest.average.toFixed(1), numbersTest.best, "numbers"),
        createData('Recuerda la secuencia de las figuras', figuresTest.average.toFixed(1), figuresTest.best, "figures"),
        createData('Recuerda las palabras', wordsTest.average.toFixed(1), wordsTest.best, "words"),
        createData('Completa la frase', phrasesTest.average.toFixed(1), phrasesTest.best, "phrases"),
    ];
    return (
        <InfoTable 
            delegations={{
                rows,
            }}
        />
    );
}

export default InfoTableContainer;