const ProductController = require('./controlTask');

module.exports = function(app){   
    app.post('/api/product', ProductController.createTask);
    app.get('/api/product', ProductController.getAllTasks);
    app.get('/api/product/back', ProductController.getBacklog);
    app.get('/api/product/prog', ProductController.getProgress);
    app.get('/api/product/comp', ProductController.getComplete);
    app.get('/api/product/:id', ProductController.getTask);
    app.put('/api/product/:id', ProductController.updateTask);
    app.delete('/api/product/:id', ProductController.deleteTask);
}
