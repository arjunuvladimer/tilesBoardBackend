//gameController.js
//Import Game Model
Game = require('../model/gameModel');

var constants = require('../gameEngine/gameConfig');
var xyToPos =  require('../gameEngine/gameBoard');

//For index
exports.index = function (req, res) {
  Game.get(function (err, game) {
        if (err)
            res.json({
                status: "error",
                message: err
            });

            let squares = [];
            let squareSize = (constants.gameHeight) / constants.numRows;
            let colors = ["blue", "red", "green", "yellow", "orange", "pink", "purple"];
          
            let x, y;
            for (x = 0; x < constants.numColumns; x++) {
              for (y = 0; y < constants.numRows; y++) {
                let color = colors[Math.floor(Math.random() * colors.length)];
                squares.push({
                  x: y * squareSize,
                  y: x * squareSize,
                  width: squareSize,
                  height: squareSize,
                  color: color,
                  position: xyToPos(y, x),
                })
              }
            }

        res.json({
            status: "success",
            message: "Got Squares Successfully!",
            data: squares       
        });
    });
};