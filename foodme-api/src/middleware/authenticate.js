import jwt from "jsonwebtoken";
import User from "../models/User"
//a middleware function that checks for authentication
//will halt other proccesses if not authenticated
export default (req, res, next) => {
    const header = req.headers.authorization; // varje request ska ha en auth header om användaren är authenticated
    let token;

    if (header) token = header.split(' ')[1];

    if (token){
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err){
                console.log(err);
                res.status(401).json({errors: {global: "Invalid token"}});
            }else{
                User.findOne({ email: decoded.email }).then(user => {
                req.currentUser = user;
                next(); //Kör den route som ursprungligen kallades på
            });
            }
        });     
    }else{
        res.status(401).json({errors:{global: "No token"}});
    }
}