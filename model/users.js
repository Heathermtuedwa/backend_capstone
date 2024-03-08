import mysql from 'mysql2';
import{config}from 'dotenv';

config()

const pool=mysql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DB
}).promise()


const adduser = async(username,userPassword,userAge,Gender,userRole,userProfile)=>{
    await pool.query(`
     INSERT INTO User (username,userPassword,userAge,Gender,userRole,userProfile)
     VALUES (?,?,?,?,?,?);
    `,[username,userPassword,userAge,Gender,userRole,userProfile])
}

const checkuser = async (username)=>{
    const [[userPassword]] = await pool.query(`
      SELECT userPassword FROM User WHERE username = ?
    `,[username])
    return password
}

const getusers = async () => {
    const [result] = await pool.query(`SELECT * FROM User`);
    return result;
}

const getuser = async ( userID ) => {
    const [result] = await pool.query(`SELECT * FROM User WHERE userID = ?`, [ userID ]);
    return result;
}

const deleteuser = async(userID)=>{
    const [user] = await pool.query(`
        DELETE FROM User 
        where userID =?
    
    `,[userID])
}







export {adduser,checkuser,getusers,getuser,deleteuser}  