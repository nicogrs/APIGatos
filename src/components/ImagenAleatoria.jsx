import {useState, useEffect} from 'react'
import Select from './Select'
import '../App.css'

function ImagenAleatoria () {

  const CAT_URL = "https://cataas.com/cat?json=true"
  const [solicitud, setSolicitud] = useState();


  const fetchAleatoryImage = () => {
    fetch(CAT_URL)
    .then(res => res.json())
    .then(data => { 
    const { _id } = data
    setSolicitud(`https://cataas.com/cat/${_id}`)  
    })
  }

  useEffect( () => {
    fetchAleatoryImage();
    },[])
 
    return (
    <div>
      <div className='container-image'>
          {solicitud && <img className='image' src={solicitud} alt="imagen de gato" />}
      </div>
      <div className='centrar'>
      <button  onClick={fetchAleatoryImage}>Obtener Imagen Aleatoria</button>
      </div>
    </div>
  )
}

export default ImagenAleatoria

