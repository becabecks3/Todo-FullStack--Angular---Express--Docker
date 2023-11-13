const mongoose = require('mongoose');
require('../utils/mongo_db')

const tasksSchema = {
    description : {
        type: String,
        required: true,
        unique: true
    },
    importance:{
        type: String,
        // required: true,
    }
}

const schema = new mongoose.Schema(tasksSchema)

const todo = mongoose.model('tasks', schema);

module.exports = todo;