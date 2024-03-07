import express from 'express';
import {config}from 'dotenv';
import {getProducts,getproduct,updateProduct,deleteProduct,addProduct} from './model/products.js';

config()

const app = express();
app.use(express.json());

let PORT = process.env.PORT || 3327


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






app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT)
})
