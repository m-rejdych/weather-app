import elements from './_domElements';
import createResultPage from './_resultPage';

async function fetchData() {
  const { inputText, resultPageInfo, inputRadio1, background } = elements;

  try {
    const dataUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputText.value}&appid=2a2d45553be4f6fe1eeea72d749597e0`;

    const response = await fetch(dataUrl, { mode: 'cors' });
    const json = await response.json();
    const { main } = json;

    if (inputRadio1.checked === true) {
      resultPageInfo.innerHTML = `Temperature in ${inputText.value}: ${(
        main.temp - 273.15
      ).toFixed(0)}&deg;`;
    } else {
      resultPageInfo.innerHTML = `Temperature in ${inputText.value}: ${(
        (main.temp - 273.15) * (9 / 5) +
        32
      ).toFixed(0)}&deg;`;
    }

    if (main.temp < 283.15) {
      background.style.backgroundColor = '#00d4ff';
      background.style.backgroundImage =
        'linear-gradient(147deg, #00d4ff 0%, #090979 74%), linear-gradient(327deg, #090979 0%, #00d4ff 74%)';
    }

    createResultPage();
  } catch (err) {
    alert('Pass a valid city!');
  }
}

export default fetchData;
