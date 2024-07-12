import {useState, useEffect} from 'react';
import '../App.css'

function ImagenTexto(){
    const [imagen, setImagen] = useState()
    const [texto, setTexto] = useState()
    const URL_TEXTO = `https://cataas.com/cat/says/${texto}?json=true`

    const imagenPorTexto = async () => {
        await fetch(URL_TEXTO)
        .then(res => res.json())
        .then(data => {
            const { _id } = data;
            setImagen(`https://cataas.com/cat/${_id}/says/${texto}?font=Impact&fontSize=30&fontColor=%23fff`)
        })
    }

    useEffect (() => {
        imagenPorTexto;
    },[])

    const inputChange = (e) => {
        setTexto(e.target.value);
    } 


    return (
        <div>
            <div>
                <input onChange={inputChange} className='textInput' type="text" placeholder='Ingrese el texto de la imagen'/>
            </div>
            <div className='container-image'>
                {imagen && <img className='image' src={imagen} alt="Imagen con texto generado" />}
            </div>
            <div className='centrar'>
                <button onClick={imagenPorTexto}>Generar Imagen con Texto</button>
            </div>
        </div>
    )

}


export default ImagenTexto