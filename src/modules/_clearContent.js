import elements from './_domElements';

function clearContent() {
  const { content } = elements;

  while (content.children.length > 1) {
    const child = content.lastElementChild;
    child.remove();
  }
}

export default clearContent;
