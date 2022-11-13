import React from "react";
import "./Title.css"
export const Title = (props) => {
    return(
        <div className="title-container"  id="label-t">
            <label className="title-label" >{props.text}</label>
        </div>


    )
};