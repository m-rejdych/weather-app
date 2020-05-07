import elements from './_domElements';

function createContainer() {
  const { container, script, background } = elements;
  document.body.insertBefore(container, script);
  container.appendChild(background);
}

export default createContainer;
