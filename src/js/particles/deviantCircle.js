import Splitting from 'splitting';

export const deviantCircle = () => {
  const _body = document.body,
    _deviantCircle = document.querySelector('.deviant-circle__main-wrapper');

  let windowWidth = document.documentElement.clientWidth,
    windowHeight = document.documentElement.clientHeight,
    rotateX = 10,
    rotateZ = 0;

  Splitting({ by: 'chars', whitespace: true });

  _body.addEventListener('mousemove', e => {
    rotateZ = ((e.x - windowWidth / 2) / windowWidth) * 80;
    setPositionOfCircle(_deviantCircle, rotateZ, rotateX);
  });

  window.addEventListener('resize', () => {
    windowWidth = document.documentElement.clientWidth;
    windowHeight = document.documentElement.clientHeight;
    console.log(windowWidth, windowHeight);
  });

  return () => {
    rotateX =
      (-(_deviantCircle.getBoundingClientRect().top - windowHeight / 2 - 100) /
        windowHeight) *
      50;
    setPositionOfCircle(_deviantCircle, rotateZ, rotateX);
  };
};

function setPositionOfCircle(_deviantCircle, rotateZ, rotateX) {
  _deviantCircle.style.transform = `rotateZ(${rotateZ}deg) rotateX(${rotateX}deg)`;
}
