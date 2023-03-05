import React from 'react'
import './Input.css'

const Input = ({type, text, name, placeholder, handleOnChange, value}) => {
  return (
    <div className="container_input">
        <label htmlFor={name}>{text}</label>
        <input type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value} />
    </div>
  )
}

export default Input