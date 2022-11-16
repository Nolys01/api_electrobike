const Cliente = require('../models/cliente');


const getCliente = async (req, res)=>{
    const cliente1 = await Cliente.find()
        res.json({
            msg:"CLIENTE GET API",
            cliente1
        })
}

const postCliente = async(req,res)=>{
    const{tipoDocumento,documento,nombre,telefono,correo}=req.body
    const cliente1 = new Cliente({tipoDocumento,documento,nombre,telefono,correo});
    await cliente1.save()
    res.json({
        msg:"CLIENTE POST API",
        cliente1
    })
}

const putCliente = async(req,res)=>{
    const{tipoDocumento,documento,nombre,telefono,correo}=req.body
    const cliente1 = await Cliente.findOneAndUpdate({documento:documento},{tipoDocumento:tipoDocumento, nombre:nombre, telefono:telefono, correo:correo})
    res.json({
        msg:'CLIENTE PUT API',
        cliente1
    })
}

const patchCliente = async(req,res)=>{
    const{tipoDocumento,documento,nombre,telefono,correo}=req.body
    const cliente1 = await Cliente.findOneAndUpdate({documento:documento},{nombre:nombre})
    res.json({
        msg:'CLIENTE PUT API',
        cliente1
    })
}


const deleteCliente = async(req,res)=>{
    const{ documento }=req.query
    const cliente1 = await Cliente.findOneAndDelete({documento:documento});
    res.json({
        msg:'CLIENTE DELETE API',
        cliente1        
    })
}

module.exports={
    getCliente,
    postCliente,
    putCliente,
    patchCliente,
    deleteCliente
}