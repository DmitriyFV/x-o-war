const box = document.querySelector(".box");
const rows = Array.from(box.querySelectorAll(".row"));
const cells = [
  Array.from(rows[0].querySelectorAll(".cell")),
  Array.from(rows[1].querySelectorAll(".cell")),
  Array.from(rows[2].querySelectorAll(".cell")),
];

const state = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const player1 = "X";
const player2 = "O";

let currentPlayer = player1;

for (let i = 0; i < cells.length; i++) {
  for (let j = 0; j < cells.length; j++) {
    function cellClick() {
      onClick(i, j);
    }
    cells[i][j].addEventListener("click", cellClick);
  }
}

function onClick(rowIndex, cellIndex) {
  if (state[rowIndex][cellIndex] === null) { currentPlayer;
  state [rowIndex][cellIndex] = currentPlayer;
  }
  render();
  const isWin = check(currentPlayer);
  if (isWin) {
    alert("Player:" + currentPlayer + "won!");
    reset ()
    render ();
  } else {
    next();
  }
}
function render() {
  for (let i = 0; i < state.length; i++) {
    for (let j = 0; j < state.length; j++) {
      const cross = cells[i][j].querySelector(".cross");
      const zero = cells[i][j].querySelector(".zero");

      if (state[i][j] === player1) {
        cross.classList.remove("hidden");
        zero.classList.add("hidden");
      }
      if (state[i][j] === player2) {
        cross.classList.add("hidden");
        zero.classList.remove("hidden");
      }
    }
  }
}

function next() {
  if (currentPlayer === player1) {
    currentPlayer = player2;
    return;
  }
  if (currentPlayer === player2) {
    currentPlayer = player1;
  }
}

function check(player) {
  const v =
    (state[0][0] === player &&
      state[1][0] === player &&
      state[2][0] === player) ||
    (state[0][1] === player &&
      state[1][1] === player &&
      state[2][1] === player) ||
    (state[0][2] === player &&
      state[1][2] === player &&
      state[2][2] === player);

  const h =
    (state[0][0] === player &&
      state[0][1] === player &&
      state[0][2] === player) ||
    (state[1][0] === player &&
      state[1][1] === player &&
      state[1][2] === player) ||
    (state[2][0] === player &&
      state[2][1] === player &&
      state[2][2] === player);

  const diagonalLeftRight =
    state[0][0] === player && state[1][1] === player && state[2][2] === player;

  const diagonalRightLeft =
    state[0][2] === player && state[1][1] === player && state[2][0] === player;

  return v || h || diagonalLeftRight || diagonalRightLeft;
}
function reset () {


    for (let i = 0; i < state.length; i++) {
        for (let j = 0; j < state.length; j++) {
            state [i] [j] = null;
        }
}
}