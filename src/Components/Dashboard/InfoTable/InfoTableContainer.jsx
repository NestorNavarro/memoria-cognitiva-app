import InfoTable from "./InfoTable";

export const InfoTableContainer = () => {
    const createData = (name, average, bestScore) => {
        return { name, average, bestScore};
    }
      
    const rows = [
        createData('Emparejamiento de cartas', 159, 233),
        createData('Recuerda los números', 237, 232),
        createData('Recuerda la secuencia de las figuras', 262, 2323),
        createData('Recuerda las palabras', 305, 2323),
        createData('Completa la frase', 356, 232),
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