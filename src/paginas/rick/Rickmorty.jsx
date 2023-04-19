import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Link,useParams } from 'react-router-dom'

const Rickmorty = () => {
    const [usuario, setUsuario] = useState([])
    const {id} = useParams()

    const obtenerUsuario = async () => {
        const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await res.data
        console.log(data)
        setUsuario(data)
    }

    useEffect(() => {
        obtenerUsuario()
    }, [])

  return (
    <div className="container py-5">
      <h2> Informacion del Personaje {usuario.id}</h2>
      <br />
      <h4>Nombre: {usuario.name}</h4>
      <h4>Estatus: {usuario.status}</h4>
      <h4>Especie: {usuario.species}</h4>
      <h4>Genero: {usuario.gender}</h4>
      <Link to="/rick" className="btn btn-primary mt-5">Regresar</Link>
    </div>
  );
}

export default Rickmorty
