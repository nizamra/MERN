const { Player } = require('../models/player.models');
module.exports.index = (request, response) => {
    Player.find()
        .then(player => response.json(player))
        .catch(err => response.json(err));
}
    // The method below is new
module.exports.createPlayer = (request, response) => {
    const { playerName, preferedPosition } = request.body;
    Player.create({
        playerName,
        preferedPosition
    })
        .then(player => response.json(player))
        .catch(err => response.json(err));
}
