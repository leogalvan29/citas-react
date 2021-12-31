


import { useEffect, useState } from 'react';
import Header from './components/header'
import Formulario from './components/formulario';
import ListadoPacientes from './components/ListadoPacientes';



function App() {
  
  // los props se declaran siempre el en app.jsx o en componentes padres, nunca se pasan props de componentes hijos a padres
   const [pacientes, setPacientes] = useState([])

   // para la parte de editar se crea un state se pasa como props al listado de pacientes , esta informacion una vez capturada desde el componente paciente deberia de pasar por los demas componentes 
   const [paciente,setPaciente] = useState({})

   useEffect( () => {
           const obtenerLS = () => {
             const pacientesLS = JSON.parse(localStorage.getItem('pacientes') )?? [];
              setPacientes(pacientesLS)
           }
           obtenerLS()
   }, [])

   useEffect( () => {
     localStorage.setItem('pacientes' , JSON.stringify(pacientes))
   }, [pacientes])

   const eliminarPaciente = (id) => {
      const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id) 
      setPacientes(pacientesActualizados)
   }


  return (

    <div className="container mx-auto mt-14">
       <Header
       
       
       
       />
        <div className="mt-12 md:flex">

        <Formulario 
        
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
        
        
        
        />
       <ListadoPacientes

       pacientes={pacientes}
       setPaciente={setPaciente}
       eliminarPaciente={eliminarPaciente}
       />
             
        </div>
       
    </div> 

  
  )
}

export default App
