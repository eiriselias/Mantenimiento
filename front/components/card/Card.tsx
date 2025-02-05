import { IEquipo } from '@/helpers/equiposHelpers'
import React from 'react'

interface CardProps{
    equipos?: IEquipo[]
}

const Card = ({equipos}: CardProps) => {
  return (
    equipos && equipos.map((equipo)=>{
        console.log(equipo);
        
        return(
            <div className='bg-white w-80 rounded-lg flex flex-col items-center shadow-xl border-solid border-2' key={equipo._id}>
                <div className='p-4 font-bold text-2xl'><h1>{equipo.marca}</h1></div>
                <div className='w-full h-48 bg-slate-400'></div>
                <div className='p-4 flex flex-col items-center'>
                    <p>Modelo: <strong>{equipo.modelo}</strong> </p>
                    <p>Capadidad: <strong>{equipo.capacidad} toneladas</strong></p> 
                    <p>Tipo: <strong>{equipo.tipo.name}</strong></p>
                </div>
            </div>
        )
    })
  )
}

export default Card
