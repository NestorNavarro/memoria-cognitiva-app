import React from "react";

//Our importations
import InfoTable from "../../Components/Dashboard/InfoTable";
import ProfileChart from "../../Components/Dashboard/ProfileChart";
import "./styles.css";

const DashboardPage = ({  
    auth,
}) => {
    return (
        <div className="container">
            <div className="card user-info mt-3 mb-3">
                <div>
                    <div className="content-group">
                        <h5>Nombre de usuario</h5>
                        <h3>{auth.name}</h3>
                    </div>
                    <div className="content-group">
                        <h5>Edad</h5>
                        <h3>{auth.age} años</h3>
                    </div>
                    <h5>Sexo</h5>
                    <h3>{auth.sex}</h3>
                </div>
                <ProfileChart auth={auth} />
            </div>
            <InfoTable auth={auth} />
        </div>
    );
}
export default DashboardPage;
