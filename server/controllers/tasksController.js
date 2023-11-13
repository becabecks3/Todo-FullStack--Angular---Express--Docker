const tasksSchema = require('../models/todoSchema');


const getTasks = async (req, res) => {
    const tasks = await tasksSchema.find()
    res.status(200).json(tasks);
}

const createTask = async (req, res) => {
    const {description, importance} = req.body;
    const newTask = await tasksSchema.create({
        description: description,
        importance: importance
    })
    res.status(200).json(newTask)
}

const editTask = async (req, res) => {
    const {description, new_description, new_importance} = req.body;
    const editedTask = await tasksSchema
                    .findOneAndUpdate({description: description}, { description: new_description, importance: new_importance}, {returnOriginal: false})
                    .select('-__v')

    res.status(200).json(editedTask)
}

const deleteTask = async(req, res) => {
    const {_id} = req.body;
    const deletedTask = await tasksSchema
                        .findOneAndDelete({id: _id})
                        .select('-__v')
    
    res.status(200).json(deletedTask)

}



module.exports = {
    getTasks,
    createTask,
    editTask,
    deleteTask

}