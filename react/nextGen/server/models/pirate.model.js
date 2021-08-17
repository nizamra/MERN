const mongoose = require('mongoose');
const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    image: {
        type: String,
        required: [true, "Image URL is required"],
        },
    treasures: {
        type: Number,
        required: [true, "Number of treasure chests is required"],
        },
    position: {
        type: String,
        required: [true, "Crew position is required"],
        },
    catche: {
        type: String,
        required: [true, "Catch phrase is required"]
        },
    pegLeg: {
        type: Boolean
        },
    eyePatch: {
        type: Boolean
        },
    hookHand: {
        type: Boolean
        },
}, { timestamps: true });
module.exports.Pirate = mongoose.model('Pirate', PirateSchema);
