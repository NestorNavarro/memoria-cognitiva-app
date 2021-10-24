import InfoTable from "./InfoTable";

export const InfoTableContainer = ({
    test: {
        cartsTest,
        numbersTest,
        shapesTest,
        wordsTest,
        phrasesTest,
    },
}) => {
    const createData = (name, average, bestScore) => {
        return { name, average, bestScore};
    }
      
    const rows = [
        createData('Emparejamiento de cartas', cartsTest.average, cartsTest.bestScore),
        createData('Recuerda los números', numbersTest.average, numbersTest.bestScore),
        createData('Recuerda la secuencia de las figuras', shapesTest.average, shapesTest.bestScore),
        createData('Recuerda las palabras', wordsTest.average, wordsTest.bestScore),
        createData('Completa la frase', phrasesTest.average, phrasesTest.bestScore),
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