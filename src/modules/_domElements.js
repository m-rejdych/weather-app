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

const elements = {
  container,
  script,
  background,
  content,
  header,
  startBtn,
};
export default elements;
