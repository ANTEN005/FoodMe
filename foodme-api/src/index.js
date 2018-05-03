    var express = require("express");
    var path = require("path");
    import mongoose from 'mongoose';
    import  auth from './routes/auth';
    import bodyParser from "body-parser";
    import dotenv from 'dotenv';
    import users from './routes/users';
    import recipes from './routes/recipes';
    import addrecipe from './routes/addrecipe';

    dotenv.config();
    const app = express();
    app.use(bodyParser.json());
    mongoose.connect(process.env.MONGODB_URL, {useMongoClient: true})

    app.use('/api/auth', auth);
    app.use('/api/users', users);
    app.use('/api/recipes', recipes);
    app.use('/api/addrecipe', addrecipe);

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
    });

    app.listen(8080, () => console.log('Running on localhost'))