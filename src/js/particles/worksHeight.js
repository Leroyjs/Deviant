export const worksHeight = () => {
  const _worksWrapper = document.querySelector('.works');
  const _responsiveHeightBlocks =
    document.querySelectorAll('.responsive-height');
  const windowHeight = document.documentElement.clientHeight;

  window.addEventListener('resize', () => {
    initWorksWrapperHeight(_worksWrapper);
  });

  return () => {
    _responsiveHeightBlocks.forEach((item, index) => {
      setHeightOfBlock(item, windowHeight);
    });
  };
};

function setHeightOfBlock(block, windowHeight) {
  const posY = block.getBoundingClientRect().top - windowHeight;
  block.style.height = -posY * 1 + 'px';
}

function initWorksWrapperHeight(_worksWrapper) {
  _worksWrapper.style = '';
  const worksWrapperHeight = _worksWrapper.getBoundingClientRect().height;
  _worksWrapper.style.height = worksWrapperHeight + 'px';
}
