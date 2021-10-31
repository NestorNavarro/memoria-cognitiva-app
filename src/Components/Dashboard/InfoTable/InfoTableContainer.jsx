import InfoTable from "./InfoTable";

export const InfoTableContainer = ({
    auth: {
        cardTest,
        wordsTest,
        figureTest,
        numberTest,
        phrasesTest,
    },
}) => {
    const createData = (name, average, bestScore) => {
        return { name, average, bestScore};
    }
      
    const rows = [
        createData('Emparejamiento de cartas', cardTest.average.toFixed(1), cardTest.best),
        createData('Recuerda los números', numberTest.average.toFixed(1), numberTest.best),
        createData('Recuerda la secuencia de las figuras', figureTest.average.toFixed(1), figureTest.best),
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