import elements from './_domElements';
import { addStartBtnListener } from './_eventListeners';

function createStartBtn() {
  const { content, startBtn } = elements;

  startBtn.textContent = 'Get started';
  addStartBtnListener();

  content.appendChild(startBtn);
}

export default createStartBtn;
