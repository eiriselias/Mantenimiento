import {client} from "../client.js"

export interface IEquipo{
    _id: string,
    marca: string,
    modelo: string, 
    type: string,
    capacidad: number,
}

export const getEquipos = async() => {
    const equipos = await client.fetch('*[_type == "equipo"]')
    return equipos
}

export const createEquipo = async(post: any)=>{
    const result = client.create(post)
    return result
}