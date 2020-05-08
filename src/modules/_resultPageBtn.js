import elements from './_domElements';
import { addResultPageBtnListener } from './_eventListeners';

function createResultPageBtn() {
  const { resultPageBtn, resultPage } = elements;

  addResultPageBtnListener();
  resultPage.appendChild(resultPageBtn);
}

export default createResultPageBtn;
