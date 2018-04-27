import express from 'express';
import User from '../models/User';
import parseErrors from '../utils/parseErrors';

const router = express.Router();

router.post('/', (req, res) => {
    const {email, password} = req.body.user;
    const user = new User({email});
    user.setPassword(password); //setPassword will hash the password
    user
        .save()
        .then(userRecord => res.json({user: userRecord.toAuthJSON()}))
        .catch(err => res.status(400).json({errors: parseErrors(err.errors)})); //we will save user, it will check for uniqueness, if something is wrong we want to catch the error.       
});

export default router;