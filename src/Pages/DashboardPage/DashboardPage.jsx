import React from "react";

//Our importations
import InfoTable from "../../Components/Dashboard/InfoTable";
import ProfileChart from "../../Components/Dashboard/ProfileChart";
import "./styles.css";

const DashboardPage = () => {
    return (
        <div className="container">
            <div className="card user-info mt-3 mb-3">
                <div>
                    <div className="content-group">
                        <h5>Nombre de usuario</h5>
                        <h3>Nestor Eduardo Navarro Arizaga</h3>
                    </div>
                    <div className="content-group">
                        <h5>Edad</h5>
                        <h3>24 años</h3>
                    </div>
                    <h5>Sexo</h5>
                    <h3>Masculino</h3>
                </div>
                <ProfileChart />
            </div>
            <InfoTable/>
        </div>
    );
}
export default DashboardPage;
