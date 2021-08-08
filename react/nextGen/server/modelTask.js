const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: [true, "Name is required"],
        minlength: [4, "Task Name must be at least 4 characters long"]
    },
    status: {type: String},
    dueDate: {type: Date}
}, { timestamps: true });
module.exports.Task = mongoose.model('Task', TaskSchema);