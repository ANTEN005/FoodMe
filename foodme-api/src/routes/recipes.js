import express from 'express';
import Recipe from '../models/Recipe';

const router = express.Router();

router.get('/search', (req, res) => {
    Recipe.find({}).exec((err,recipes) => {
        if(err){
        return res.json({'success':false,'message':'Some Error'});
        }
        if(recipes.length){
          return res.json({'success':true,'message':'Successfully fetched all your recipes',recipes});
        }
        else{
          return res.json({'success':false,'message':'No recipes were found'});
        }
      });

});


export default router;