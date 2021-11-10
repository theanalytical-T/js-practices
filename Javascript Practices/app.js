

function aboutLessThan(val) {
    if (val <= 35) {
        return "It's less than or equal to 35";
    }

    if (val <= 15) {
        return "It's less than or equal to 15";
    }

    return "It's higher than 0!";
}

aboutLessThan(12);
console.log(aboutLessThan(14));

function seaLife(fish) {
    console.log("What is your favorite sea creature?");

    let option = "";

    switch (fish) {
        case option1:
            option = "Swordfish";
            break;

        case option2:
            option = "Jellyfish";
            break;

        case option3:
            option = "Seahorse";
            break;

        case option4:
            option = "Starfish";
            break;

        case option5:
            option = "Sea Turtle";
            break;

        default:
            option = "All of them!";
            break;
    }
}

//this prints all the numbers from 1 to 100, with three exceptions. Numbers divisible by 3 get the word fizz, numbers divisible by 5 get the word buzz, and numbers divisible by both get fizzbuzz. This is a common interview question.
for (let counter = 1; counter <= 100; counter++) {
    let output = "";
    if (counter % 3 === 0) output += "Fizz"
    if (counter % 5 === 0) output += "Buzz"
    console.log(output || counter);
}

//this is an exercise for a chessboard
let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 === 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n"
}

console.log(board);