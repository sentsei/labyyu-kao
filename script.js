// script.js

// Nagsisimula tayo sa unang slide (index 0)
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    // Tanggalin ang 'active' class sa lahat ng slides para maitago sila
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Logic para hindi lumagpas sa bilang ng slides
    if (index >= slides.length) {
        currentSlide = 0; // Babalik sa una kapag natapos na
    } else if (index < 0) {
        currentSlide = slides.length - 1; // Pupunta sa dulo kapag nag-previous sa unang slide
    } else {
        currentSlide = index;
    }

    // Idagdag ang 'active' class sa kasalukuyang slide para lumitaw ito
    slides[currentSlide].classList.add('active');
}

// Function na tinatawag kapag pinindot ang Next (1) o Previous (-1) buttons
function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

