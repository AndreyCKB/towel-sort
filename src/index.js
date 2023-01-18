
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
    
  const result = [];
  let lastIndex, columns;
  for(let rowIndex = 0; rowIndex < matrix.length;  rowIndex++){
    
    columns = matrix[rowIndex];
    lastIndex = columns.length - 1;
    for(let columnIndex = 0; columnIndex <= lastIndex; columnIndex++){
      if(rowIndex & 1) {
        result.push(columns[lastIndex - columnIndex]);
      }else{
        result.push(columns[columnIndex]);
      }    
    }
      
  }
  return result;
}
