require('dotenv').config()
const React = require('react');
const mongoURI = process.env.MONGO_URI;
const todo = require('./models/toDo.js');
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();

//Middleware
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(methodOverride('_method'));

//Mongoose Connect
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

//Index Route

app.get('/to-do', (req, res) => {
    res.render('Index', {
        title: "To Do List", 
        todo: todo})
})

app.listen(3000, () => {
    console.log('Up and Running on 3000');
});