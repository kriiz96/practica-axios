import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Link,useParams } from 'react-router-dom'

const Usuario = () => {
    const [usuario, setUsuario] = useState([])
    const {id} = useParams()

    const obtenerUsuario = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await res.data
        setUsuario(data)
    }

    useEffect(() => {
        obtenerUsuario()
    }, [])

  return (
    <div className='container py-5'>
        <h2> Informacion del Usuario {usuario.id}</h2><br />
         <h4>Nombre: {usuario.name}</h4>
         <h4>Usuario: {usuario.username}</h4>
         <h4>Email: {usuario.email}</h4>
          <h4>Telefono: {usuario.phone}</h4>

          <Link to='/' className="btn btn-primary mt-5">Regresar</Link>
      
    </div>
  )
}

export default Usuario
