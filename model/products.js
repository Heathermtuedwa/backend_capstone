import mysql from 'mysql2';
import{config}from 'dotenv';
import bcrypt from  'bcrypt';

config()

const pool=mysql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DB
}).promise()

const getProducts=async()=>{
    const[result]=await pool.query(`
        SELECT * 
        FROM Products
    `)
    return result
}

const getproduct = async(prodID)=>{
    const[result] = await pool.query(`
      SELECT * 
      FROM Products
      WHERE ProductsId = ?
    `,[prodID])
    return result 
}

 
const addProduct= async( Productname, Quantity, Amount,prodURL,description)=>{
    let [product] = await pool.query(`
    INSERT INTO Products (Productname, Quantity, Amount,prodURL,description) VALUES (?,?,?,?,?)
    `,[ Productname, Quantity, Amount,prodURL,description])
    return getProducts(product.insertID)
}

const updateProduct= async(Productname,prodID)=>{
    const [product] = await pool.query(`
       UPDATE Products SET Productname = ? 
       WHERE (id=?)
    `,[Productname,prodID])
    return getProducts(product.insertID)
}
   

const deleteProduct = async(productsId)=>{
    const [product] = await pool.query(`
        DELETE FROM Products 
        where productsId =?
    
    `,[productsId])
}

// const addproduct = async(productname,ProductsId)=>{
//     const product = await pool.query(`
//      INSERT INTO Products (productname,ProductsId)
//        VALUES (?,?);
//     `,[productname,ProductsId])
// }




export {getProducts,getproduct,updateProduct,deleteProduct,addProduct}