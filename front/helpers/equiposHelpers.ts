import {client} from "../client.js"

export interface IEquipo{
    _id: string,
    marca: string,
    modelo: string, 
    tipo: {
      name:string
    },
    capacidad: number,
    imagen: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
}

export const getEquipos = async() => {
    const equipos = await client.fetch(`*[_type == "equipo"]{
  codigoInterno,
    marca,
    tipo -> {name},
    modelo,
    serie,
    capacidad,
    serieMotor,
    cilindraje,
    codigoChasis,
    aceiteHidraulico -> {
      tipo -> {tipo} , referencia
    },
    transmision,
    filtroAceite,
    filtroAcpm,
    filtroAire,
    filtroCaja,
    filtroAgua,
    imagen,
  motor -> {
    name,
    cilindraje,
    capacidad,
    serie,
    tipoAceite -> {
        tipo -> {
            tipo
        }
    }
  }
}`)
    return equipos
}

export const createEquipo = async(post: any)=>{
    const result = client.create(post)
    return result
}