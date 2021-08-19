const TaskController = require('./controlTask');

module.exports = function(app){   
    app.post('/api/product', TaskController.createTask);
    app.get('/api/product', TaskController.getAllTasks);
    app.get('/api/product/back', TaskController.getBacklog);
    app.get('/api/product/prog', TaskController.getProgress);
    app.get('/api/product/comp', TaskController.getComplete);
    app.get('/api/product/:id', TaskController.getTask);
    app.put('/api/product/:id', TaskController.updateTask);
    app.delete('/api/product/:id', TaskController.deleteTask);
}
