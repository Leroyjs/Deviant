export const worksHeight = () => {
  const _responsiveHeightBlocks = getResponsiveHeightBlocks();
  let windowHeight = document.documentElement.clientHeight;

  window.addEventListener('resize', () => {
    windowHeight = document.documentElement.clientHeight;
  });

  return () => {
    _responsiveHeightBlocks.forEach((item, index) => {
      setHeightOfBlock(item, windowHeight);
    });
  };
};

function setHeightOfBlock(block, windowHeight) {
  const posY = block.mainBlock.getBoundingClientRect().top - windowHeight;

  if (block.innerText) {
    const percent = 100 + (posY / windowHeight) * 100;

    if (percent < 50) {
      block.mainBlock.classList.add('responsive-height_active');
    } else {
      block.mainBlock.classList.remove('responsive-height_active');
    }
  }

  block.mainBlock.style.height = -posY * 1 + 2 + 'px';
}

function getResponsiveHeightBlocks() {
  const _responsiveHeightBlocks =
    document.querySelectorAll('.responsive-height');

  const _responsiveHeightObjs = [];

  _responsiveHeightBlocks.forEach(item => {
    _responsiveHeightObjs.push({
      mainBlock: item,
      innerText:
        item.querySelector('.work-item__text-inner') ||
        item.querySelector('.work-item__text-opacity')
    });
  });

  return _responsiveHeightObjs;
}
