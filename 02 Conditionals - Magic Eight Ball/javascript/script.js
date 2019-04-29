let userName = 'Daniel';

userName ? console.log(`Hello, ${userName}.`) : console.log('Hello!');

let userQuestion = 'Do i beleave this?';
let randomNumber = Math.floor(Math.random() * 7);
let eightBall = '';

switch (randomNumber){
  case 0:
    eigthBall = 'It is certain.';
    break;
  case 1:
    eightBall = 'It is decidedly so.';
    break;
  case 2:
    eightBall = 'Very doubtful.';
    break;
  case 3:
    eightBall = 'Ask again later.';
    break;
  case 4:
    eightBall = 'Dont count on it.';
    break;
  case 5:
    eightBall = 'Better not tell you now.';
    break;
  case 6:
    eightBall = 'Outlook not so good.';
    break;
  case 7:
    eightBall = 'Signs point to yes.';
    break;
}

console.log('User question: ' + userQuestion); 
console.log('The eight ball answer: ' + eightBall);
