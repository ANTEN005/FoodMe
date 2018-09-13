import express from 'express';
import Recipe from '../models/Recipe';
import authenticate from "../middleware/authenticate";

const router = express.Router();
router.use(authenticate);
router.get('/search', (req, res) => {
    Recipe.find({}, { _id: false }).exec((err,recipes) => {
        if(err){
        return res.json({'success':false,'message':'Some Error'});
        }
        if(recipes.length){
          return res.json({'success':true,'message':'Successfully fetched all your recipes',recipes});
        }
        else{
          return res.json({error:"Invalid credentials"})        }
      });

});


export default router;