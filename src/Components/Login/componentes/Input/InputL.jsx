import React from "react";
import './Input.css'

export const InputL = ({attribute,handlechange, param}) => {
    return (
        <div>
            <input
            id={attribute.id}
            name={attribute.name}
            placeholder={attribute.placeholder}
            type={attribute.type}
            onChange={(e)=> handlechange(e.target.name, e.target.value)  }
            className='regular-style'
            />
        </div>

    )
}