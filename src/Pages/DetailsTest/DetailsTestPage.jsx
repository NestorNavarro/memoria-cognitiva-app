import TestChart from "../../Components/TestChart";
import "./styles.css";

export const DetailsTestPage = () => {
    return (
        <div style={{ padding : "25px"}}>
            <div className="card">
                    <h1 style={{ alignSelf : "center"}}>Puntuaciónes</h1>
                    <TestChart />
            </div>
        </div>
    );
};
export default DetailsTestPage;
