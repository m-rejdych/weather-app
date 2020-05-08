import elements from './_domElements';
import createRadioInputs from './_radioInputs';
import createFormBtn from './_formBtn';

function createForm() {
  const { content, form, inputText } = elements;

  form.appendChild(inputText);
  createRadioInputs();
  createFormBtn();

  content.appendChild(form);
}

export default createForm;
