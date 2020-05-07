import elements from './_domElements';

function createStartBtn() {
  const { content, startBtn } = elements;

  startBtn.textContent = 'Get started';
  content.appendChild(startBtn);
}

export default createStartBtn;
