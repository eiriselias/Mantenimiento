import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='flex justify-between mx-16 p-4 font-bold'>
       <h1 className='hover:scale-105'><Link href="/">Mantenimiento</Link></h1>
       <ul className='flex gap-8'>
       <li className='hover:scale-105'><Link href="equipos">Equipos</Link></li>
        <li className='hover:scale-105'><Link href="#">Motores</Link></li>
        <li className='hover:scale-105'><Link href="#">Aceites</Link></li>
        <li className='hover:scale-105'><Link href="#">Mantenimientos</Link></li>
        <li className='hover:scale-105'><Link href="#">Inspecciones</Link></li>
        <li className='hover:scale-105'><Link href="#">Reparaciones</Link></li>
        <li className='hover:scale-105'><Link href="#">Reportes</Link></li>
       </ul>
       <span className='hover:scale-105'><Link href="#">Iniciar Sesion</Link></span>
    </nav>
  )
}

export default NavBar
