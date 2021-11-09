import TestChart from "../../Components/TestChart";
import "./styles.css";

export const DetailsTestPage = ({
    delegations : {
        slr = 0, 
        average = 0,
        chartData = [],
    },
}) => {
    return (
        <div style={{ padding : "25px"}}>
            <div className="card">
                    <h1 style={{ alignSelf : "center"}}>Puntuaciónes</h1>
                    <TestChart dataTest={chartData} />
            </div>
            <div className="stadistics-content" >
                <div className="card"  style={{ flex : 1}}>
                    <div className="body">
                        <h2>Según tu edad deberías tener una puntuación de: </h2>
                        <h1>{Number(slr) ? Math.round(slr) : "No hay suficientes datos para hacer una predicción"}</h1>
                    </div>
                </div>
                <div className="card" style={{ flex : 1}}>
                    <div className="body">
                        <h2>Tu promedio actual: </h2>
                        <h1>{Number(average) ? Math.round(average) : 0}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DetailsTestPage;
