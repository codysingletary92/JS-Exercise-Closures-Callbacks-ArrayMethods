// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *    counter 1 invokes a second counter function when it's run and can be used multiple times, as where counter 2 can really only be used to\
 *    count one thing over and over.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 *    Counter 2 uses a closure becasue it reaches outside of the function to obtain data.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *    Counter 2 would be preferrable in simple programs where you just need to count one single thing, as where in counter 1, the same function can be recycled and used again to count multiple things.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

   return Math.floor(Math.random() * 3);

}


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, numberOfInnings){

  let homeScore = 0
  let awayScore = 0

  for (i = 0; i <= numberOfInnings; i++){
    homeScore += inning();
    awayScore += inning();
  }

  return {
    "Home": homeScore,
    "Away": awayScore
  }

}

console.log(finalScore(inning, 5))

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function scoreboard(inning, numberOfInnings) {
  let homeScore = 0
  let awayScore = 0
  let inningOrdinal = "none"

  for (i = 0; i <= numberOfInnings; i++){
    homeScore += inning();
    awayScore += inning();

    if ( i+1 === 1){
      inningOrdinal = "1st"
    }
    else if (i+1 === 2){
      inningOrdinal = "2nd"
    }
    else if (i+1 === 3){
      inningOrdinal = "3rd"
    }
    else {
      inningOrdinal = i+"th"
    }

    printScore(inningOrdinal, homeScore, awayScore)

  }

  function printScore(ordinal, homeScore, awayScore){
    return `${ordinal} inning: ${awayScore} - ${homeScore}`
  }

}


