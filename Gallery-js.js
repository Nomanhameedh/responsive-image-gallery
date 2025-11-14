const cards = document.querySelectorAll('.card');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const closeBtn = document.getElementById('closeBtn');

let images = [];
cards.forEach(card => images.push(card.querySelector('img').src));
let currentIndex = 0;

// Open Lightbox
cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    currentIndex = index;
    openLightbox();
  });
});

function openLightbox(){
  lightbox.style.display = 'flex';
  lightboxImg.src = images[currentIndex];
}

function closeLight(){
  lightbox.style.display = 'none';
}

closeBtn.addEventListener('click', closeLight);

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  openLightbox();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  openLightbox();
});

// Click outside to close
lightbox.addEventListener('click', (e) => {
  if(e.target === lightbox){
    closeLight();
  }
});
