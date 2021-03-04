var constants = require('./gameConfig');

const posToXY = (position) => {
  if (position < 0 || position > constants.numRows * constants.numColumns) {
    return {
      x: -1,
      y: -1,
    }
  }

  return {
    x: position % constants.numColumns,
    y: Math.floor(position / constants.numColumns),
  }
};

const xyToPos = (x, y) => {
  if (x < 0 || y < 0) {
    return -1
  }

  return x + (constants.numRows * y)
};


// To export above functions:
module.exports = xyToPos;
