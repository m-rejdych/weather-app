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
const mainHolder = document.createElement('div');
const radioHolder1 = document.createElement('div');
const radioHolder2 = document.createElement('div');
const inputRadio1 = document.createElement('input');
const inputRadio2 = document.createElement('input');
const label1 = document.createElement('label');
const label2 = document.createElement('label');
const formBtn = document.createElement('button');
form.classList.add('form');
inputText.type = 'text';
inputText.classList.add('inputText');
inputText.placeholder = 'Location';
mainHolder.classList.add('main-holder');
radioHolder1.classList.add('radio-holder');
radioHolder2.classList.add('radio-holder');
inputRadio1.type = 'radio';
inputRadio1.classList.add('radio');
inputRadio1.id = 'radio1';
inputRadio1.name = 'deg';
inputRadio1.checked = true;
inputRadio2.type = 'radio';
inputRadio2.classList.add('radio');
inputRadio2.id = 'radio2';
inputRadio2.name = 'deg';
label1.setAttribute('for', 'radio1');
label2.setAttribute('for', 'radio2');
formBtn.classList.add('btn', 'btn-form');
formBtn.textContent = 'Search';
formBtn.type = 'button';

const resultPage = document.createElement('div');
const resultPageInfo = document.createElement('h2');
const resultPageBtn = document.createElement('button');
resultPage.classList.add('result-page');
resultPageInfo.classList.add('result-page__info');
resultPageBtn.classList.add('btn', 'btn-result');
resultPageBtn.textContent = 'Reset';
resultPageBtn.type = 'button';

const elements = {
  container,
  script,
  background,
  content,
  header,
  startBtn,
  mainHolder,
  radioHolder1,
  radioHolder2,
  inputRadio1,
  inputRadio2,
  label1,
  label2,
  form,
  inputText,
  formBtn,
  resultPage,
  resultPageInfo,
  resultPageBtn,
};
export default elements;
