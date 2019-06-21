const express = require("express")
const router = express.Router()
//Essa função abaixo ja pode retirar(foi subistituida)
/*router.get('/registro', function (req, res) {
    res.render("usuarios/registro")
})*/
router.get('/', function (req, res) {
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

//Sempre fica por ultimo
module.exports = router 