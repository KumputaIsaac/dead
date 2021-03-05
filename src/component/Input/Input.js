import React from 'react'
import './input.css'

const Input = ({getnumber,number,handlenumberchange}) => {
    return (
        <div className='input'>
            <input value={number} onChange={getnumber} type="number" max="2"/>
            <button onClick={handlenumberchange} className="addicon">
                <i className="far fa-plus-square"></i>
            </button>
        </div>
    )
}

export default Input
