const mongoose = require('mongoose');


const DbConection = async() =>{

    try {

        mongoose.connect(process.env.MONGODB_CNN ,{});
        console.log('Estableciendo conexion con la base de datos')
        
    }
    catch( error ){

        console.log('No se pudo establecer conexion con la base de datos')

        
    }

}

module.exports={
    DbConection
}