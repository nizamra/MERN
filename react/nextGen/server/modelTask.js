const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const TaskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        unique: [true, "Projects name must be unique"],
        required: [true, "Name is required"],
        minlength: [4, "Task Name must be at least 4 characters long"]
    },
    status: {type: String},
    dueDate: {type: Date}
}, { timestamps: true });
module.exports.Task = mongoose.model('Task', TaskSchema);
TaskSchema.plugin(uniqueValidator);