export const noop = () => {};

export const isPhoneDisplayWidthFunction = () =>
  window.matchMedia("(max-width: 600px)").matches;

export const setLoadedStateOfPage = () => document.body.classList.add("loaded");
