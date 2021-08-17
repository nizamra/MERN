const {Pirate} = require('../models/pirate.model')

module.exports.createPirate = (request, response) => {
    const { name, image, treasures, catche, position, pegLeg, eyePatch, hookHand } = request.body;
    Pirate.create({
        name,
        image,
        treasures,
        catche,
        position,
        pegLeg,
        eyePatch,
        hookHand
    })
        .then(pirate => { console.log("success"); response.json(pirate)})
        .catch(err => response.status(400).json(err));
}

module.exports.getAllPirates = (_request, response) => {
    Pirate.find({})
        .then(pirates => response.json(pirates))
        .catch(err => response.json(err))
}

module.exports.deletePirate = (request, response) => {
    Pirate.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.status(400).json(err))
}

module.exports.getPirate = (request, response) => {
    Pirate.findOne({_id:request.params.id})
        .then(pirate => response.json(pirate))
        .catch(err => response.json(err))
}

module.exports.updatePirate = (request, response) => {
    Pirate.findOneAndUpdate({_id: request.params.id}, request.body)
        .then(updatedPirate => response.json(updatedPirate))
        .catch(err => response.status(400).json(err))
}