import {defineField, defineType} from "sanity"

export const motor = defineType({
    name: "motor",
    title: "Motor",
    type: "document",
    fields:[
        defineField({
            name:"name",
            title:"Nombre",
            type:"string",
            validation: (rule)=> 
                rule.custom((value)=>{
                    if(!value) return "Este campo es requerido";
                    if(value.length < 3) return "Debe contener como minimo tres caracteres";
                    return true;
                })
        }),

        defineField({
            name:"cilindraje",
            title:"Cilindraje",
            type:"string"
        }),

        defineField({
            name: "capacidad",
            title:"Capacidad",
            type:"string"
        }),

        defineField({
            name:"tipoAceite",
            title:"Tipo de aceite",
            type:"reference",
            to:[{type:"aceites"}]
        }),
        
        defineField({
            name:"serie",
            title:"Serie Motor",
            type:"string",
        }),
    ]
})