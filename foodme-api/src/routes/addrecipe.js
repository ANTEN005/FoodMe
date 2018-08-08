import express from 'express';
import Recipe from '../models/Recipe';
import parseErrors from '../utils/parseErrors';
import authenticate from "../middleware/authenticate";

const router = express.Router();
router.use(authenticate);

router.post('/', (req, res) => {
    Recipe.create({ ...req.body.recipe, userId: req.currentUser._id })
    .then(recipe => res.json({ recipe }))
        .catch(err => res.status(400).json({errors: parseErrors(err.errors)}));      
});

export default router;