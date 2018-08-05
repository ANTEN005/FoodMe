import express from 'express';
import Recipe from '../models/Recipe';
import parseErrors from '../utils/parseErrors';

const router = express.Router();

router.post('/', (req, res) => {
    const {name, ingredients, description} = req.body.recipe;
    const recipe = new Recipe({name, ingredients, description});
    recipe
        .save()
        .then(res.json({recipe}))
        .catch(err => res.status(400).json({errors: parseErrors(err.errors)})); //we will save user, it will check for uniqueness, if something is wrong we want to catch the error.       
});

export default router;