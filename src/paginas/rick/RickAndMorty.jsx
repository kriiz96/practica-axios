import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

const RickAndMorty = () => {
    
    const [rick, setPersonajes] = useState([])

    const obtenerPersonajes = async () => {
        const res = await axios.get('https://rickandmortyapi.com/api/character/')
        const data = await res.data
        console.log(data.results)
        setPersonajes(data.results)
    }

    useEffect(() => {
      obtenerPersonajes()
    }, [])

  return (
    <div className='container py-5'>
        <h1> Lista de personas de Rick And Morty</h1>
        {
            rick.map(item => (
                <div key={item.id}>
                    <Link to={`/rickmorty/${item.id}`}> {item.name} </Link>
                </div>
            ))
        }
    </div>
  )
}

export default RickAndMorty
