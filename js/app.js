const cases = document.querySelectorAll('.case');
let currentTurn = 'O';
let moves = 0;

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  const checkForWin = () => {
    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (
        cases[a].innerHTML === cases[b].innerHTML &&
        cases[b].innerHTML === cases[c].innerHTML &&
        cases[a].innerHTML !== ""
      ) {
        cases[a].style.backgroundColor = "lightgreen";
        cases[b].style.backgroundColor = "lightgreen";
        cases[c].style.backgroundColor = "lightgreen";
        setTimeout(() => {
          alert(`You wins ! Click OK to restart the game.`);
          moves = 0;
          currentPlayer = "O";
          cases.forEach((box) => {
            box.innerHTML = "";
            box.style.backgroundColor = "";
          });
        }, 500);
        return;
      }
    }
  };

cases.forEach(element => {
  element.addEventListener('click', function() {
    if (element.innerHTML === '') {
        moves++;
        element.innerHTML = `<div class="${currentTurn.toLowerCase()}">${currentTurn}</div>`;
        if (currentTurn === "O") {
            currentTurn = "X";
          } else {
            currentTurn = "O";
          }
          checkForWin();
    }
    if (moves === 9) {
        moves = 0;
        currentPlayer = "O";
        cases.forEach((element) => {
          element.innerHTML = "";
        });
        alert("The game is over! Click OK to restart the game.");
      }
  });
});