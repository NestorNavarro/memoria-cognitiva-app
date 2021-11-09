import TestChart from "../../Components/TestChart";
import "./styles.css";

export const DetailsTestPage = ({
    delegations : {
        average = 0,
        predictions = 0,
    },
}) => {
    return (
        <div style={{ padding : "25px"}}>
            <div className="card">
                    <h1 style={{ alignSelf : "center"}}>Puntuaciónes</h1>
                    <TestChart />
            </div>
            <div className="stadistics-content" >
                <div className="card"  style={{ flex : 1}}>
                    <div className="body">
                        <h1>Según tu edad deberías tener una puntuación de: </h1>
                        <h1>{predictions}</h1>
                    </div>
                </div>
                <div className="card" style={{ flex : 1}}>
                    <div className="body">
                        <h1>Tu promedio actual: </h1>
                        <h1>{average}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DetailsTestPage;
