

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
 
    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este paceinte?')
        if(respuesta){
            eliminarPaciente(paciente.id)
        }
    }
    
    return (
        <div>
            <div className="m-3 bg-white shadow-md px-5 py-10 rounded-lg">
                <p className="font-bold mb-3 text-gray-700 uppercase">nombre : {''}

                    <span className="font-normal normal-case">{paciente.nombre}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Propietario : {''}

               <span className="font-normal normal-case">{paciente.propietario}</span>
               </p>
               <p className="font-bold mb-3 text-gray-700 uppercase">Email : {''}

                <span className="font-normal normal-case">{paciente.email}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase"> Fecha Alta : {''}

                <span className="font-normal normal-case">{paciente.fecha}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas : {''}

                <span className="font-normal normal-case">{paciente.sintoma}</span>
                 </p>
                 <div className="flex justify-between">
                     <button 
                     type="button"
                     className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md"
                     // este evento de click cacha la informacion de cada comp y paciente y la almacena en el state de setPaciente 
                     onClick={ () => setPaciente(paciente)}
                     
                     >editar</button>

                     <button 
                     type="button"
                     className="py2 px-10 bg-rose-700 hover:bg-rose-800 text-white font-bold uppercase rounded-md"
                     onClick={handleEliminar}
                     
                     >Eliminar</button>
                 </div>
            </div>
        </div>
    )
}

export default Paciente
