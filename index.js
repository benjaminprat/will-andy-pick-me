var input = document.querySelector('.input');
var buttonDisable = document.querySelector('.imput-button-disable');
var buttonEnable = document.querySelector('.imput-button-enable');
var clearBtnDisable = document.querySelector('.clear-button-disable');
var clearBtnEnable = document.querySelector('.clear-button-enable');
var inputQuestion = document.querySelector('.input-question');
var answer = document.querySelector('.answer');
var eightBall = document.querySelector('.eight-ball');
var save = document.querySelector('.save');
var favQuestions = document.querySelector('.favorite-questions');
var favAnswers = document.querySelector('.favorite-answers');
var favorites = document.querySelector('.favorites');
var hiddenAns;
var replyList = [
  'It is certain.',
  'It is decidedly so.',
  'Without a doubt.',
  'Yes - definitely.',
  'You may rely on it.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.',
  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  'Don\'t count on it.',
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.'
];

input.addEventListener('input', checkInput);
buttonEnable.addEventListener('click', getAns);
clearBtnEnable.addEventListener('click', clearPage);
save.addEventListener('click', saveQuestion);

function randReplyIndex() {
  return Math.floor(Math.random() * replyList.length)
}

function checkInput(event) {
  event.preventDefault();
  if (input.value.includes('?')) {
    buttonDisable.classList.add('hidden');
    buttonEnable.classList.remove('hidden');
  } else {
    buttonDisable.classList.remove('hidden');
    buttonEnable.classList.add('hidden');
  }
}

function getAns(event) {
  buttonDisable.classList.remove('hidden');
  buttonEnable.classList.add('hidden');
  clearBtnDisable.classList.add('hidden');
  clearBtnEnable.classList.remove('hidden');
  inputQuestion.innerText = input.value;
  answer.innerText = replyList[randReplyIndex()];
  answer.classList.remove('hidden');
  inputQuestion.classList.remove('hidden');
  eightBall.classList.add('hidden');
  save.classList.remove('hidden');
  hiddenAns = input.value;
  input.value = '';
}

function clearPage(event) {
  eightBall.classList.remove('hidden');
  clearBtnDisable.classList.remove('hidden');
  clearBtnEnable.classList.add('hidden');
  inputQuestion.classList.add('hidden');
  eightBall.classList.remove('hidden');
  answer.classList.add('hidden');
  save.classList.add('hidden');
}

function saveQuestion() {
  favorites.insertAdjacentHTML('afterbegin', `
    <section class="favorite-questions">${hiddenAns}</section>
    <section class="favorite-answers">${answer.innerText}</section>
    `
 );
 clearPage();
}
