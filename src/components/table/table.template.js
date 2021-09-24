const CODES = {
  A: 65,
  Z: 90
}

/* function createCell() {
  return  `
    <div class="cell" contenteditable>B2</div>
  `
} */

function toColumn(el) {
  return /* html*/ `
    <div class="column">
      ${el}
    </div>
  `
}

function createRow(content) {
  return /* html*/ `
    <div class="row">
      <div class="row-info"></div>
      <div class="row-data">${content}</div>
    </div>
  `
}
function toChar(_, idx) {
  return String.fromCharCode(CODES.A + idx)
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A
  const rows = []

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')

  rows.push(createRow(cols))

  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow())
  }

  return rows.join('') 
}
