const Players = (xOrO) => {

    var playerOneFigure;
    var playerTwoFigure;

    const showPlayers = () => {
        console.log(`player one chose ${playerOneFigure}`);
        console.log(`player two chose: ${playerTwoFigure}`);
    }

    const playerTwo = () => {
        if(playerOneFigure == "X"){
            playerTwoFigure = "O";
        } else {
            playerTwoFigure = "X";
        }
    }
    
    const playerOne = () => {
        playerOneFigure = xOrO;
        playerTwo();
        showPlayers();
    }

    return {playerOne};
};

let xChoice = document.querySelector('#xChoice');
let oChoice = document.querySelector('#oChoice');
let playerChoiceContainer = document.querySelector('#playerChoiceContainer');

//if player clicks 'x'
xChoice.addEventListener('click', () => {
    const playerFigures = Players('X');
    playerFigures.playerOne();
    playerChoiceContainer.remove();
});

//if players clicks 'o'
oChoice.addEventListener('click', () => {
    const playerFigures = Players('O');
    playerFigures.playerOne();
    playerChoiceContainer.remove();
});

const gameBoard = (() => {
    
    const drawField = (size) => {
        for (let i=1; i<=size; i++){
            let iDiv = document.createElement('div');
            iDiv.id = i;
            iDiv.className = 'boardCell';
            document.querySelector('#boardCellContainer').appendChild(iDiv);
        }
    }

    return{drawField};

})();

gameBoard.drawField(9);
