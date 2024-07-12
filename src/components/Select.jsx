import {useState} from 'react'
import ImagenAleatoria from './ImagenAleatoria';
import ImagenGif from './ImagenGif';
import ImagenTexto from './ImagenTexto';
import './Select.css'

function Select() {
  const [opActual, setOpActual] = useState();

  const onSelectChange = (e) => {
    setOpActual(e.target.value);
  }

  const setearOpcActual = () => {
    switch (opActual) {
      case 'opcion-gif':
            return <ImagenGif/>;
      case 'opcion-imgtxt':
            return <ImagenTexto/>;
      case 'opcion-aleat':
            return <ImagenAleatoria/>;
      default:
            return <ImagenAleatoria/>;
  
    }

  }

  return (
    <div>
        <select onChange={onSelectChange} name="" id="">
            <option value="" disabled>Seleccionar una opcion</option>
            <option value="opcion-aleat">Imagen Aleatoria</option>
            <option value="opcion-gif">Gif Aleatorio</option>
            <option value="opcion-imgtxt">Imagen con texto</option>
        </select>
        <div className=''>
            {setearOpcActual()}
        </div>
    </div>
    
  )
}

export default Select