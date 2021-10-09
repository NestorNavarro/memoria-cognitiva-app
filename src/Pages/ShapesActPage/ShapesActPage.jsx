import React from "react";
import {  ButtonBase } from "@mui/material";

import "./styles.css";
const ShapesActPage = ({
    delegations : {
        shapeFocus,
        isDisabled,
        handleOnClick,
    }
}) => {
    return (
        <div className="container">
            <div className="card card-content">
                    <ButtonBase
                        id="0"
                        className="square"
                        disabled={isDisabled}
                        onClick={handleOnClick}
                    />
                    <ButtonBase
                        id="1"
                        className="circle"
                        disabled={isDisabled}
                        onClick={handleOnClick}
                    />
                    <ButtonBase
                        id="2"
                        className="rectangle"
                        disabled={isDisabled}
                        onClick={handleOnClick}
                    />
                    <ButtonBase
                        id="3"
                        className="oval"
                        disabled={isDisabled}
                        onClick={handleOnClick}
                    />
            </div>
        </div>
    );
}

export default ShapesActPage;
