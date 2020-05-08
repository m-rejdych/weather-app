import elements from './_domElements';
import createForm from './_form';
import fetchData from './_fetchData';
import clearContent from './_clearContent';

function addStartBtnListener() {
  const { startBtn } = elements;

  startBtn.addEventListener('click', () => {
    startBtn.remove();
    createForm();
  });
}

function addFormBtnListener() {
  const { formBtn } = elements;

  formBtn.addEventListener('click', () => {
    fetchData();
  });
}

function addResultPageBtnListener() {
  const { resultPageBtn, background } = elements;

  resultPageBtn.addEventListener('click', () => {
    clearContent();
    createForm();

    background.style.backgroundColor = '#ffe53b';
    background.style.backgroundImage =
      'linear-gradient(147deg, #ffe53b 0%, #ff2525 74%), linear-gradient(327deg, #ff2525 0%, #ffe53b 74%)';
  });
}

export { addStartBtnListener, addFormBtnListener, addResultPageBtnListener };
