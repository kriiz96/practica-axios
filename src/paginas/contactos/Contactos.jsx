import React from 'react'

const Contactos = () => {
  return (
    <div className='container py-5'>

      <h1> Solicitar Información</h1>
      <form>
        <input type="tel" placeholder="Ingrese su numero telefono" className="form-control mb-3 mt-5" />
        <input type="email" placeholder="Ingrese correo" className="form-control mb-3" />
        <textarea type="text" placeholder="Comentario" className="form-control mb-3" rows="3"/>

        <div className='d-grid'>
          <button type="submit" className="btn btn-primary btn-block mb-3">Enviar Datos</button>
        </div>

      </form>

    </div>
  )
}

export default Contactos
