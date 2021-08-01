const PersonController = require('./controller');
const ProductController = require('./controlProd');
module.exports = function(app){
    app.get('/api', PersonController.index);
    app.post('/api/people', PersonController.createPerson);
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/product', ProductController.getAllProducts);
    app.get('/api/product/:id', ProductController.getProduct);
    app.put('/api/product/:id', ProductController.updateProduct);

}
