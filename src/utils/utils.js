const getDistance = (section: HTMLElement, square: HTMLElement) => {
  const squareWidth = square.getBoundingClientRect().width;
  const parentPadding = parseInt(getComputedStyle(section).paddingLeft);
  const sectionWidth = section.clientWidth - 2 * parentPadding;
  let distance = sectionWidth - squareWidth;

  return distance;
};

export const animationSetInterval = (
  section: HTMLElement,
  square: HTMLElement,
  duration: number
) => {
  const distance = getDistance(section, square);

  let path = 0;
  let delta = 1;

  const move = () => {
    path += delta;
    if (path > distance || path < 0) {
      delta *= -1;
    } else {
      square.style.translate = `${path}px`;
    }
  };

  const intervalId = setInterval(() => move(), 10);
  return intervalId;
};

export const animationRAF = (
  section: HTMLElement,
  square: HTMLElement,
  duration: number
) => {
  const distance = getDistance(section, square);

  let start = Date.now();
  let direction: "forth" | "back" = "back";

  const step = () => {
    const time = Date.now();
    let timeFraction = (time - start) / (duration * 1000);
    if (timeFraction >= 1 && direction === "forth") {
      timeFraction = 1;
    }
    if (timeFraction >= 1 && direction === "back") {
      timeFraction = 0;
    }
    let path =
      direction === "forth"
        ? distance * timeFraction
        : distance - distance * timeFraction;
    if (timeFraction === 1) {
      start = time;
      direction = "back";
    }
    if (timeFraction === 0) {
      direction = "forth";
      start = time;
      path = 0;
    }

    square.style.translate = `${path}px`;

    requestAnimationFrame(step);
  };

  return requestAnimationFrame(step);
};
