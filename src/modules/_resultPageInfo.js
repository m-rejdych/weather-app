import elements from './_domElements';

function createResultPageInfo() {
  const { resultPageInfo, resultPage } = elements;

  resultPage.appendChild(resultPageInfo);
}

export default createResultPageInfo;
