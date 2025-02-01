'use client'
import React from 'react'
import Button from '../ui/Button'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Enconstrucion = () => {
    const router = useRouter()
    const handleClick = ()=>{
        router.push("/")
    }
  return (
    <div className='flex flex-col justify-center items-center h-[80vh] relative'>
       <Image 
        src="/imagenes/Web-en-Construccion.png" 
        alt="sitio en construccion"
        width={500}
        height={500}
        className='h-full w-auto'
      />
      <Button onClick={handleClick}  className='absolute bottom-4'>Volver Al Inicio</Button>
    </div>
  )
}

export default Enconstrucion