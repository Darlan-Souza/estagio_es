const express = require("express")
const router = express.Router()

router.get('/editar', function (req, res) {
    res.render("professor/editar")
})

router.get('/index', function (req, res) {
    res.render("professor/index")
})

router.get('/registro_professor', function (req, res) {
    res.render("professor/registro_professor")
})

//Sempre fica por ultimo
module.exports = router 