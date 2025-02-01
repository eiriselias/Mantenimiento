'use client'
import { useEffect, useState } from "react";
import {getEquipos, IEquipo} from "../helpers/equiposHelpers"


export default function Home() {

  const [equipos, setEquipos] = useState<IEquipo[]>()
  
  useEffect(() => {
    const optenerEquipos = async () =>{ 
      const equiposData = await getEquipos()
      setEquipos(equiposData)      
    }
    optenerEquipos()
  },[])

  return (
    <>
      {equipos && equipos.map((equipo) => {
        
        return(
          <div key={equipo._id}>
            <h1>{equipo.marca}</h1>
          </div>
        )
      })}
    </>
  );
}
