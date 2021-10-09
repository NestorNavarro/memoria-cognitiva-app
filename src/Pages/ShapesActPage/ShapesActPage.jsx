import React from "react";
import {  ButtonBase } from "@mui/material";

import "./styles.css";
import classNames from "classnames";
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
                        className={classNames("square", {
                            focused : "0" in shapeFocus,
                        })}
                        disabled={isDisabled}
                        onClick={handleOnClick}
                    />
                    <ButtonBase
                        id="1"
                        className={classNames("circle", {
                            focused : "1" in shapeFocus,
                        })}
                        disabled={isDisabled}
                        onClick={handleOnClick}
                    />
                    <ButtonBase
                        id="2"
                        className={classNames("rectangle", {
                            focused : "2" in shapeFocus,
                        })}
                        disabled={isDisabled}
                        onClick={handleOnClick}
                    />
                    <ButtonBase
                        id="3"
                        className={classNames("oval", {
                            focused : "3" in shapeFocus,
                        })}
                        disabled={isDisabled}
                        onClick={handleOnClick}
                    />
            </div>
        </div>
    );
}

export default ShapesActPage;
