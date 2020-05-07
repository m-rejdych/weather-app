import { addFormBtnListener } from './_eventListeners';
import elements from './_domElements';

function createFormBtn() {
  const { form, formBtn } = elements;

  form.appendChild(formBtn);
  addFormBtnListener();
}

export default createFormBtn;
