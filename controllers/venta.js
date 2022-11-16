const Venta = require('../models/venta');


const getVenta = async (req, res)=>{
    const ventas = await Venta.find()
        res.json({
            msg:"Venta GET API",
            ventas
        })
}

const postVenta = async(req,res)=>{
    const{tipoCliente,cliente,categoria,producto,cantidad}=req.body
    const venta1 = new Venta({tipoCliente,cliente,categoria,producto,cantidad});
    await venta1.save()
    res.json({
        msg:"VENTA POST API",
        venta1
    })
}

const putVenta = async(req,res)=>{
    const{tipoCliente,cliente,categoria,producto,cantidad}=req.body
    const venta1 = await Venta.findOneAndUpdate({cliente:cliente},{tipoCliente:tipoCliente, categoria:categoria, producto:producto, cantidad:cantidad})
    res.json({
        msg:'VENTA PUT API',
        venta1
    })
}


const patchVenta = async(req,res)=>{
    const{tipoCliente,cliente,categoria,producto,cantidad}=req.body
    const venta1 = await Venta.findOneAndUpdate({cliente:cliente},{producto:producto, cantidad:cantidad})
    res.json({
        msg:'VENTA PATCH API',
        venta1
    })
}

const deleteVenta = async(req,res)=>{
    const{ cliente }=req.query
    const venta1 = await Venta.findOneAndDelete({cliente:cliente});
    res.json({
        msg:'VENTA DELETE API',
        venta1
    })
}

module.exports={
    getVenta,
    postVenta,
    putVenta,
    patchVenta,
    deleteVenta
}