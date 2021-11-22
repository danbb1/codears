const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const getSegmentValues = (startCell, puzzle) => {
  const segmentNumbers = []
  for (let i = startCell[0]; i < startCell[0] + 3; i++) {
    for (let j = startCell[1]; j < startCell[1] + 3; j++) {
      if (puzzle[i][j] > 0) segmentNumbers.push(puzzle[i][j])
    }
  }

  return segmentNumbers
}

const getStartCell = cellValue => Math.floor(cellValue / 3) * 3

const sudoku = puzzle => {

  // Clone puzzle to mutate
  const clonedPuzzle = puzzle.map(x => x)

  // Check if all values are filled and return
  if (clonedPuzzle.every(row => row.every(col => col > 0))) return clonedPuzzle

  puzzle.forEach((row, rowIndex) => {
    const rowUsedNumbers = row.filter(x => x > 0)
    // console.log(rowUsedNumbers)
    const rowSegmentStart = getStartCell(rowIndex)
    row.forEach((col, colIndex) => {
      if(col > 0) return
      const colSegmentStart = getStartCell(colIndex)
      const segmentUsedNumbers = getSegmentValues([rowSegmentStart, colSegmentStart], clonedPuzzle)
      const colUsedNumbers = clonedPuzzle.map(r => r[colIndex] > 0 ? r[colIndex] : null).filter(r => r)

      const possibleNumbers = numbers.filter(n => !rowUsedNumbers.includes(n) && !colUsedNumbers.includes(n) && !segmentUsedNumbers.includes(n))

      if (possibleNumbers.length === 1) {
        [clonedPuzzle[rowIndex][colIndex]] = possibleNumbers
      }
    })
  })

  return sudoku(clonedPuzzle)
}

const puzzle = [
  [5,3,0,0,7,0,0,0,0],
  [6,0,0,1,9,5,0,0,0],
  [0,9,8,0,0,0,0,6,0],
  [8,0,0,0,6,0,0,0,3],
  [4,0,0,8,0,3,0,0,1],
  [7,0,0,0,2,0,0,0,6],
  [0,6,0,0,0,0,2,8,0],
  [0,0,0,4,1,9,0,0,5],
  [0,0,0,0,8,0,0,7,9]];

// sudoku(puzzle)

console.log(sudoku(puzzle))
