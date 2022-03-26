const {join} = require('path');
const app = require('../app');
const router = require('express').Router();
const {signUpController,loginController} = require('../controler')
const serverError = require('../controler/error')

router.get('/signup',(req,res)=>{
    res.sendFile(join(__dirname,'..','..','public','html','signup.html'))
})
router.get('/login',(req,res)=>{
    res.sendFile(join(__dirname,'..','..','public','html','signin.html'))
})

router.post('/signup', signUpController)
router.post('/login', loginController)

router.use(serverError)

module.exports=router;