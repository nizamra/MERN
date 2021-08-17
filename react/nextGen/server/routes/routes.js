const PirateController = require('../controllers/pirate.controller');

module.exports = function(app){
    app.post('/api/pirate', PirateController.createPirate);
    app.get('/api/pirates', PirateController.getAllPirates);
    app.get('/api/pirate/:id', PirateController.getPirate);
    app.put('/api/pirate/:id', PirateController.updatePirate);
    app.delete('/api/pirate/:id', PirateController.deletePirate);
}
