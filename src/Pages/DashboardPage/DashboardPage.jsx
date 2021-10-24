import React from "react";

//Our importations
import InfoTable from "../../Components/Dashboard/InfoTable";
import ProfileChart from "../../Components/Dashboard/ProfileChart";
import "./styles.css";

const DashboardPage = ({  
    auth :{
        name,
        age,
        sex,
    }, 
    test,
}) => {
    return (
        <div className="container">
            <div className="card user-info mt-3 mb-3">
                <div>
                    <div className="content-group">
                        <h5>Nombre de usuario</h5>
                        <h3>{name}</h3>
                    </div>
                    <div className="content-group">
                        <h5>Edad</h5>
                        <h3>{age} años</h3>
                    </div>
                    <h5>Sexo</h5>
                    <h3>{sex}</h3>
                </div>
                <ProfileChart test={test} />
            </div>
            <InfoTable test={test} />
        </div>
    );
}
export default DashboardPage;
