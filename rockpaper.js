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
        console.log(player2.name + " wins"); return player2.name;
    } else if (player1.hand === "rock" && player2.hand === "scissors") {
        console.log(player1.name + " wins"); return player1.name;
    } else if (player1.hand === player2.hand) {
        console.log("It's a tie"); return "null"
    } else if (player1.hand === "scissors" && player2.hand === "paper") {
        console.log(player1.name + " wins"); return player1.name
    } else if (player1.hand === "scissors" && player2.hand === "rock") {
        console.log(player2.name + " wins"); return player2.name
    } else if (player1.hand === "paper" && player2.hand === "rock") {
        console.log(player1.name + " wins"); return player1.name
    } else {
        console.log(player2.name + " wins"); return player2.name

    }

}

playRound(player1, player2);
console.log(callCount);

playRound(player1, player2);
console.log(callCount);

playRound(player1, player2);
console.log(callCount);

playRound(player1, player2);
console.log(callCount);

playRound(player1, player2);
console.log(callCount);

// let playUntil;

// function playGame(player1, player2, playUntil) {
//     if (playUntil <= 0) {
//         playRound;
//         playGame(player1, player2, playUntil - 1);
//     } else {
//         return 1;
//     }
// }
//  playGame(player1, player2, 5);

// test