import React from 'react'
import {useState , useEffect} from 'react'
import Error from './Error'

const formulario = ({setPacientes , pacientes, paciente,setPaciente}) => {

 // se recibnen los props con setPacientes  
  const [nombre,setNombre] = useState('')
  const [propietario,setPropietario] = useState('')
  const [email,setEmail] = useState('')
  const [fecha,setFecha] = useState('')
  const [sintoma,setSintoma] = useState('')
  // este state se utiliza para validar si el formulario esta vacio en algun campo se inicia en false
  const [error,setError] = useState(false)
  //console.log(nombre)
  //esta funcion genera un ID
 const generarId = () => {

    const random = Math.random().toString(36).substr(2);
    const date = Date.now().toString(36) 
    return random + date

 }

 // este hook reacciona cuando editamos y se llena el objeto 
 //reutilizamos los state para cachar el segundo objeto que viene de paciente e incrustarlo en el form
 useEffect( () => {
     if( Object.keys(paciente).length > 0) {
       //  console.log('si hay algo')
         setNombre(paciente.nombre)
         setPropietario(paciente.propietario)
         setEmail(paciente.email)
         setFecha(paciente.fecha)
         setSintoma(paciente.sintoma)

     } 
 }, [paciente])



  const handleSubmit = (e) => {

      e.preventDefault()
      //console.log('enviando formulario')

      // validacion del formulario  que no tenga campos vacios 
      if([nombre,propietario,email,fecha,sintoma].includes ('') ) {
          console.log('hay un campo vacio')
          // aqui cambia el state a true si hay algun campo vacio y se coloca return 
          setError(true)
          return;
      
      }
          // una vez enviado el form con los campos llenos regresamos al state a false para desaparecer el mensaje
          setError(false)

          // construimos el objeto de pacientes para que capturarlos en un arreglo y capturamos los state , automaticamente el valor de cada propiedad toma como referencia lo que se escribio en el formulario
          const objetoPaciente = {

            nombre,
            propietario,
            email,
            fecha,
            sintoma,
            //id: generarId()  // se agrega al objeto para generar dinamicamente el ID

          }

          if(paciente.id) {
              //console.log('editando')
              objetoPaciente.id = paciente.id
              const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ?objetoPaciente : pacienteState) 
              setPacientes(pacientesActualizados)
              setPaciente({})

          }
          else{
            //console.log('nuevo registro')
            objetoPaciente.id = generarId()
            setPacientes([...pacientes, objetoPaciente])
        }

         // usamos setPacientes con la siguiente sintaxis y como segundo parametro pasamos el objeto 
          //setPacientes([...pacientes, objetoPaciente])

          // reiniciar el form 
          setNombre('')
          setPropietario('')
          setEmail('')
          setFecha('')
          setSintoma('')
      
  }

    return (

        <div className=" md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2> 
            <p className="text-lg mt-5 text-center mb-10">Añade pacientes y {''} <span className="text-indigo-600 font-bold text-lg">Administralos</span> </p> 
            <form action="" className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" 
            
            onSubmit={handleSubmit}
            > 
        
            {error && 
            
            // aqui si el error es true se coloca el siguiente codigo 
              <Error mensaje="Todos los campos son obligatorios"
              />
             }
                
                

                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">nombre mascota</label>
                    <input type="text" 
                     placeholder="nombre de la mascota"
                     className="border-2 w-full p-2 placeholder-gray-600 rounded-md"
                     id="mascota"
                     value={nombre}
                     //cada que el evento se registre setnombre cacha lo que escribe el usuario
                     onChange={ (e) => setNombre(e.target.value) }
                    
                    />
                </div>

                <div>
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">nombre propietario  </label>
                    <input type="text" 
                     placeholder="nombre del propietario"
                     className="border-2 w-full p-2 placeholder-gray-600 rounded-md"
                     id="propietario"
                     value={propietario}
                     onChange={ (e) => setPropietario(e.target.value) }
                    
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                    <input type="email" 
                     placeholder="email"
                     className="border-2 w-full p-2 placeholder-gray-600 rounded-md"
                     id="email"
                     value={email}
                     onChange={ (e) => setEmail(e.target.value)}
                    
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
                    <input type="date" 
                    
                     className="border-2 w-full p-2 placeholder-gray-600 rounded-md"
                     id="alta"
                     value={fecha}
                     onChange={ (e) => setFecha(e.target.value)}
                    
                    />
                </div> 
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
                    <textarea name="" id="sintomas" className="border-2 w-full p-2 placeholder-gray-600 rounded-md" placeholder="describe los sintomas"
                    value={sintoma}
                    onChange={ (e) => setSintoma(e.target.value)}
                    
                    
                    ></textarea>
                </div>


                <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value="agregar paciente"
                value={paciente.id ? 'editar paciente' : 'Agregar paciente'} //valida si existe un id , en caso de ser true cambia el nombre a editar , false cambia el nombre agregar 
                />
                
            </form>
          
            
        </div> 
    )
}

export default formulario
