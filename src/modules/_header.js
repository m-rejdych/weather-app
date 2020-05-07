import elements from './_domElements';

function createHeader() {
  const { content, header } = elements;
  header.textContent = "What's the weather?";

  content.appendChild(header);
}

export default createHeader;
