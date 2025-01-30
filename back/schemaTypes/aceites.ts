import {defineType, defineField} from "sanity"

export const aceites = defineType({
    name: "aceites",
    title: "Aceites",
    type: "document",
    fields: [
       
        defineField({
            name:"tipo",
            type: "reference",
            title: "Tipo de aceite",
            to:[{type:"tipoAceite"}],
            validation: (rule)=>rule.required().error("Este campo es requerido")
        }),
        defineField({
            name:"referencia",
            type: "string",
            title: "Referencia",
            validation: (rule)=>rule.required().min(3).error("Este campo es requerido")
        }),
    ]

})