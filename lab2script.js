//Global variables
let score1;
let score2;
let score3;
let total = 0;
let average;

//Get 3 scores from user and add them together
score1 = prompt('What is the first score?');
total += parseFloat(score1);

score2 = prompt('What is the second score?');
total += parseFloat(score2);

score3 = prompt('What is the third score?');
total += parseFloat(score3);

//Calculate the average
average = total / 3;

//Display the result
document.write(`<h1>The Test Scores Application</h1>`);
document.write(`The first score was ${score1}<br/>`);
document.write(`The second score was ${score2}<br/>`);
document.write(`The third score was ${score3}<br/>`);
document.write(`The average of the three scores is ${average.toFixed(2)}`);