// console.log(`Server is running on port 5000`);

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

const waitTime = 3000;
console.log(`Setting  a ${waitTime / 1000} second delay`);