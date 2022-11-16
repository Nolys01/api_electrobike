
const { Router } = require('express');
const router = Router(); // Obtener la funcion router


const {getVenta, postVenta, deleteVenta, patchVenta, putVenta}=require("../controllers/venta")

router.get('/',getVenta)
router.post('/',postVenta)
router.patch('/',patchVenta)
router.put('/',putVenta)
router.delete('/',deleteVenta)



module.exports = router