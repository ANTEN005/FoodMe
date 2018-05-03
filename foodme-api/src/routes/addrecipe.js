import express from 'express';
import Recipe from '../models/Recipe';
import parseErrors from '../utils/parseErrors';

const router = express.Router();

router.post('/', (req, res) => {
    const {name, ingridients, description} = req.body;
    const recipe = new Recipe({name, ingridients, description});
    recipe
        .save()
        .then(res.json({recipe: true}))
        .catch(err => res.status(400).json({errors: parseErrors(err.errors)})); //we will save user, it will check for uniqueness, if something is wrong we want to catch the error.       
});

export default router;