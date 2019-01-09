/************************************************
Character Counter Assignment

Goal: Create a function that takes in a string and return the number
of instances of each unique character.

ToDo:
*Take string input from user
  *argv creates an array, turn input into a string.
*Create Function 'countLetters'
  *Create empty object 'letters'
  *Read through the input, letter by letter
  *Verify that character is indeed a letter, we don't
    count ' '.
  *Add new letters to the object.
  *Increase the counter for each letter as it is read
  *Return final object with letters and their count.

**************************************************/

var input = process.argv[2].toString();
console.log(input);

function countLetters(input){

  var letters = {};



};