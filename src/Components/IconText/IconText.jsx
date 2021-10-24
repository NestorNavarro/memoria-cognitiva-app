import React from "react";

const IconText = ({icon, text}) => {
    return (
        <div style={{display : "flex", flexDirection : "column"}}>
            <i className={icon}  style={{ fontSize : "5rem"}}/>
            <p className="mt-2">{text}</p>
        </div>
    );
}

export default IconText;