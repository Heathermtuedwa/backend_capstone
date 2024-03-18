import express from 'express';
import {config}from 'dotenv';
import {getProducts,getproduct,updateProduct,deleteProduct,addProduct} from './model/products.js';
import {adduser,checkuser,getuser,deleteuser,getusers}from './model/users.js'
import cookieParser from "cookie-parser";
import cors from 'cors';
import bcrypt from 'bcrypt'
import {auth} from './middleware/middle.js'

config()

const app = express();
app.use(cors({
    origin:'http://localhost:8080',
    credentials:true
}))
app.use(express.json());
app.use (cookieParser())

app.use(express.static("./Public"))



let PORT = process.env.PORT || 3327


app.post('/user',(req,res)=>{
    const{username,userPassword,userAge,Gender,userRole,userProfile}=req.body
   bcrypt.hash(userPassword,10,async(err,hashPwd)=>{
        if(err) throw err
        await adduser(username,hashPwd,userAge,Gender,userRole,userProfile)
    })
    res.send({
        msg:"You have successfully created an account"
    })
})
 
app.post('/login',auth, async(req,res)=>{
    // const{username,userPassword}=req.body
    //  const isLoggedIn = await checkuser(username,userPassword)
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


app.patch('/products/:prodID',async(req,res)=>{
    let{Productname, Quantity, Amount,prodURL,description}=req.body
    const [product] = await getproduct(+req.params.prodID)
    Productname ? Productname : {Productname} = product
    Quantity ? Quantity : {Quantity} = product
    Amount ? Amount : {Amount} = product
    prodURL ? prodURL : {prodURL} = product
    description ? description : {description} = product
    await updateProduct(Productname, Quantity, Amount, prodURL, description, +req.params.prodID)
    res.json(await getProducts())
})


app.get('/user',async(req,res)=>{
    res.send(await getusers())
})

  app.get('/user/:userID',async(req,res)=>{
       res.send(await getuser(+req.params.userID))
  })

  app.delete('/user/:userID',async(req,res)=>{
    res.send(await deleteuser(+req.params.userID))
})

// app.get('/cart/:cartID',async(req,res)=>{
//     res.send(await getcart(+req.params.cartID))
// })

// app.post('/cart',async(req,res)=>{
//     const { cartID,productsId,userId,quantity,total} = req.body
//     await addcart( cartID,productsId,userId,quantity,total)
//     res.send(await getcart())
// })



app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT)
})
