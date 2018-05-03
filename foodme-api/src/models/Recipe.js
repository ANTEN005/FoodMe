import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import uniqueValidator from 'mongoose-unique-validator';
//TODO: add uniqueness and email validations to email field
const schema = new mongoose.Schema({
    name: {type: String}, 
    ingredients: {type: String},
    description: {type: String},
    }
);


export default mongoose.model('Recipe', schema);