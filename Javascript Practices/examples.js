
function capitalized(firstLetter) {
    console.log(firstLetter.charAt(0).toUpperCase() + firstLetter.slice(1));
}

capitalized('octopus');

let day = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
}

function returnDay(num) {
    if (num < 1 || num > 7) {
        return null;
    } else {
        return (day)[num];
    }
}

/*
for (const days in day) {
    console.log(days);
}

Output:
1
2
3
4
5
6
7*/

// Example of Lexical scope
function bankRobbery() {
    const heroes = ['Scarlet Witch', 'Black Panther', 'Deadpool', 'Thor', 'Hulk'];
    function cryForHelp() {
        for (let hero of heroes) {
            console.log(`PLEASE HELP US, ${hero.toUpperCase()}!`);
        }
    }
    cryForHelp();
}

// Example of higher order functions; passing a function as an argument
function callTwice(func) {
    func();
    func();
}

/* Output:
callTwice(rollDie)
4
5
*/

function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f();
    }
}

/* Output:
callTenTimes(rollDie)
3
1
1
6
6
4
3
1
2
2
*/

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll);
}

// Example of a returning function

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

const isChild = makeBetweenFunc(0, 18);

/* Output:
isChild(7)
true

isChild(22)
false
*/

// Example of forEach method -- could use the for of loop in replace
// of this but still good to know

const movies = [
    {
        title: 'Alien',
        score: 84,
        year: 1979
    },

    {
        title: 'Inception',
        score: 88,
        year: 2010
    },

    {
        title: 'The Notebook',
        score: 78,
        year: 2004
    },

    {
        title: 'Training Day',
        score: 77,
        year: 2001
    },

    {
        title: 'School of Rock',
        score: 71,
        year: 2003
    },

    {
        title: 'The Dark Knight',
        score: 90,
        year: 2008
    },

    {
        title: 'Pulp Fiction',
        score: 89,
        year: 1994
    },

    {
        title: 'Bridesmaids',
        score: 68,
        year: 2011
    },

    {
        title: 'A Quiet Place',
        score: 75,
        year: 2018
    },

    {
        title: 'The Breakfast Club',
        score: 78,
        year: 1985
    }
]

movies.forEach(function (list) {
    console.log(`${list.title} - ${list.score}/100`);
})

/* Output:
Alien - 8.4
Inception - 8.8
The Notebook - 7.8
Training Day - 7.7
School of Rock - 7.1
The Dark Knight - 9
Pulp Fiction - 8.9
Bridesmaids - 6.8
A Quiet Place - 7.5
The Breakfast Club - 7.8

if it was a for of loop, same output

for (let list of movies){
    console.log(`${list.title} - ${list.score}/100`);
}
*/

// Example of map method -- it creates a new array
const titles = movies.map(function (movie) {
    return movie.title.toUpperCase();
})

for (i = 0; i <= titles.length; i++) {
    console.log(titles[i]);
}

//Example of using the arrow function
// const movieRating = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })
// Arrow function (same output):
const movieRating = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`)
)

for (i = 0; i <= movieRating.length; i++) {
    console.log(movieRating[i]);
}

// Example of the filter method
const goodMovies = movies.filter(m => m.score > 75);
const badMovies = movies.filter(m => m.score < 70);
const recentMovies = movies.filter(m => m.year > 2008);

//combining the filter and map method together
const recentMovieTitles = movies
    .filter(m => m.year > 2008)
    .map(m => m.title);

// Example of an implicit return -- good for one liners or short
// functions with one expression
// All of these do the same thing but the last solution
// is a one liner implicit return

// const isEven = function (num) {
//     return num % 2 === 0;
// }

// const isEven = (num) => {
//     return num % 2 === 0;
// }

// const isEven = num => {
//     return num % 2 === 0;
// }

// const isEven = num => (
//     num % 2 === 0
// ); // implicit return

// const isEven = num => num % 2 === 0; // one liner implicit return


//Keyboard events & Event objects example
const button = document.querySelector('button').addEventListener('click', function (e) {
    console.log(e)
})
const input = document.querySelector('input')

window.addEventListener('keydown', function (evt) {
    switch (evt.code) {
        case 'ArrowUp':
            console.log('UP!');
            break;
        case 'ArrowDown':
            console.log('DOWN!');
            break;
        case 'ArrowLeft':
            console.log('LEFT!');
            break;
        case 'ArrowRight':
            console.log('RIGHT!');
            break;
        default:
            console.log('IGNORED!')
    }
})