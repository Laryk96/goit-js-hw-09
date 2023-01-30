const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

refs.btnStart.addEventListener('click', () => {
  colorChange.startChangeColor();
});
refs.btnStop.addEventListener('click', () => {
  colorChange.stopChangeColor();
});

const colorChange = {
  startChangeColor() {
    this.intervalId = setInterval(() => {
      refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);

    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;
  },

  stopChangeColor() {
    clearInterval(this.intervalId);
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;
  },
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Вариант 2

// refs.btnStart.addEventListener('click', onClickStart);
// refs.btnStop.addEventListener('click', onClickStop);

// function onClickStart() {
//   changeColor();
//   refs.btnStart.disabled = true;
//   refs.btnStop.disabled = false;
// }

// function onClickStop() {
//   refs.btnStart.disabled = false;
//   refs.btnStop.disabled = true;
// }

// function changeColor() {
//   const intervalId = setInterval(() => {
//     if (refs.btnStop.disabled) {
//       clearInterval(intervalId);
//       return;
//     }
//     refs.body.style.backgroundColor = getRandomHexColor();
//   }, 1000);
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
