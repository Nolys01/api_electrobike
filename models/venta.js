const { Schema, model } = require('mongoose');

const VentaSchema = Schema({

    tipoCliente:{
        type:String
    },
    cliente:{
        type:String
    },
    categoria:{
        type:String
    },
    producto:{
        type:String
    },
    cantidad:{
        type:Number
    }   

})


module.exports = model('Venta',VentaSchema)
