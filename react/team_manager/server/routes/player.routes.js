const PlayerController = require('../controllers/player.contoller');
module.exports = function(app){
    app.get('/api/getplayers', PlayerController.index);
    app.post('/api/addplayers', PlayerController.createPlayer);
}
