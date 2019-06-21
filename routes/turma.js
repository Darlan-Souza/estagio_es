const express = require("express")
const router = express.Router()

router.get('/', function (req, res) {
    res.render("turma/index")
})

router.get('/addTurma', function (req, res) {
    res.render("turma/addTurma")
})

router.get('/listarTurma', function (req, res) {
    res.render("turma/listarTurma")
})

router.get('/editarTurma', function (req, res) {
    res.render("turma/editarTurma")
})

router.get('/alunosTurma', function (req, res) {
    res.render("turma/alunosTurma")
})

//Sempre fica por ultimo
module.exports = router 