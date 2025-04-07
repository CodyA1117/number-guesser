let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget(){
    let randomNumber = Math.floor(Math.random()*10);
    return randomNumber;
}


function compareGuesses(userGuess, computerGuess, secretNumber){
    
        let humanDistance = Math.abs(userGuess - secretNumber)
        let computerDistance = Math.abs(computerGuess - secretNumber)

        return humanDistance <= computerDistance 

    }



function updateScore(winner){

    if(winner === 'human'){
        humanScore+= 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }

}

function advanceRound(){
    currentRoundNumber += 1;

}


