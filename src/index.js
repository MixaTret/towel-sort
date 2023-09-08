
// You should implement your task here.

module.exports = function towelSort(matrix) {

  if (!matrix || matrix.length === 0) {
    return [];
  }

  const newArray = [];

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      Array.prototype.push.apply(newArray, matrix[i]);
    } else {
      Array.prototype.push.apply(newArray, matrix[i].reverse());
    }
  }

  return newArray;
}


