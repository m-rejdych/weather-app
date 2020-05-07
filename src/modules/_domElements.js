const container = document.createElement('div');
container.classList.add('container');

const script = document.querySelector('script');

const background = document.createElement('div');
background.classList.add('background');

const content = document.createElement('div');
content.classList.add('content');

const header = document.createElement('h1');
header.classList.add('content__header');

const startBtn = document.createElement('button');
startBtn.classList.add('btn', 'btn-start');

const form = document.createElement('form');
const inputText = document.createElement('input');
const formBtn = document.createElement('button');
form.classList.add('form');
inputText.type = 'text';
inputText.classList.add('inputText');
inputText.placeholder = 'Location';
formBtn.classList.add('btn', 'btn-form');
formBtn.textContent = 'Search';
formBtn.type = 'button';

const elements = {
  container,
  script,
  background,
  content,
  header,
  startBtn,
  form,
  inputText,
  formBtn,
};
export default elements;
