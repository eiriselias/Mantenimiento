import {defineType, defineField} from "sanity"

export const tipoAceite = defineType({
    name: "tipoAceite",
    title: "Tipo Aceites",
    type: "document",
    fields: [
       
        defineField({
            name:"tipo",
            type: "string",
            title: "Tipo de aceite",
            validation: (rule)=>rule.required().min(3).error("Este campo es requerido")
        }),
    ]

})