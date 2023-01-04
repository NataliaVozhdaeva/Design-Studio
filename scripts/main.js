const mobileMenuBtn = document.querySelector('.nav-mobile');
const menuItems = document.querySelector('.nav');
const windowInnerWidth = window.innerWidth;

window.onload = () => {
  if (windowInnerWidth < 905) {
    menuItems.classList.add('non-displayed');
    document.addEventListener('click', (e) => {
      if (e.target == mobileMenuBtn) {
        menuItems.classList.toggle('non-displayed');
      } else if (e.target != menuItems) {
        menuItems.classList.add('non-displayed');
      }
    });
  }
};

const exampleImgs = document.querySelectorAll('.examples-img');
const photos = [
  [
    'img/content/examples/bedroom.jpg',
    'img/content/examples/dining_room.jpg',
    'img/content/examples/main_room.jpg',
    'img/content/examples/bathroom.jpg',
  ],

  [
    'img/content/examples/sk1.jpg',
    'img/content/examples/sk2.jpg',
    'img/content/examples/sk3.jpg',
    'img/content/examples/sk4.jpg',
  ],

  [
    'img/content/examples/k1.jpeg',
    'img/content/examples/k2.jpeg',
    'img/content/examples/k3.jpeg',
    'img/content/examples/k4.jpeg',
  ],
];

let counter = 0;

for (let i = 0; i < exampleImgs.length; i++) {
  exampleImgs[i].setAttribute('src', photos[counter][i]);
}

const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');

const nextSlideFunc = () => {
  counter++;
  for (let i = 0; i < exampleImgs.length; i++) {
    exampleImgs[i].setAttribute('src', photos[counter][i]);
  }
  if (counter !== 0) {
    btnPrev.style.display = 'inline-block';
  }
  if (counter === photos.length - 1) {
    btnNext.style.display = 'none';
  }
};

const prevSlideFunc = () => {
  counter--;
  for (let i = 0; i < exampleImgs.length; i++) {
    exampleImgs[i].setAttribute('src', photos[counter][i]);
  }
  if (counter === 0) {
    btnPrev.style.display = 'none';
  }
  if (counter !== photos.length - 1) {
    btnNext.style.display = 'inline-block';
  }
};

btnNext.addEventListener('click', nextSlideFunc);
btnPrev.addEventListener('click', prevSlideFunc);

const feedbackArrowNext = document.querySelector('.feedback-arrow--next');
const feedbackArrowPrev = document.querySelector('.feedback-arrow--prev');
const feeedbackContent = document.querySelectorAll('.slider-item');
let activeSlideNumber = 0;

function showFeedback() {
  feeedbackContent[activeSlideNumber].classList.remove('non-displayed');
  for (let i = 0; i < feeedbackContent.length; i++) {}
}

showFeedback(activeSlideNumber);

feedbackArrowNext.addEventListener('click', () => {
  feeedbackContent[activeSlideNumber].classList.add('non-displayed');
  activeSlideNumber = (activeSlideNumber + 1) % feeedbackContent.length;
  showFeedback(activeSlideNumber);
});

feedbackArrowPrev.addEventListener('click', () => {
  feeedbackContent[activeSlideNumber].classList.add('non-displayed');
  activeSlideNumber =
    (activeSlideNumber + feeedbackContent.length - 1) % feeedbackContent.length;
  showFeedback(activeSlideNumber);
});
