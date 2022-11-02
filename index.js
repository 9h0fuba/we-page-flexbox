const barBtn = document.getElementById('barEl');
const navBarEl = document.querySelectorAll('.nav-link')

barBtn.addEventListener('click', () => {
    
    navBarEl.forEach( (barEl) => {
        barEl.classList.toggle('active');
        
    } );
});


// slider
const sliders =   document.getElementById('img');
const arrLeft = document.querySelector('.arrow-left');
const arrRight = document.querySelector('.arrow-right');
const images = ['react.png','css.png','js.png','laravel.png'];

sliders.style.backgroundImage = `url(images/${images[0]})`

let imageId = 0;

function slider(id) {
  sliders.style.backgroundImage = `url(images/${images[id]})`;
  sliders.classList.add('image-fade');

  setTimeout( () => {
    sliders.classList.remove('image-fade')
  },500 );

};

arrLeft.addEventListener('click', () => {
    imageId--;
    if(imageId < 0){
        imageId = images.length-1;
    };
    slider(imageId);
})

arrRight.addEventListener('click', () => {
    imageId++;
    if(imageId > images.length - 1){
        imageId = 0;
    };
    slider(imageId);
})