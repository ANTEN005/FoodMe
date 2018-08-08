import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

//TODO: add uniqueness and email validations to email field
const schema = new mongoose.Schema({
    name: {type: String},
    ingredients: {type: String},
    description: {type: String},
    email: {type: String}
    }
);


export default mongoose.model('Recipe', schema);