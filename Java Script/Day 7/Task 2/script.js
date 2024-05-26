const images = ['i1.jpg', 'i2.jpg', 'i3.avif', 'i4.png', 'i5.webp'];
let currentIndex = 0;
let slideshowInterval;

const galleryImg = document.getElementById('gallery-img');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const slideshowBtn = document.getElementById('slideshow-btn');
const stopBtn = document.getElementById('stop-btn');

function showImage(index) {
  galleryImg.src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function startSlideshow() {
  slideshowInterval = setInterval(nextImage, 1000);
}

function stopSlideshow() {
  clearInterval(slideshowInterval);
}

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);
slideshowBtn.addEventListener('click', startSlideshow);
stopBtn.addEventListener('click', stopSlideshow);

showImage(currentIndex); 
