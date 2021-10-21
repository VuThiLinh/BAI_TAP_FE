var slideIndex = 1;
slideBtn(slideIndex);

function slideBtn(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.querySelectorAll(".slideItem");
    var dots = document.querySelectorAll(".dot")

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block"; 

    for(i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active")
    }
    dots[slideIndex-1].classList.add("active");
}

(() => {
    setInterval(() => {
        showSlides(slideIndex);
        slideIndex += 1;
    }, 5000);
})();