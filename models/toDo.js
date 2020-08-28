const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    ToDo:  { type: String, required: true },
    Completed: Boolean
});

const ToDo = mongoose.model('ToDo', toDoSchema)

module.exports = ToDo;