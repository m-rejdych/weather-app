import elements from './_domElements';
import createForm from './_form';

function addStartBtnListener() {
  const { startBtn } = elements;

  startBtn.addEventListener('click', () => {
    startBtn.remove();
    createForm();
  });
}

function addFormBtnListener() {
  const { formBtn } = elements;

  formBtn.addEventListener('click', () => {});
}

export { addStartBtnListener };
