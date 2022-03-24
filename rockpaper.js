const hands = ["rock", "paper", "scissors"];

function gethand() {
    return hands[parseInt(Math.random() * 10) % 3];
};

const player1 = {
    name: "Bob", hand: gethand()

};

// console.log(player1);

const player2 = {
    name: "Mark", hand: gethand()
}

// console.log(player2);

let callCount = 0;

function playRound(player1, player2) {

    player1.hand = gethand(hands);
    player2.hand = gethand(hands);

    callCount += 1;
    console.log("Result of hand number " + callCount)

    if (player1.hand === "rock" && player2.hand === "paper") {
        console.log(player2.name + " wins"); return player2;
    } else if (player1.hand === "rock" && player2.hand === "scissors") {
        console.log(player1.name + " wins"); return player1;
    } else if (player1.hand === player2.hand) {
        console.log("It's a tie"); return null
    } else if (player1.hand === "scissors" && player2.hand === "paper") {
        console.log(player1.name + " wins"); return player1
    } else if (player1.hand === "scissors" && player2.hand === "rock") {
        console.log(player2.name + " wins"); return player2
    } else if (player1.hand === "paper" && player2.hand === "rock") {
        console.log(player1.name + " wins"); return player1
    } else if (player1.hand === "paper" && player2.hand === "scissors") {
        console.log(player2.name + " wins"); return player2
    } else {
        console.log(player2.name + " wins"); return player2

    }

}


function playGame(player1, player2, playUntil) {


    let player1count = 0;
    let player2count = 0;

    do {
        const winner = playRound(player1, player2);
        if (winner === player1) {
            player1count += 1;

        } else if (winner === player2) {
            player2count += 1;

        }


    }
    while (player1count < playUntil && player2count < playUntil);
    return player1count > player2count ? player1 : player2;
}

const totalWinner = playGame(player1, player2, 5);

console.log(`${totalWinner.name} wins the game!`);

// playGame(player1, player2, 5);






