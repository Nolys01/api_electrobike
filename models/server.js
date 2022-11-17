const express = require('express');
const cors = require('cors');
const { DbConection } = require('../database/config');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.ventasPath = '/api/ventas';
        this.proveedoresPath = '/api/proveedores';
        this.clientesPath = '/api/clientes';

        this.conectarDB();
        this.middlewares();
        this.routes();
    }


    async conectarDB(){
        await DbConection();
    }

    middlewares(){ //Otras funcionalidad
        this.app.use( cors() ); // Seguridad
        this.app.use( express.static('public') ); // Indica el directorio de las paginas estaticas
        this.app.use( express.json() ) // Permite que la aplicacion reciba peticiones tipo json 
    }

    routes(){
        this.app.use(this.ventasPath, require('../routes/ventas'));
        this.app.use(this.proveedoresPath, require('../routes/proveedores'));
        this.app.use(this.clientesPath, require('../routes/clientes'));
    }

    listen(){
        this.app.listen(this.port,(req,res)=>{
            console.log(`Escuchando por le puerto ${this.port}`)
        })
    }

}


module.exports = Server