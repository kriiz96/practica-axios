import React, {useState} from 'react'
import DataTable from 'react-data-table-component'
import Swal from 'sweetalert2'

const Cruds = () => {

    const[codigo,setCodigo]=useState('')
    const[fecha,setFecha]=useState('')
    const[nombre,setNombre]=useState('')
    const[direccion,setDireccion]=useState('')
    const[tfno,setTfno]=useState('')
    const[diagnostico,setDiagnostico]=useState('')
    const[tratamiento, setTratamiento] = useState('')
    const[medico, setMedico] = useState('')
    const[lista,setLista]=useState([])
    const[modoEdicion,setModoEdicion]=useState(false)

    const generarId =()=>{
      return Math.floor(Math.random()*100000000)
    }

    const llenarCampos = (dato) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El campo: ${dato} esta vacio',
            })
    }
        

    const agregarUsuario = (e) => {

        e.preventDefault()
        
        if(fecha.trim() === ''){
            llenarCampos('Fecha')
            return
        }
        if(nombre.trim() === ''){
            llenarCampos('Nombre')
            return
        }
        if(direccion.trim() === ''){
            llenarCampos('Dirección')
            return
        }
        if(tfno.trim() === ''){
            llenarCampos('Tfno')
            return
        }
        if(diagnostico.trim() === ''){
            llenarCampos('Diagnóstico')
            return
        }
        if(tratamiento.trim() === ''){
            llenarCampos('Tratamiento')
            return
        }
        if(medico.trim() === ''){
            llenarCampos('Medico')
            return
        }
    
        const usuario = {codigo:generarId(),fecha,nombre,direccion,tfno,diagnostico,tratamiento,medico}
        setLista([...lista,usuario])
        
        setFecha('')
        setNombre('')
        setDireccion('')
        setTfno('')
        setDiagnostico('')
        setTratamiento('')
        setMedico('')

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Datos Guardados',
            showConfirmButton: false,
            timer: 1500
        })
    }

    const editar = (persona) => {
      setCodigo(persona.codigo)
      setFecha(persona,fecha)//moment(cell).format("YYYY-MM-DD")
      setNombre(persona.nombre)
      setDireccion(persona.direccion)
      setTfno(persona.tfno)
      setDiagnostico(persona.diagnostico)
      setTratamiento(persona.tratamiento)
      setMedico(persona.medico)
      setModoEdicion(true)
    }
    const guardarCambios=(e)=>{
        e.preventDefault()
        if(fecha.trim()===''){
          llenarCampos('Fecha')
          return
        }
        if(nombre.trim()===''){
          llenarCampos('Nombre')
          return
        }
        if(direccion.trim()===''){
          llenarCampos('Direccion')
          return
        }
        if(tfno.trim()===''){
          llenarCampos('Telefono')
          return
        }
        if(diagnostico.trim()===''){
          llenarCampos('Diagnostico')
          return
        }
        if(tratamiento.trim()===''){
          llenarCampos('Tratamiento')
          return
        }
        if(medico.trim()===''){
          llenarCampos('Medico')
          return
        }
  
        const editado = lista.map(persona => persona.codigo === codigo ? {codigo,fecha,nombre,direccion,tfno,diagnostico,tratamiento,medico} : persona)
        setLista(editado)
        setModoEdicion(false)
  
        setFecha('')
        setNombre('')
        setDireccion('')
        setTfno('')
        setDiagnostico('')
        setTratamiento('')
        setMedico('')
        
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Datos Actualizados',
          showConfirmButton: false,
          timer: 1500
          })
      }
  
      const eliminar = (codigo) => { //2 parametros, el primero es el item y el segundo es el index
          
          Swal.fire({
              title: 'Estas seguro de eliminar el registro?',
              text: "No podras revertir esta accion!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Si, eliminar!'
              }).then((result) => {
              
                  if (result.isConfirmed) {
                  const filtro = lista.filter((persona)=>persona.codigo!==codigo)
                  
                  setLista(filtro)
                  Swal.fire(
                  'Eliminado!',
                  'El registro ha sido eliminado.',
                  'success'
                  )
              }
              })
      }
     
      const tableCustomStyles = {
        headCells: {
          style: {
            backgroundColor: '#6889F1'
          }
        }
      }

  return (
    <div className="container py-5">
      <h1>Formulario Medico</h1>
      <form className='form-group'>
        <input
          type="date"
          placeholder="Fecha"
          className="form-control mb-3"
          value={fecha}
          onChange={(e) => { setFecha(e.target.value); }}
        />
        <input
          type="text"
          placeholder="Nombre"
          className="form-control mb-3"
          value={nombre}
          onChange={(e) => { setNombre(e.target.value); }}
        />
        <input
          type="text"
          placeholder="Dirección"
          className="form-control mb-3"
          value={direccion}
          onChange={(e) => { setDireccion(e.target.value); }}
        />
        <input
          type="number"
          min={0}
          max={1000000}
          placeholder="Tfno"
          className="form-control mb-3"
          value={tfno}
          onChange={(e) => {
            setTfno(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Diagnóstico"
          className="form-control mb-3"
          value={diagnostico}
          onChange={(e) => {
            setDiagnostico(e.target.value);
          }} //e.target.value es el valor que se ingresa en el input
        />
        <input
          type="text"
          placeholder="Tratamiento"
          className="form-control mb-3"
          value={tratamiento}
          onChange={(e) => {
            setTratamiento(e.target.value);
          }} //e.target.value es el valor que se ingresa en el input
        />
        <input
          type="text"
          placeholder="Medico"
          className="form-control mb-3"
          value={medico}
          onChange={(e) => {
            setMedico(e.target.value);
          }} //e.target.value es el valor que se ingresa en el input
        />

        {
          modoEdicion ? 
          (<button className="btn btn-warning btn-block"
            onClick={(e) =>{guardarCambios(e)}} type="submit">Guardar Cambios</button>):
          (<button className="btn btn-primary btn-block"
            onClick={(e) =>{agregarUsuario(e)}} type="submit"><i className="bi bi-plus-circle-fill"></i>Agregar Usuario</button>
        )}

      </form>

      <div className="container py-5">
        <h1>Lista de personas</h1>
        <DataTable
        customStyles={tableCustomStyles}
        columns={[
          {
            name:'Codigo',
            selector: (row) => row.codigo,
            sortable: true,
          },
          {
            name:'Fecha',
            selector: (row) => row.fecha,
            sortable: true,
          },
          {
            name:'Nombre',
            selector: (row) => row.nombre,
            sortable: true,
          },
          {
            name:'Direccion',
            selector: (row) => row.direccion,
            sortable: true,
          },
          {
            name:'Telefono',
            selector: (row) => row.tfno,
            sortable: true,
          },
          {
            name:'Diagnostico',
            selector: (row) => row.diagnostico,
            sortable: true,
          },
          {
            name:'Tratamiento',
            selector: (row) => row.tratamiento,
            sortable: true,
          },
          {
            name:'Medico',
            selector: (row) => row.medico,
            sortable: true,
          },
          {
            name:'Acciones',
            cell: (row) => (<div>
              <button className="btn btn-warning" onClick={() =>{editar(row)}}><i className="bi bi-pencil-square"></i></button>
              <button className="btn btn-danger" onClick={() =>{eliminar(row.codigo)}}><i className="bi bi-trash"></i></button>
            </div>
            ),
          }
        ]}

        data={lista}
        pagination
        paginationComponentOptions={{
          rowsPerPageText: 'Filas por pagina:',
          rangeSeparatorText: 'de',
          noRowsPerPage: false,
          selectAllRowsItem: true,
          selectAllRowsItemText: 'Todos'
        }}
        highlightOnHover
        pointerOnHover
        fixedHeader
      />       
      </div>
    </div>
  )
}

export default Cruds