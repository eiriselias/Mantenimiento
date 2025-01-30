import {defineField, defineType} from "sanity"

export const tipoEquipo = defineType({
    name:"tipoEquipo",
    title:"Tipo de Equipo",
    type:"document",
    fields:[
        defineField({
            name:"name",
            title:"Tipo de equipo",
            type:"string"
        }),
    ]
})