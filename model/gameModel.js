//gameModel.js
var mongoose = require('mongoose');
//schema
var gameSchema = mongoose.Schema({
    squares: {
        type: String,
        required: true
    },
    pos: {
        type: Number,
        required: true
    },
    oldColor: {
        type: String,
        required: true
    },
    newColor: {
        type: String,
        required: true
    },
});
// Export Game Model
var Game = module.exports = mongoose.model('game', gameSchema);
module.exports.get = function (callback, limit) {
    Game.find(callback).limit(limit); 
}