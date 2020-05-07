import elements from './_domElements';
import createFormBtn from './_formBtn';

function createForm() {
  const { content, form, inputText } = elements;

  form.appendChild(inputText);
  createFormBtn();

  content.appendChild(form);
}

export default createForm;
