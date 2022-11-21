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
    const createData = (name = "", average = 0, bestScore = 0, type = "") => {
        return { name, average, bestScore, type};
    }
      
    const rows = [
        createData(
        'Emparejamiento de cartas',
         Math.round(cardsTest?.average ?? 0),
         cardsTest?.best ?? 0,
         "cards"),

        createData(
        'Recuerda los números',
         Math.round(numbersTest?.average ?? 0),
         numbersTest?.best ?? 0,
         "numbers"),

        createData(
        'Recuerda la secuencia de las figuras',
         Math.round(figuresTest?.average ?? 0),
         figuresTest?.best ?? 0,
         "figures"),

        createData(
        'Recuerda las palabras',
         Math.round(wordsTest?.average ?? 0),
         wordsTest?.best ?? 0,
         "words"),

        createData(
        'Completa la frase',
         Math.round(phrasesTest?.average ?? 0),
         phrasesTest?.best ?? 0,
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