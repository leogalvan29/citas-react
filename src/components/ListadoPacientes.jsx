import { useEffect } from "react"
import Paciente from "./Paciente"
//import {useState , useEffect} from 'react'



const ListadoPacientes = ({pacientes,setPaciente,eliminarPaciente}) => {

   // console.log(pacientes.length)

     useEffect ( () => {
          if(pacientes.length > 0) {
           // console.log('nuevo paciente 2')
          }
     }, [pacientes]);

    return (
        <div className=" lg:w-3/5 mt-5 mb-10 md:h-screen overflow-y-scroll">
            {pacientes && pacientes.length ? (

             <>
             <h2 className="font-black text-3xl text-center">Listado pacientes</h2> 
            <p className="text-xl mt-5 mb-5 text-center">Administra tus {''} <span className="text-indigo-600 font-bold">pacientes y citas</span></p>
           
           {pacientes.map( (p) =>{
               
                      return(
                        <Paciente 
                        
                        paciente={p}
                        // de aqui se envia el prop setPaciente hacia el comp de paciente
                        setPaciente={setPaciente}
                        eliminarPaciente={eliminarPaciente}
                        
                        />
                      )
           })}
             </>

            ) : (

                <>
                     <h2 className="font-black text-3xl text-center">No hay pacientes</h2> 
            <p className="text-xl mt-5 mb-5 text-center">Comienza agregando pacientes {''} <span className="text-indigo-600 font-bold">Apareceran en este lugar</span></p>
           
                </>
            )}
            
            

           
        
            

             
             
           
        </div>
    )
}

export default ListadoPacientes
