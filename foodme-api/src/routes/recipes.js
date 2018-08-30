import express from 'express';
import MyRecipes from '../models/MyRecipes';
import authenticate from "../middleware/authenticate";
import Recipe from '../models/Recipe';

const router = express.Router();
router.use(authenticate);
router.get('/search', (req, res) => {
    MyRecipes.find({userId: req.currentUser._id}).exec((err,recipes) => {
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

router.get('/allrecipes', (req, res) => {
  Recipe.find({}).exec((err,recipes) => {
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