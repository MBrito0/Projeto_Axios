import React from 'react'
import styles from './BotaoSubmit.css'


const BotaoSubmit = ({text}) => {
  return (
    <div>
        <button type='submit' value="Submit" className='botao_Submit'>{text}</button>
    </div>
  )
}

export default BotaoSubmit