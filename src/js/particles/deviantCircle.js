import Splitting from 'splitting';

export const deviantCircle = () => {
  Splitting({ by: 'chars', whitespace: true });
  const windowHeight = document.documentElement.clientHeight;
  let windowWidth = document.documentElement.clientWidth;
  const _deviantCircle = document.querySelector(
    '.deviant-circle__main-wrapper'
  );
  let rotateX = 10;
  let rotateZ = 0;
  const _body = document.body;
  _body.addEventListener('mousemove', e => {
    rotateZ = ((e.x - windowWidth / 2) / windowWidth) * 80;
    setPositionOfCircle(_deviantCircle, rotateZ, rotateX);
  });
  return () => {
    rotateX =
      (-(_deviantCircle.getBoundingClientRect().top - windowHeight / 2 - 100) /
        windowHeight) *
      50;
    setPositionOfCircle(_deviantCircle, rotateZ, rotateX);
    // rotateX = 100;
  };
};
function setPositionOfCircle(_deviantCircle, rotateZ, rotateX) {
  _deviantCircle.style.transform = `rotateZ(${rotateZ}deg) rotateX(${rotateX}deg)`;
}
