import mysql from 'mysql2';
import{config}from 'dotenv';
import bcrypt  from 'bcrypt';


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

const checkuser = async (username, password)=>{
    let [[{userPassword}]] = await pool.query(`
      SELECT userPassword FROM User WHERE username = ?
    `,[username])
    if (userPassword) {
        bcrypt.compareSync(password, userPassword, (err, result) => {
            if (err) {
            // Handle error
            console.error('Error comparing passwords:', err);
            return
            }
        
            // Result will be true if the passwords match, false otherwise
            if (result) {
            console.log('Passwords match!');
            return 
            }
            return;
        });
    }
    return userPassword;
}
// console.log(await checkuser('matt'))
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

const updateuser= async(username,userAge,Gender,userRole,userProfile,userID)=>{
    const [User] = await pool.query(`
       UPDATE User SET username = ? , userAge = ?, Gender = ?, userRole = ?, userProfile = ?
       WHERE userID = ?
    `,[username,userAge,Gender,userRole,userProfile,userID])
    return User
}

const getuserEmail = async (username) => {
    const [result] = await pool.query (`SELECT * FROM User WHERE username = ?`, [ username])
    return result 
}
// console.log (await getuserEmail('Tauha'))








export {adduser,checkuser,getusers,getuser,deleteuser,updateuser,getuserEmail}  