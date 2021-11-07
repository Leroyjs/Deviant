export const preloader = () => {
  const _preloader = document.querySelector('.preloader');
  const _preloaderBar = _preloader.querySelector('.preloader__bar');

  let percent = 0.01;

  const interval = setInterval(() => {
    percent *= 1.02;
    _preloaderBar.style.width = percent + '%';
    if (percent > 100) {
      loaded();
      initPrintStroke();
      clearInterval(interval);
      setTimeout(() => {
        ready();
      }, 2000);
    }
  }, 1);
};

function loaded() {
  document.body.classList.add('loaded');
}

function ready() {
  document.body.classList.add('ready');
}

function initPrintStroke() {
  const _preloaderSVG = document.querySelectorAll('.preloader-stroke');

  _preloaderSVG.forEach(item => {
    const timeout = item.dataset.timeout;
    setTimeout(() => printStroke(item), +timeout);
  });
}

function printStroke(item) {
  const len = item.getTotalLength();
  const step = Math.round(len / 100);

  let current = 0;

  const interval = setInterval(() => {
    current += step;
    item.style.strokeDasharray = current + ' ' + len;
    if (current > len) {
      clearInterval(interval);
    }
  }, 8);
}
