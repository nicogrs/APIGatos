import { useEffect, useState } from "react";
import '../App.css'

function ImagenGif (){

    const [imagen, setImagen] = useState();
    const URL_GIF = 'https://cataas.com/cat/gif?json=true';

    const obtainGif = async () => {
        await fetch(URL_GIF)
        .then(res => res.json())
        .then(data => {
            const { _id } = data;
            setImagen(`https://cataas.com/cat/${_id}`);
        })
    }   

    useEffect(() => {
        obtainGif();
    },[])
 
    return (
        <div>
            <div className='container-image'>
            {imagen && <img className='image' src={imagen} alt="Imagen tipo GIF" />}
            </div>
            <div className='centrar'>
            <button onClick={obtainGif}>Obtener imagen GIF</button>
            </div>
        </div>
    )
}

export default ImagenGif