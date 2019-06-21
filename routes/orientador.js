const express = require("express")
const router = express.Router()

router.get('/', function (req, res) {
    res.render("orientador/index")
})

router.get("/cadastrarOrientador", function (req, res) {
    res.render("orientador/cadastrarOrientador")
})

router.get("/editarOrientador", function (req, res) {
    res.render("orientador/editarOrientador")
})

router.get("/listarOrientadores", function (req, res) {
    res.render("orientador/listarOrientadores")
})

//Sempre fica por ultimo
module.exports = router 