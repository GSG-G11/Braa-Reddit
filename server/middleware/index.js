
const {veryfy} = require('../utils/cookies/cookiesPromise')
const customError =require('../controler/error')
const authHome=(req,res,next)=>{
  const {id}= req.cookies
if(!id){
    res.redirect('/signup')
}else{ 
    veryfy(id).then(token=>req.userId=token.id).then(next()).catch(err=>next(err))
}
} 

const authUser=(req,res,next)=>{
    const {id}= req.cookies
    if(!id){  
        next()
    }else{
        veryfy(id).then(data=>res.redirect('/home')).catch(err=>next(err))
    }
} 

module.exports={authHome,authUser}  