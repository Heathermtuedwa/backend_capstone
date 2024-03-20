import mysql from 'mysql2';
import{config}from 'dotenv';

config()

const pool=mysql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DB
}).promise()

const addcart = async(cartID,productsId,userId,quantity,total)=>{
    await pool.query(`
     INSERT INTO cart (cartID,productsId,userId,quantity,total)
     VALUES (?,?,?,?,?);
    `,[cartID,productsId,userId,quantity,total])
}
const getcart = async () => {
    const [result] = await pool.query(`SELECT * FROM cart`);
    return result;
}
const updateCart = async (quantity, userID, prodID) => {
    // Insert item into cart
    await pool.query(`
        INSERT INTO cart (quantity, userID, prodID) VALUES (?, ?, ?)
    `, [quantity, userID, prodID]);

    // Retrieve updated cart
    const cart = await pool.query(`
        SELECT * FROM cart
        JOIN Products ON cart.ProductsId = Product.ProductsId
        WHERE userId = ?
    `, [userID]);

    return cart[0];
};
 
const removeCartItem = async (req, res)=>{
    try{
        await deleteFromCart(req.params.prodID)
        res.json(await getCartbyUser())
    }catch(error){
        console.log(error)
        res.status(500).json({error:"Internal server error"})
    }
}
  
// const getCart =async(cartID)=>{
// const [result] = await pool.query(`
//    SELECT * FROM  cart 
//    WHERE cartID
// `,(cartID))
// return result
// }

// const deletecart = async(cartID)=>{
//     const [user] = await pool.query(`
//         DELETE FROM cart 
//         where cartID =?
    
//     `,[cartID])
// }


// const getproduct = async(prodID)=>{
//     const[result] = await pool.query(`
//       SELECT * 
//       FROM Products
//       WHERE ProductsId = ?
//     `,[prodID])
//     return result 
// }

// const getuser = async ( userID ) => {
//     const [result] = await pool.query(`SELECT * FROM User WHERE userID = ?`, [ userID ]);
//     return result;
// }


export {addcart,getcart,updateCart,removeCartItem}