// Introductory parts (modules like )
// const questions = [
//     "What is your name?",
//     "What would you rather be doing?",
//     'What is your preferred programming language?'
// ];

// const answers = [];

// const ask = ( i = 0) => {
//     process.stdout.write(`\n\n\n ${questions[i]}`);
//     process.stdout.write(` > `);
// }

// process.stdin.on('data', data => {
//     answers.push(data.toString().trim());
//     if (answers.length < questions.length) {
//         ask(answers.length)
//     } else {
//         process.exit();
//     }
// })

// process.on('exit', data => {
//     process.stdout.write(`\n\n\n`);
//     process.stdout.write(`Go ${answers[1]} ${answers[0]}, you can finish writing ${answers[2]} later\n`);
// })

// ask(answers.length);

// const waitTime = 3000;
// console.log(`Setting a ${waitTime / 1000}-second delay`);

// const timerFinished = () => {
//     clearInterval(interval)
//     console.log('done');
// }

// setTimeout(timerFinished, waitTime);

// const waitInterval = 500;
// let currentTime = 0;

// const incTime = () => {
//     currentTime += waitInterval;
//     const p = Math.floor((currentTime / waitTime) * 100);
//     // process.stdout.clearLine();
//     process.stdout.cursorTo(5);
//     process.stdout.write(`Waiting... ${p} seconds \n`);
// }

// const interval = setInterval(incTime, waitInterval);

const path = require('path');
const util = require('util');
const v8 = require('v8');
console.log(path.basename(__filename));
const dirUploads = path.join(
    __dirname,
    'www',
    'files',
    'uploads'
);

console.log(dirUploads);
util.log(dirUploads);
util.log(v8.getHeapStatistics())