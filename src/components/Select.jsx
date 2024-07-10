import React from 'react'
import './Select.css'

function Select() {
  return (
    <div>
        <select name="" id="">
            <option value="" disabled>Seleccionar una opcion</option>
            <option value="opcion-aleat">Imagen Aleatoria</option>
            <option value="opcion-gif">Gif Aleatorio</option>
            <option value="opcion-imgtxt">Imagen con texto</option>
        </select>
    </div>
    
  )
}

export default Select