const express = require("express")
const router = express.Router()

router.get('/exibir_todos', function(req, res){
    res.render("estagio/exibir_todos")
})

router.get('/cadastro', function (req, res) {
    res.render("estagio/cadastro")
})
router.get('/index', function (req, res) {
    res.render("estagio/index")
})

//Sempre fica por ultimo
module.exports = router 