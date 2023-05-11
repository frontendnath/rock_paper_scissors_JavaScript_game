"Use Strict"

const playOptions = {

  rock: document.getElementById('rock'),
  paper: document.getElementById('paper'),
  scissors: document.getElementById('scissors')

};

const scoreBoard = {

  wins: 0,
  losses: 0,
  draw: 0

};

const winsHtmlElement = document.getElementById('wins');
const lossesHtmlElement = document.getElementById('losses');
const drawsHtmlElement = document.getElementById('draws');

let result;

// when player picks rock

playOptions.rock.addEventListener('click', ()=> {

  // generate a random number

  const randomNumber = Math.random();

  // convert the randomNumber into a move for computer

  let computerMove;

  if(randomNumber >= 0 && randomNumber < 1/3) {

    computerMove = 'rock';

  } else if(randomNumber >= 1/3 && randomNumber < 2/3) {

    computerMove = 'paper';

  } else if(randomNumber >= 2/3 && randomNumber < 1) {

    computerMove = 'scissors';

  }

  // check for winner

  if(computerMove === 'rock') {

    result = 'Draw';

  } else if(computerMove === 'paper') {

    result = 'Lose';

  } else if(computerMove === 'scissors') {

    result = 'Win';

  }

  // display game result

  if(result === 'Win') {

    scoreBoard.wins++;

    winsHtmlElement.innerHTML = `Wins: ${scoreBoard.wins};`;

  } else if(result === 'Lose') {

    scoreBoard.losses++;
    
    lossesHtmlElement.innerHTML = `Losses: ${scoreBoard.losses};`;

  } else if(result === 'Draw') {

    scoreBoard.draw++;

    drawsHtmlElement.innerHTML = `Draws: ${scoreBoard.draw};`;

  }

  swal(
    result,
    `You picked rock, Computer picked ${computerMove}`,
    result === 'Win' ? "success" : "error"
  )

});

// when player picks paper

playOptions.paper.addEventListener('click', ()=> {

  // generate a random number

  const randomNumber = Math.random();

  // convert the randomNumber into a move for computer

  let computerMove;

  if(randomNumber >= 0 && randomNumber < 1/3) {

    computerMove = 'paper';

  } else if(randomNumber >= 1/3 && randomNumber < 2/3) {

    computerMove = 'rock';

  } else if(randomNumber >= 2/3 && randomNumber < 1) {

    computerMove = 'scissors';

  }

  // check for winner

  if(computerMove === 'paper') {

    result = 'Draw';

  } else if(computerMove === 'rock') {

    result = 'Win';

  } else if(computerMove === 'scissors') {

    result = 'Lose';

  }

  // display game result

  if(result === 'Win') {

    scoreBoard.wins++;

    winsHtmlElement.innerHTML = `Wins: ${scoreBoard.wins};`;

  } else if(result === 'Lose') {

    scoreBoard.losses++;
    
    lossesHtmlElement.innerHTML = `Losses: ${scoreBoard.losses};`;

  } else if(result === 'Draw') {

    scoreBoard.draw++;

    drawsHtmlElement.innerHTML = `Draws: ${scoreBoard.draw};`;

  }

  swal(
    result,
    `You picked paper, Computer picked ${computerMove}`,
    result === 'Win' ? "success" : "error"
  )

});

// when player picks scissors

playOptions.scissors.addEventListener('click', ()=> {

  // generate a random number

  const randomNumber = Math.random();

  // convert the randomNumber into a move for computer

  let computerMove;

  if(randomNumber >= 0 && randomNumber < 1/3) {

    computerMove = 'scissors';

  } else if(randomNumber >= 1/3 && randomNumber < 2/3) {

    computerMove = 'paper';

  } else if(randomNumber >= 2/3 && randomNumber < 1) {

    computerMove = 'rock';

  }

  // check for winner

  if(computerMove === 'scissors') {

    result = 'Draw';

  } else if(computerMove === 'paper') {

    result = 'Win';

  } else if(computerMove === 'rock') {

    result = 'Lose';

  }

  // display game result

  if(result === 'Win') {

    scoreBoard.wins++;

    winsHtmlElement.innerHTML = `Wins: ${scoreBoard.wins};`;

  } else if(result === 'Lose') {

    scoreBoard.losses++;
    
    lossesHtmlElement.innerHTML = `Losses: ${scoreBoard.losses};`;

  } else if(result === 'Draw') {

    scoreBoard.draw++;

    drawsHtmlElement.innerHTML = `Draws: ${scoreBoard.draw};`;

  }

  swal(
    result,
    `You picked scissors, Computer picked ${computerMove}`,
    result === 'Win' ? "success" : "error"
  )

});

const restartGameHtmlButton = document.getElementById('restartGame');

restartGameHtmlButton.addEventListener('click', ()=> {

  scoreBoard.wins = 0;
  scoreBoard.losses = 0;
  scoreBoard.draw = 0;

  winsHtmlElement.innerHTML = `Wins: ${scoreBoard.wins};`;
  lossesHtmlElement.innerHTML = `Losses: ${scoreBoard.losses};`;
  drawsHtmlElement.innerHTML = `Draws: ${scoreBoard.draw};`;

});