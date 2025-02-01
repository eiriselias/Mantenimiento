import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex justify-between mx-16 p-4 font-bold'>
       <h1 className='hover:scale-105 cursor-pointer'>Mantenimiento</h1>
       <ul className='flex gap-8'>
        <li className='hover:scale-105 cursor-pointer'>Motores</li>
        <li className='hover:scale-105 cursor-pointer'>Aceites</li>
        <li className='hover:scale-105 cursor-pointer'>Mantenimientos</li>
        <li className='hover:scale-105 cursor-pointer'>Inspecciones</li>
        <li className='hover:scale-105 cursor-pointer'>Reparaciones</li>
        <li className='hover:scale-105 cursor-pointer'>Reportes</li>
       </ul>
       <span className='hover:scale-105 cursor-pointer'>Iniciar Sesion</span>
    </nav>
  )
}

export default NavBar
