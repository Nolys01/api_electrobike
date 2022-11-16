const{ Schema, model } = require('mongoose');

const  ClienteSchema = Schema({

    tipoDocumento:{
        type:String
    },
    documento:{
        type:Number
    },
    nombre:{
        type:String
    },
    telefono:{
        type:Number
    },
    correo:{
        type:String
    }

})

module.exports= model('Cliente',ClienteSchema);