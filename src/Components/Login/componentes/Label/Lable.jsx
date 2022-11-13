import React from "react";
import "./Lable.css"


export const Label = ({text}) =>{
    return(
        <div>
            <label id="label"> {text}</label>
        </div>
    )
}