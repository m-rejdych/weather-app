import elements from './_domElements';

function createRadioInputs() {
  const {
    form,
    mainHolder,
    radioHolder1,
    radioHolder2,
    inputRadio1,
    inputRadio2,
    label1,
    label2,
  } = elements;

  label1.innerHTML = '&deg;Celcius';
  label2.innerHTML = '&deg;Fahrenheit';

  radioHolder1.appendChild(inputRadio1);
  radioHolder1.appendChild(label1);

  radioHolder2.appendChild(inputRadio2);
  radioHolder2.appendChild(label2);

  mainHolder.appendChild(radioHolder1);
  mainHolder.appendChild(radioHolder2);

  form.appendChild(mainHolder);
}

export default createRadioInputs;
