const { Task } = require('./modelTask');

module.exports.createTask = (request, response) => {
    const { taskName, status, dueDate } = request.body;
    Task.create({taskName, status, dueDate})
        .then(task => {
        response.json(task)})
        .catch(err => {response.status(400).json(err);});
}

module.exports.getAllTasks = (request, response) => {
    Task.find({})
        .then(tasks => response.json(tasks))
        .catch(err => response.status(400).json(err))
}
module.exports.getBacklog = (request, response) => {
    Task.find({status:"toDo"}).sort( { "dueDate": 1 } )
        .then(tasks => response.json(tasks))
        .catch(err => response.status(400).json(err))
}
module.exports.getProgress = (request, response) => {
    Task.find({status:"doning"}).sort( { "dueDate": 1 } )
        .then(tasks => response.json(tasks))
        .catch(err => response.status(400).json(err))
}
module.exports.getComplete = (request, response) => {
    Task.find({status:"done"}).sort( { "dueDate": 1 } )
        .then(tasks => response.json(tasks))
        .catch(err => response.status(400).json(err))
}

module.exports.getTask = (request, response) => {
    Task.findOne({_id:request.params.id})
        .then(task => response.json(task))
        .catch(err => response.status(400).json(err))
}

module.exports.updateTask = (request, response) => {
    // Task.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators:true})
    Task.findOneAndUpdate({_id: request.params.id}, request.body)
        .then(updatedTask => response.json(updatedTask))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteTask = (request, response) => {
    Task.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.status(400).json(err))
}
