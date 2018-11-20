function calculateColumnWidth(column, end) {
  return `${column}*${end}=${column * end}`.length + 2;
}

function createExpressionString(column, row, width) {
  return `${column}*${row}=${column * row}`.padEnd(width);
}

function createTable(start, end) {
  let table = "";

  for (let row = start; row <= end; ++row) {
    for (let column = start; column <= row; ++column) {
      const width = calculateColumnWidth(column, end);
      const expression = createExpressionString(column, row, width);
      table += expression;
    }
    table += '\n';
  }

  return table;
}

module.exports = {
  calculateColumnWidth,
  createExpressionString,
  createTable
}