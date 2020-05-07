import elements from './_domElements';

function createForm() {
  const { content, form, input, formBtn } = elements;

  form.appendChild(input);
  form.appendChild(formBtn);

  content.appendChild(form);
}

export default createForm;
