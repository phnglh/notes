/**
 * @param {number} rows
 */
var Spreadsheet = function (rows) {
  this.rows = rows;
  this.cells = new Map();
};

/**
 * @param {string} cell
 * @param {number} value
 * @return {void}
 */
Spreadsheet.prototype.setCell = function (cell, value) {
  this.cells.set(cell, value);
};

/**
 * @param {string} cell
 * @return {void}
 */
Spreadsheet.prototype.resetCell = function (cell) {
  this.cells.delete(cell);
};

/**
 * @param {string} formula
 * @return {number}
 */
Spreadsheet.prototype.getValue = function (formula) {
  const expr = formula.slice(1);
  const parts = expr.split("+");
  let sum = 0;

  for (const token of parts) {
    if (token.length === 0) continue;
    if (this._isNumber(token)) {
      sum += Number(token);
    } else {
      sum += this.cells.get(token) ?? 0;
    }
  }

  return sum;
};

/**
 * @param {string} s
 * @return {boolean}
 */
Spreadsheet.prototype._isNumber = function (s) {
  return !isNaN(s);
};

/**
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */
