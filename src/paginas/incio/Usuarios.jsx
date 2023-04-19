import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

const Usuarios = () => {
    
    const [usuarios, setUsuarios] = useState([])

    const obtenerUsuarios = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        const data = await res.data
        setUsuarios(data)
    }

    useEffect(() => {
        obtenerUsuarios()
    }, [])

  return (
    <div className='container py-5'>
        <h1> Lista de Usuarios</h1>
        {
            usuarios.map(item => (
                <div key={item.id}>
                    <Link to={`/usuario/${item.id}`}> {item.name} </Link>
                </div>
            ))
        }
    </div>
  )
}

export default Usuarios
