import elements from './_domElements';

async function fetchData() {
  const { inputText } = elements;

  try {
    const dataUrl = `http://api.openweathermap.org/data/2.5/weather?q=${inputText.value}&appid=2a2d45553be4f6fe1eeea72d749597e0`;

    const response = await fetch(dataUrl, { mode: 'cors' });
    const json = await response.json();
    const { main } = json;

    inputText.value = (main.temp - 273.15).toFixed(0);
  } catch (err) {
    alert('Pass a valid city!');
  }
}

export default fetchData;
