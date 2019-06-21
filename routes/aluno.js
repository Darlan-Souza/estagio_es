const express = require("express")
const router = express.Router()

router.get('/', function (req, res) {
    res.render("alunos/index")
})

router.get('/documentacaoAluno', function (req, res) {
    res.render("alunos/documentacaoAluno")
})

router.get('/novoaluno', function (req, res) {
    res.render("alunos/novoaluno")
})

router.get('/listarAlunos', function (req, res) {
    res.render("alunos/listarAlunos")
})

router.get('/editarAluno', function (req, res) {
    res.render("alunos/editarAluno")
})

//Sempre fica por ultimo
module.exports = router 