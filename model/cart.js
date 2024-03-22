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
     return result 
}     INSERT INTO cart (cartID,productsId,userId,quantity,total)
     VALUES (?,?,?,?,?);
    `,[cartID,productsId,userId,quantity,total])
}

const updateCart = async (quantity, userID, prodID) => {
    // Insert item into cart
    await pool.query(`
        INSERT INTO cart (quantity, userID, prodID) VALUES (?, ?, ?)
    `, [quantity, userID, prodID]);
}

    // Retrieve cart
    const getcart = async(id) => {
        let  [result]= await pool.query(
            //The function "getcart" gets cart data for a user from a database
          `SELECT cart.cartID, Products.ProductsId, Products.Productname, Products.description, Products.Amount, Products.prodURL, Products.Quantity
      FROM cart
      INNER JOIN User ON cart.userId = User.userId
      INNER JOIN Products ON cart.ProductsId = Products.ProductsId
      WHERE cart.userId = ?
       `,
          [id]
          //If error, log and return error  , else return results.
        //   (err, results) => {
        //     if (err) {
        //       console.log(err);
        //       result(err, null);
        //     } else {
        //      return results;
        //     }
        //   }
        );
        return result;
      };
 

     const cart = async () => {
        const [result] = await pool.query(`
        SELECT * FROM cart
        `)
        return result
      }
        
      const addedInCart = async (userId) => {
        const [cartItems] = await pool.query(`
            SELECT
                cart.cartID,
                Products.ProductsId,
                Products.Productname,
                Products.description,
                Products.Amount,
                Products.prodURL,
                Products.Quantity
            FROM
                cart
            JOIN
                User ON cart.userId = User.userId
            JOIN
                Products ON cart.ProductsId = Products.ProductsId
            WHERE
                cart.userId = ?
        `, [userId]);
        return cartItems;
    }
     console.log (await addedInCart('5'))


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


export {addcart,getcart,updateCart,removeCartItem,cart,addedInCart}