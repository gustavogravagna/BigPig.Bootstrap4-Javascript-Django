let activated = 0;
const list = Array.from(document.querySelectorAll('#steps li'));
const circles = list.filter(li => li.className === 'circle');
const lines = list.filter(li => li.className === 'line');
const buttonNext = document.getElementById('btn_next');
const buttonPrev = document.getElementById('btn_prev');
const slideContent = document.getElementById('slide-content');

function nextStep(current) {
  if (current !== 0) {
    const line = lines[current - 1].querySelector('div');
    line.style.transitionDelay = '0s';
    line.style.width = '100%';
  }

  const circle = circles[current].querySelector('div');
  circle.style.width = '100%';
  circle.style.transitionDelay = '0.5s';

  const icon = circles[current].querySelector('i');
  icon.style.transitionDelay = '0.5s';
  icon.style.color = 'white';

  enableDisableButtons(current);

  slideContent.style.transform = `translateX(-${(100 / circles.length) *
    current}%)`;
  activated = current;
}

function prevStep(current) {
  const line = lines[current].querySelector('div');
  const circle = circles[current + 1].querySelector('div');
  line.style.width = '0px';
  circle.style.width = '0px';
  line.style.transitionDelay = '0.5s';
  circle.style.transitionDelay = '0s';

  const icon = circles[current + 1].querySelector('i');
  icon.style.transitionDelay = '0s';
  icon.style.color = 'transparent';

  enableDisableButtons(current);
  slideContent.style.transform = `translateX(-${(100 / circles.length) *
    current}%)`;
  activated = current;
}

function enableDisableButtons(current) {
  if (current === 0) {
    buttonPrev.disabled = true;
    buttonPrev.style.opacity = '0';
  } else {
    document.getElementById('btn_next').disabled = false;
    buttonPrev.disabled = false;
    buttonPrev.style.opacity = '1';
  }

  if (current === circles.length - 1) {
    buttonNext.disabled = true;
    buttonNext.style.opacity = '0';
  } else {
    document.getElementById('btn_next').disabled = false;
    buttonNext.disabled = false;
    buttonNext.style.opacity = '1';
  }
}

buttonNext.addEventListener('click', () => nextStep(activated + 1));

buttonPrev.addEventListener('click', () => prevStep(activated - 1));

nextStep(0);