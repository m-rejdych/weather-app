import elements from './_domElements';
import clearContent from './_clearContent';
import createResultPageInfo from './_resultPageInfo';
import createResultPageBtn from './_resultPageBtn';

function createResultPage() {
  const { resultPage, content } = elements;

  clearContent();
  content.appendChild(resultPage);

  createResultPageInfo();
  createResultPageBtn();
}

export default createResultPage;
