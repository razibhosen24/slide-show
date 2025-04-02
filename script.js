
let flag = 0;

function controller(x){
  flag += x;
  slidesShow(flag);
};

function slidesShow(num){
  const slides = document.getElementsByClassName('mySlides');

  if ( num == slides.length){
    flag = 0;
    num = 0;
  }else if (num < 0){
    flag = slides.length - 1;
    num = slides.length - 1;
  }
  
  for ( let y of slides){
    y.style.display = 'none';
  };
  slides[flag].style.display = 'block';
  
};
slidesShow(flag);


// const slides = document.querySelectorAll('.mySlides');
// function slides() {
//     const slides = document.querySelectorAll('.mySlides');
//     const dots = document.querySelectorAll('.dot');
//     let currentSlide = 0;

//     function showSlide(index) {
//         slides.forEach((slide, i) => {
//             slide.style.display = i === index ? 'blo`ck' : 'none';
//         });
//     }

//     function nextSlide() {
//         currentSlide = (currentSlide + 1) % slides.length;
//         showSlide(currentSlide);
//     }

//     function prevSlide() {
//         currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//         showSlide(currentSlide);
//     }

//     document.querySelector('.next').addEventListener('click', nextSlide);
//     document.querySelector('.prev').addEventListener('click', prevSlide);
//     dots.forEach((dot, index) => {
//         dot.addEventListener('click', () => {
//             currentSlide = index;
//             showSlide(currentSlide);
//         });
//     });

//     showSlide(currentSlide);

// };
// slides();