document.addEventListener('DOMContentLoaded', function(){
    const slides = document.querySelectorAll('.card')
    const time = 3000
    let currentSlide = 0
    
    function carosel() {
        slides.forEach((slide) => {
            slide.style.transition = 'transform 1s ease-in-out'
            slide.style.transform = `translateX(-${currentSlide * 1240}px)`
        });

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0
            setTimeout(() => {
                slides.forEach(slide => {
                    slide.style.transition = 'none';
                });
            }, 1000)
        }
    }

    setInterval(carosel, time);
});
