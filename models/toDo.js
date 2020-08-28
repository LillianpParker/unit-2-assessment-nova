const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    ToDo:  { type: String, required: true },
    Completed: Boolean
});

const toDo = mongoose.model('ToDo', toDoSchema)

module.exports = toDo;