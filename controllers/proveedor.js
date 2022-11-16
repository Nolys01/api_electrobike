const Proveedor = require('../models/proveedor');


const getProveedor =async(req, res)=>{
    const proveedores = await Proveedor.find()
        res.json({
            msg:"provedor GET API",
            proveedores
        })
}

const postProveedor = async(req,res)=>{
    const{tipoProveedor,tipoDocumento,documento,nombre,telefono}=req.body
    const proveedor1 = new Proveedor({tipoProveedor,tipoDocumento,documento,nombre,telefono});
    await proveedor1.save()
    res.json({
        msg:"PROVEEDOR POST API",
        proveedor1
    })
}

const putProveedor = async(req,res)=>{
    const{tipoProveedor,tipoDocumento,documento,nombre,telefono}=req.body
    const proveedor1 = await Proveedor.findOneAndUpdate({documento:documento},{ tipoProveedor:tipoProveedor, tipoDocumento:tipoDocumento, nombre:nombre, telefono:telefono})
    res.json({
        msg:'CLIENTE PUT API',
        proveedor1
    })
}


const patchProveedor = async(req,res)=>{
    const{tipoProveedor,tipoDocumento,documento,nombre,telefono}=req.body
    const proveedor1 = await Proveedor.findOneAndUpdate({documento:documento},{ tipoProveedor:tipoProveedor})
    res.json({
        msg:'CLIENTE PATCH API',
        proveedor1
    })
}




const deleteProveedor = async(req,res)=>{
    const{ documento }=req.query
    const proveedor1 = await Proveedor.findOneAndDelete({documento:documento});
    res.json({
        msg:'CLIENTE DELETE API',
        proveedor1    
    })
}


module.exports={
    getProveedor,
    postProveedor,
    putProveedor,
    patchProveedor,
    deleteProveedor
}