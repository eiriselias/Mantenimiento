'use client'
import { useEffect, useState } from "react";
import {getEquipos, IEquipo} from "../helpers/equiposHelpers"
import Enconstrucion from "@/components/enconstrucion/Enconstrucion";


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
      <Enconstrucion/>
    </>
  );
}
