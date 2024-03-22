import { config } from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import {checkuser, getuser,getuserEmail} from '../model/users.js'

config()

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

 const auth = async (req, res, next) => {
    const { userPasswprd, username } = req.body;
    const hashedPassword = await checkuser(username);
    const userdetails = await getuserEmail(username)
    bcrypt.compare(userPasswprd, hashedPassword, (err, result) => {
        if (err) throw err;
        if (result === true) {
            getUserRole(username)
                .then(userRole => {
                    getuser(username) // Assuming you have a function to get all user details
                        .then(userDetails => {
                            const tokenPayload = {
                                username:username,
                                userRole: userRole,
                                // Include other user details here
                                userID: userDetails.userID,
                                userAge: userDetails.userAge,
                                Gender: userDetails.Gender,
                                // Add more fields as needed
                            };
                            const token = jwt.sign(tokenPayload, process.env.SECRET_KEY, { expiresIn: '1h' });
                            res.cookie('jwt', token, { httpOnly: false, expiresIn: '1h' });
                            res.send({
                                userdetails: userDetails,
                                token: token,
                                msg: 'I have logged in!!! YAY!!!',
                                user: tokenPayload
                            });
                            next();
                        })
                        .catch(error => {
                            console.error('Error getting user details:', error);
                            res.status(500).json({ error: 'Internal server error' });
                        });
                })
                .catch(error => {
                    console.error('Error getting user role:', error);
                    res.status(500).json({ error: 'Internal server error' });
                });
        } else {
            res.send({ msg: 'The email or password is incorrect' });
        }
    });
};



//  const auth =async(req,res,next) =>{
//     const {username, userPassword} =  req.body
//     console.log('This is above the hashed password'+username,userPassword)
//     const hashedPassword  = await checkuser(username,userPassword)
//     console.log('typeof hashed password is'+typeof hashedPassword);
//     bcrypt.compare(userPassword,hashedPassword,(err,result)=>{  
//         // if(err) throw err ;
//         if(result === true){
//             const {username} = req.body
//             const token = jwt.sign({username:username},
//              process.env.SECERT_KEY,{expiresIn:'1h'})
//             res.cookie('jwt',token,{httpsOnly:false})
//             res.send({
//                 token:token,
//                 msg:'You have logged in successfully!!'
//             })
//           next()
//         }else {
//             res.send ({msg:'The username or password is incorrect'})
//         }
//     })
// }

const middelware = (req,res,next)=>{
    console.log('I would like to login please.');
    req.body.respond === "Welcome" ? next(): res.send('Failed to login,please retry again')
}

export {authenticate,auth , middelware}