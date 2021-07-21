export class Matrix {
  constructor(matrix) {
    let splitRows = matrix.split("\n");
    let rows = []
    let columns = [];
    splitRows.forEach(r => {rows.push(r.split(" "))});
    
    for (let c = 0; c < rows[0].length; c++) {
      let col = [];
      for (let r = 0; r < rows.length; r++) {
        col.push(rows[r][c]);
      }
      columns.push(col);
    }

    let rowNums = [];
    let colNums = [];

    rows.map(row => {
      let r = [];
      row.forEach(n => {
        r.push(parseInt(n));
      })
      rowNums.push(r);
    });

    columns.map(col => {
      let c = [];
      col.forEach(n => {
        c.push(parseInt(n));
      })
      colNums.push(c);
    });

    this._rows = rowNums;
    this._columns = colNums;
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    return this._columns;
  }

  set rows(r) {
    this._rows = r;
  }

  set columns(c) {
    this._columns = c;
  }
}


