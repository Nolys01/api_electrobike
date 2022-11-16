const { Schema , model } = require('mongoose');


const  ProveedorSchema = Schema({
    
    tipoProveedor:{
        type:String
    },
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
    }

})


module.exports = model("Proveedor",ProveedorSchema)