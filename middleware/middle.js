import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import {checkuser} from '../model/users.js'

const authenticate = (req,res,next)=>{
    let {cookie} = req.headers
   let tokenInHeader= cookie && cookie.split('=')[1]
   if(tokenInHeader===null)res.send(401)
   jwt.verify(tokenInHeader,process.env.SECERT_Key,
     (err,User)=>{
         if(err)return res.sendStatus(403)
         req.User=User
     next()
     })
 
 }
 const auth =async(req,res,next) =>{
    const {username, userPassword} =  req.body
    console.log('This is above the hashed password'+username,userPassword)
    const hashedPassword  = await checkuser(username,userPassword)
    console.log('typeof hashed password is'+typeof hashedPassword);
    bcrypt.compare(userPassword,hashedPassword,(err,result)=>{  
        // if(err) throw err ;
        if(result === true){
            const {username} = req.body
            const token = jwt.sign({username:username},
             process.env.SECERT_KEY,{expiresIn:'1h'})
            res.cookie('jwt',token,{httpsOnly:false})
          next()
        }else {
            res.send ({msg:'The username or password is incorrect'})
        }
    })
}

const middelware = (req,res,next)=>{
    console.log('I would like to login please.');
    req.body.respond === "Welcome" ? next(): res.send('Failed to login,please retry again')
}

export {authenticate,auth , middelware}