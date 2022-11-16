const { Router } = require('express');
const router = Router(); // Obtener la funcion router

const { getCliente, postCliente, deleteCliente, putCliente, patchCliente }=require("../controllers/cliente")

router.get('/',getCliente)
router.post('/',postCliente)
router.put('/',putCliente)
router.patch('/',patchCliente)
router.delete('/',deleteCliente)

module.exports = router