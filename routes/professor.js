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


router.get("/login", function (req, res) {
    res.render("professor/login")
})

//usuario fazer logout do sistema 
router.get("/logout", function(req, res){
    req.logout()
    req.flash("success_msg", "Deslogado com sucesso")
    res.redirect("/")
})

//Sempre fica por ultimo
module.exports = router 