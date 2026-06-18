let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    // Itago lahat ng slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Control para sa navigation
    if (index >= slides.length) {
        currentSlide = 0; 
    } else if (index < 0) {
        currentSlide = slides.length - 1; 
    } else {
        currentSlide = index;
    }

    // Ipakita ang kasalukuyang slide
    slides[currentSlide].classList.add('active');
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}
