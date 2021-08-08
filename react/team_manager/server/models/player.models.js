const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    playerName: { type: String, required : true },
    preferedPosition:{
        type:String,
        enum:['Forward','Midfielder','Goalkeeper']
    },
    game1:{type:String},
    game2:{type:String},
    game3:{type:String}
}, { timestamps: true });

module.exports.Player = mongoose.model('Player', PlayerSchema);
// const Player = mongoose.model('Player', PlayerSchema);
// module.exports = Player;