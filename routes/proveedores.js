
const { Router } = require('express');
const router = Router(); // Obtener la funcion router


const { getProveedor, postProveedor, deleteProveedor, putProveedor, patchProveedor }=require("../controllers/proveedor")

router.get('/',getProveedor)
router.post('/',postProveedor)
router.put('/',putProveedor)
router.patch('/',patchProveedor)

router.delete('/',deleteProveedor)



module.exports = router