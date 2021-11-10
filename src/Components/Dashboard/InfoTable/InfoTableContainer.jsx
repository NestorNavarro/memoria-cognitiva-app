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
        createData(
        'Emparejamiento de cartas',
         Math.round(cardsTest.average),
         cardsTest.best,
         "cards"),

        createData(
        'Recuerda los números',
         Math.round(numbersTest.average),
         numbersTest.best,
         "numbers"),

        createData(
        'Recuerda la secuencia de las figuras',
         Math.round(figuresTest.average),
         figuresTest.best,
         "figures"),

        createData(
        'Recuerda las palabras',
         Math.round(wordsTest.average),
         wordsTest.best,
         "words"),

        createData(
        'Completa la frase',
         Math.round(phrasesTest.average),
         phrasesTest.best,
         "phrases"),
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