const generateBoard = (wq, bq) => {
  const board = [];
  let row = [];
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      if ((x === wq[0] && y === wq[1]) || (x === bq[0] && y === bq[1])) {
        row.push(1);
      }
      row.push(0);
    }
    board.push(row);
    row = [];
  }
  return board;
};

const queenThreat = (generatedBoard) => {
  let positions = [[],[]];
  let blackPiece = positions[0];
  let whitePiece = positions[1];

  //horizontal check
  let piece = 0;
  while (piece !== 2) {
    for (let row of generatedBoard) {
      for (let column of row) {
        if (column === 1) {
          positions[piece].push([row,column]);
          piece++;
        }
      }
    }
  }

  if (whitePiece[0] === blackPiece[0]) {
    return true;
  }
  if (whitePiece[1] === blackPiece[1]) {
    return true;
  }
  if ((whitePiece[0] - blackPiece[1]) === (blackPiece[0] - whitePiece[1])) {
    return true;
  }
  return false;
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));