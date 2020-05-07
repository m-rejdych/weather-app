import elements from './_domElements';

function createContent() {
  const { content, container } = elements;

  container.appendChild(content);
}

export default createContent;
