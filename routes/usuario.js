const express = require("express")
const router = express.Router()
//Essa função abaixo ja pode retirar(foi subistituida)
/*router.get('/registro', function (req, res) {
    res.render("usuarios/registro")
})*/
router.get('/index', function (req, res) {
    res.render("usuarios/index")
})

router.get("/login", function (req, res) {
    res.render("usuarios/login")
})

//usuario fazer logout do sistema 
router.get("/logout", function(req, res){
    req.logout()
    req.flash("success_msg", "Deslogado com sucesso")
    res.redirect("/")
})

router.get('/documentacao', function (req, res) {
    res.render("usuarios/alunos/documentacaoAluno")
})

router.get('/alunos', function (req, res) {
    res.render("usuarios/professor/alunos")
})

router.get('/novoaluno', function (req, res) {
    res.render("usuarios/professor/novoaluno")
})

router.get('/listarAlunos', function (req, res) {
    res.render("usuarios/professor/listarAlunos")
})

router.get('/editar', function (req, res) {
    res.render("usuarios/editar")
})

router.get('/editarAluno', function (req, res) {
    res.render("usuarios/professor/editarAluno")
})

router.get('/orientadores', function (req, res) {
    res.render("usuarios/professor/orientadores")
})

router.get("/cadastrarOrientador", function (req, res) {
    res.render("usuarios/professor/cadastrarOrientador")
})

router.get("/editarOrientador", function (req, res) {
    res.render("usuarios/orientador/editarOrientador")
})

router.get("/listarOrientadores", function (req, res) {
    res.render("usuarios/professor/listarOrientadores")
})


//Sempre fica por ultimo
module.exports = router 