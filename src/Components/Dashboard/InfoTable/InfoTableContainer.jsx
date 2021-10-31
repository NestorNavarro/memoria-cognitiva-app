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
    const createData = (name, average, bestScore) => {
        return { name, average, bestScore};
    }
      
    const rows = [
        createData('Emparejamiento de cartas', cardsTest.average.toFixed(1), cardsTest.best),
        createData('Recuerda los números', numbersTest.average.toFixed(1), numbersTest.best),
        createData('Recuerda la secuencia de las figuras', figuresTest.average.toFixed(1), figuresTest.best),
        createData('Recuerda las palabras', wordsTest.average.toFixed(1), wordsTest.best),
        createData('Completa la frase', phrasesTest.average.toFixed(1), phrasesTest.best),
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