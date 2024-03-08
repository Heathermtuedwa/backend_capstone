import express from 'express';
import {config}from 'dotenv';
import {getProducts,getproduct,updateProduct,deleteProduct,addProduct} from './model/products.js';
import {adduser,checkuser,getusers,getuser,deleteuser}from './model/users.js'
import cookieParser from "cookie-parser";
import jwt from 'jsonwebtoken';
import cors from 'cors'
import bcrypt from 'bcrypt'

config()

const app = express();
app.use(express.json());
app.use(cors({
    origin:'http://localhost:8080',
    credential:true
}))
app.use (cookieParser())

app.use(express.static("./Public"))

let PORT = process.env.PORT || 3327


const auth =async(req,res,next) =>{
    const {username,userPassword} =  req.body
    const hashedPassword  = await checkuser(username)
    compare(userPassword,hashedPassword,(err,result)=>{  
        if(err) throw err 
        if(result === true){
            const {username} = req.body
            const token = jwt.sign({username:username},
             process.env.SECERT_KEY,{expireIn:'1h'})
            res.cookie('jwt',token,{httpsOnly:false})
          next()
        }else {
            res.send ({msg:'The username or password is incorrect'})
        }
    })
}
 
app.post('/login',auth,(req,res)=>{
    res.send({
        msg:'You have logged in successfully!!'
            })
       })
app.get('/products',async(req,res)=>{
    res.send(await getProducts())
})


app.get('/products/:prodID',async(req,res)=>{
    res.send(await getproduct(+req.params.prodID))
})

app.post('/products',async(req,res)=>{
    const { Productname, Quantity, Amount,prodURL,description} = req.body
    await addProduct( Productname, Quantity, Amount,prodURL,description)
    res.send(await getProducts())
})

app.delete('/products/:productsId',async(req,res)=>{
    res.send(await deleteProduct(+req.params.productsId))
})


app.patch('/products/:id',async(req,res)=>{
    let{Productname,productsId}=req.body
    const [product] = await getproduct(+req.params.productsId)
    Productname ? Productname=Productname :{Productname} = product
    productsId ? productsId = productsId: {productId} = productId
    console.log(product);
    await updateProduct(Productname,productsId,+req.params.productsId)
    res.json(await getProducts())
})

app.post('/User',(req,res)=>{
    const{username,userPassword,userAge,Gender,userRole,userProfile}=req.body
   bcrypt.hash(userPassword,10,async(err,hashPwd)=>{
        if(err) throw err
        await adduser(username,hashPwd,userAge,Gender,userRole,userProfile)
    })
    res.send({
        msg:"You have successfully created an account"
    })
})

app.get('/User',async(req,res)=>{
    res.send(await getusers())
})

  app.get('/user/:userID',async(req,res)=>{
       res.send(await getuser(+req.params.userID))
  })

  app.delete('/User/:userID',async(req,res)=>{
    res.send(await deleteuser(+req.params.userID))
})


app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT)
})
