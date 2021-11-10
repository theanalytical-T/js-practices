

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

//recursion is a function that calls itself. Here's an example of a recursive function
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1)
    }
}

console.log(power(2, 3))
//returns 8

//another example of recursion, this starts off as given a number, the function can return the sequence of finding the additions and multiplications that produces that number.
function findSolution(target) {
    function find(current, history) {
        if (current === target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
            return find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(24))

//(((1 * 3) +5) * 3)

//this recursive function example returns the inventory of animals on a farm.
function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while (numberString.length < 3) {
        numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows")
    printZeroPaddedWithLabel(chickens, "Chickens")
    printZeroPaddedWithLabel(pigs, "Pigs")
}

printFarmInventory(7, 16, 3)

//here is the same recursive function but refactors to display the concept instead of having to rewrite the same function

function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}

function farmInventory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`)
    console.log(`${zeroPad(chickens, 3)} Chickens`)
    console.log(`${zeroPad(pigs, 3)} Pigs`)
}

farmInventory(7, 16, 3)