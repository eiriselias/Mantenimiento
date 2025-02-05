'use client'
import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import { getEquipos, IEquipo } from '@/helpers/equiposHelpers'

const Equipos = () => {
    
  const [equipos, setEquipos] = useState<IEquipo[]>()
  
  useEffect(() => {
    const optenerEquipos = async () =>{ 
      const equiposData = await getEquipos()
      setEquipos(equiposData)      
    }
    optenerEquipos()
  },[])
  
  return (
    <div className='bg-green-100 h-full px-32 pt-8'>
      <Card equipos={equipos} />
    </div>
  )
}

export default Equipos
