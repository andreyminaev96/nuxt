const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const passportStrategy = require('./middleware/passport-strategy');
const authRoutes = require('./routes/auth.routes');
const postRoutes = require('./routes/post.routes');
const commentRoutes = require('./routes/coment.routes');
const keys = require('./keys');
const app = express();

mongoose.connect(keys.MONGO_URI, { useFindAndModify: false })
    .then(() => console.log('MongoDB connected ....'))
    .catch(error => console.log(error))

app.use(passport.initialize());
passport.use(passportStrategy);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

module.exports = app;