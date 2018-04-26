import express from 'express';
import User from '../models/User';

const router = express.Router();

router.post('/', (req, res) => {
   const { credentials} = req.body; //get cred(Email and password) from req.body 
   //Find user with email return promise if user exist and password is valid do soomething otherwise return error
   User.findOne({email: credentials.email}).then(user => {
       if (user && user.isValidPassword(credentials.password)){
           res.json({user: user.toAuthJSON()});
       }else{
            res.status(400).json({errors:{global: "Invalid credentials"}})
       }
   });
});
export default router;

//in express you need body parser to parse the body