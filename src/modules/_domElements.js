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
const input = document.createElement('input');
const formBtn = document.createElement('button');
form.classList.add('form');
input.type = 'text';
input.classList.add('input');
input.placeholder = 'Location';
formBtn.classList.add('btn', 'btn-form');
formBtn.textContent = 'Search';

const elements = {
  container,
  script,
  background,
  content,
  header,
  startBtn,
  form,
  input,
  formBtn,
};
export default elements;
