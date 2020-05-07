import elements from './_domElements';
import createForm from './_form';
import fetchData from './_fetchData';

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

export { addStartBtnListener, addFormBtnListener };
