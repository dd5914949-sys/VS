// Hero Slideshow Functionality

class HeroSlideshow {
    constructor() {
        this.slides = document.querySelectorAll('.hero-slide');
        this.indicators = document.querySelectorAll('.indicator-dot');
        this.currentSlide = 0;
        this.slideInterval = null;
        this.transitionDuration = 6000; // 6 seconds per slide
        
        this.init();
    }
    
    init() {
        if (this.slides.length === 0) return;
        
        // Show first slide
        this.slides[0].classList.add('active');
        if (this.indicators.length > 0) {
            this.indicators[0].classList.add('active');
        }
        
        // Start automatic slideshow
        this.startSlideshow();
        
        // Add click events to indicators
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                this.goToSlide(index);
                this.resetInterval();
            });
        });
        
        // Add click events to control buttons if they exist
        const prevBtn = document.querySelector('.slide-btn.prev');
        const nextBtn = document.querySelector('.slide-btn.next');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                this.prevSlide();
                this.resetInterval();
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                this.nextSlide();
                this.resetInterval();
            });
        }
        
        // Pause on hover (optional)
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.addEventListener('mouseenter', () => this.pauseSlideshow());
            heroSection.addEventListener('mouseleave', () => this.startSlideshow());
        }
    }
    
    startSlideshow() {
        this.slideInterval = setInterval(() => {
            this.nextSlide();
        }, this.transitionDuration);
    }
    
    pauseSlideshow() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
            this.slideInterval = null;
        }
    }
    
    resetInterval() {
        this.pauseSlideshow();
        this.startSlideshow();
    }
    
    goToSlide(index) {
        // Remove active class from current slide
        this.slides[this.currentSlide].classList.remove('active');
        if (this.indicators.length > 0) {
            this.indicators[this.currentSlide].classList.remove('active');
        }
        
        // Set new current slide
        this.currentSlide = index;
        
        // Add active class to new slide
        this.slides[this.currentSlide].classList.add('active');
        if (this.indicators.length > 0) {
            this.indicators[this.currentSlide].classList.add('active');
        }
    }
    
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextIndex);
    }
    
    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prevIndex);
    }
}

// Initialize slideshow when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new HeroSlideshow();
});

// Navbar scroll effect (existing functionality)
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});
