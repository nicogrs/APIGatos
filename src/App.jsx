import {useState, useEffect} from 'react'
import './App.css'

function App () {

  const CAT_URL = "https://cataas.com/cat?json=true"
  const [solicitud, setSolicitud] = useState();


  const fetchAleatoryImage = () => {
    fetch(CAT_URL)
    .then(res => res.json())
    .then(data => { 
    const { _id } = data
    console.log({data})
    setSolicitud(`https://cataas.com/cat/${_id}`)  
    })
  }


  useEffect( () => {
    fetchAleatoryImage();
    },[])
 
    return (
    <div>
      <div className='imageContainer'>
          {solicitud && <img className='imagen' src={solicitud} alt="imagen de gato" />}
      </div>

     <button onClick={fetchAleatoryImage}>Obtener Imagen Aleatoria</button>
    </div>
  )

}
export default App 