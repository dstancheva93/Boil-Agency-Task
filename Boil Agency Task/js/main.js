document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu icon
    const mobileIcon = document.getElementById("mobile-menu-icon");
    const mobileMenu = document.getElementById("mobile-menu");

    mobileIcon.addEventListener("click", function () {
        mobileIcon.classList.toggle("change");
        mobileMenu.classList.toggle("show-mobile-menu");
    });

    // Carousel Section
    const slider = document.getElementById('slider');
    const slides = slider.children;
    let slideIndex = 0;
    let isTransitioning = false;
    let interval;

    
    const initialTranslateX = -18;

    function showSlide() {
        isTransitioning = true;
        const translateX = initialTranslateX - slideIndex * (100 / slides.length);
        slider.style.transition = 'transform 6s'; 
        slider.style.transform = `translateX(${translateX}%)`;

      
        setTimeout(() => {
            slider.style.transition = 'none';
            isTransitioning = false;
            slideIndex = (slideIndex + 1) % slides.length;
            showSlide();
        }, 6000); 
    }

    function startCarousel() {
        interval = setInterval(() => {
            if (!isTransitioning) {
                slideIndex = (slideIndex + 1) % slides.length;
                showSlide();
            }
        }, 6000); 


        const mediaQuery = window.matchMedia('(max-width: 768px)'); 
        if (mediaQuery.matches) {
            // On mobile and tablet, only show three slides
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.minWidth = '33.33%'; 
            }
        }
    }

   
    showSlide();


    startCarousel();
});
