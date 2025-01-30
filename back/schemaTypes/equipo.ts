import {defineField, defineType} from "sanity"

export const equipo = defineType({
    name: "equipo",
    title:"Equipo",
    type:"document",
    fields:[
        defineField({
            name:"codigoInterno",
            title:"Codigo Interno",
            type:"string",
        }),
        defineField({
            name:"marca",
            title:"Marca",
            type:"string",
        }),
        defineField({
            name:"tipo",
            title:"Tipo Equipo",
            type:"reference",
            to:[{type:"tipoEquipo"}]
        }),
        defineField({
            name:"modelo",
            title:"Modelo",
            type:"string",
        }),
        defineField({
            name:"serie",
            title:"Serie Equipo",
            type:"string",
        }),
        defineField({
            name:"capacidad",
            title:"Capacidad en toneladas",
            type:"number",
        }),
        defineField({
            name:"motor",
            title:"Motor",
            type:"reference",
            to:[{type:"motor"}]
        }),
        defineField({
            name:"serieMotor",
            title:"Serie motor",
            type:"string",
        }),
        defineField({
            name:"cilindraje",
            title:"Cilindraje",
            type:"string",
        }),
        defineField({
            name:"codigoChasis",
            title:"Codigo Chasis",
            type:"string",
        }),
        defineField({
            name:"aceiteHidraulico",
            title:"Aceite Hidraulico",
            type:"reference",
            to:[{type:"aceites"}]
        }),
        defineField({
            name:"transmision",
            title:"Transmision",
            type:"string",
        }),
        defineField({
            name:"filtroAceite",
            title:"Filtro de aceite",
            type:"string",
        }),
        defineField({
            name:"filtroAcpm",
            title:"Filtro de ACPM",
            type:"string",
        }),
        defineField({
            name:"filtroAire",
            title:"Filtro de aire",
            type:"string",
        }),
        defineField({
            name:"filtroCaja",
            title:"Filtro de caja",
            type:"string",
        }),
        defineField({
            name:"filtroAgua",
            title:"Filtro de agua",
            type:"string",
        }),
        defineField({
            name:"imagen",
            title:"Imagen",
            type:"image",
        }),
    ]
})