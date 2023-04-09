let circularProgress = document.querySelector(".circular-progress"),
  progressValue = document.querySelector(".progress-value");

let circularProgress2 = document.querySelector(".circular-progress-2"),
  progressValue2 = document.querySelector(".progress-value-2");

let progressStartValue = 0,
  progressStartValue2 = 0,
  progressEndValue = 78,
  progressEndValue2 = 63,
  speed = 15;

let progress = setInterval(() => {
  if (progressStartValue < progressEndValue) {
    progressStartValue++;
    progressValue.textContent = `${+progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(var(--main-color) ${
      progressStartValue * 3.6
    }deg, #ededed 0deg)`;
  }

  if (progressStartValue2 < progressEndValue2) {
    progressStartValue2++;
    progressValue2.textContent = `${progressStartValue2}%`;
    circularProgress2.style.background = `conic-gradient(var(--main-color) ${
      progressStartValue2 * 3.6
    }deg, #ededed 0deg)`;
  }

  if (
    progressStartValue > progressEndValue &&
    progressStartValue2 > progressEndValue2
  ) {
    clearInterval(progress);
  }
}, speed);
